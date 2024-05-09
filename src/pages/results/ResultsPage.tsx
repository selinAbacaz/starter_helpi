import './ResultsPage.css';
import { Col, Form, Button, Row} from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { GenerateText, saveResponses } from './GPT';
import ResultsSection from './components/ResultsSection';
import ResultsSectionText from './components/ResultsSectionText';
import { ResultsPageProps } from '../../interfaces/ResultsPage';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import LoadingScreen from './components/LoadingScreen';

export function ResultsPage ({ setQuestionsToUse, setSubmitFlagBasic, setSubmitFlagDetailed, questionsToUse, submitFlagBasic, submitFlagDetailed}: ResultsPageProps) {
    const [overviewBasic, setOverviewBasic] = useState<string>(saveResponses.saveOverviewBasic); // Contains the general overview chatGPT returns for the basic questions
    const [industriesBasic, setIndustriesBasic] = useState<string>(saveResponses.saveIndustriesBasic); // Contains the list of industries chatGPT returns for the basic questions
    const [overviewDetailed, setOverviewDetailed] = useState<string>(saveResponses.saveOverviewDetailed); // Contains the general overview chatGPT returns for the detailed questions
    const [industriesDetailed, setIndustriesDetailed] = useState<string>(saveResponses.saveIndustriesDetailed); // Contains the list of industries chatGPT returns for the detailed questions
    const [chatGPTReplyBasic, setChatGPTReplyBasic] = useState<string[]>(saveResponses.saveGPTReplyBaic); // Contains chatGPTs reply to the users input for basic questions
    const [chatGPTReplyDetailed, setChatGPTReplyDetailed] = useState<string[]>(saveResponses.saveGPTReplyDetailed); // Contains chatGPTs reply to the users input for detailed questions
    const [pieChartValuesBasic, setPieChartValuesBasic] = useState<string>(saveResponses.savePieChartValuesBasic);
    const [pieChartValuesDetailed, setPieChartValuesDetailed] = useState<string>(saveResponses.savePieChartValuesDetailed);
    
    useEffect(() => {
        if (submitFlagBasic) {
            GenerateText("overview", "basic", "", setOverviewBasic);
            GenerateText("industry", "basic", "", setIndustriesBasic);
            GenerateText("pie", "basic", "", setPieChartValuesBasic);
            console.log("basic");
        }
        if (submitFlagDetailed) {
            GenerateText("overview", "detailed", "", setOverviewDetailed);
            GenerateText("industry", "detailed", "", setIndustriesDetailed);
            GenerateText("pie", "detailed", "", setPieChartValuesDetailed);
            console.log("detailed");
        }
    }, [submitFlagBasic, setSubmitFlagBasic, submitFlagDetailed, setSubmitFlagDetailed]);

    function changeQuestionsToUse (event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestionsToUse(event.target.value);
    }

    useEffect(() => {
       if (industriesBasic && overviewBasic) {
            setSubmitFlagBasic(false);
       }
       if (industriesDetailed && overviewDetailed) {
            setSubmitFlagDetailed(false);
       }
    });

    const pdf = useRef<HTMLDivElement>(null);
    const downloadPDF = () => {
        const input = pdf.current;
        if (!input) return;
    
        html2canvas(input)
            .then((canvas) => {
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
    
                const aspectRatio = canvas.width / canvas.height;
                let imgWidth = pdfWidth;
                let imgHeight = imgWidth / aspectRatio;
    
                if (imgHeight > pdfHeight) {
                    imgHeight = pdfHeight;
                    imgWidth = imgHeight * aspectRatio;
                }
    
                pdf.addImage(canvas, 'JPEG', 0, 0, imgWidth, imgHeight);
                pdf.save('downloaded_page.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    };



    return(
        <div>
            <div>
                <div className= "backgrColor "style={{border: '3px white', padding: '4px', color: "#44506a",justifyContent:"right"}}>
                    <div>
                        <Col className = "textBox">
                            <Row>
                                <Col>
                                    {industriesBasic && industriesDetailed && overviewBasic && overviewDetailed &&
                                    <Form.Select onChange={changeQuestionsToUse} style={{width: "41%", justifyContent: "flex-end", display: "flex"}} defaultValue={questionsToUse} disabled={submitFlagBasic || submitFlagDetailed}>
                                        <option value="basic">Basic Questions</option>
                                        <option value="detailed">Detailed Questions</option>
                                    </Form.Select>}
                                </Col>
                                <Col style={{justifyContent: "flex-end", display: "flex", alignContent: "flex-end"}}>
                                    {((industriesBasic && overviewBasic) || (industriesDetailed && overviewDetailed)) &&
                                    <Button onClick={downloadPDF} variant={"outline-light"} >
                                        <img src={require('../../assets/images/downloadIcon.png')} alt="Download Button"></img>
                                    </Button>}
                                </Col>
                            </Row>
                           
                            {questionsToUse === "basic" && industriesBasic && overviewBasic && <ResultsSectionText></ResultsSectionText>}
                            {questionsToUse === "detailed" && industriesDetailed && overviewDetailed && <ResultsSectionText></ResultsSectionText>}
                            <div ref = {pdf}> 
                            {questionsToUse === "basic" && industriesBasic && overviewBasic && !submitFlagBasic && <ResultsSection setChatGPTReply={setChatGPTReplyBasic} chatGPTReply={chatGPTReplyBasic} industries={industriesBasic} overview={overviewBasic} pieChartValues={pieChartValuesBasic} questionsToUse={questionsToUse}></ResultsSection>}
                            {questionsToUse === "detailed" && industriesDetailed && overviewDetailed && !submitFlagDetailed &&<ResultsSection setChatGPTReply={setChatGPTReplyDetailed} chatGPTReply={chatGPTReplyDetailed} industries={industriesDetailed} overview={overviewDetailed} pieChartValues={pieChartValuesDetailed} questionsToUse={questionsToUse}></ResultsSection>}
                            </div>
                            {submitFlagBasic && questionsToUse === "basic" && <LoadingScreen></LoadingScreen>}
                            {submitFlagDetailed && questionsToUse === "detailed" && <LoadingScreen></LoadingScreen>}
                        </Col>   
                    </div>
                </div>
            </div>
            <div>
                
            </div>

        </div>
    );
}