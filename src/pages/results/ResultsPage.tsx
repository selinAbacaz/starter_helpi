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
import ErrorMessage from './components/ErrorMessage';

export function ResultsPage ({ setQuestionsToUse, setSubmitFlagBasic, setSubmitFlagDetailed, questionsToUse, submitFlagBasic, submitFlagDetailed}: ResultsPageProps) {
    const [overviewBasic, setOverviewBasic] = useState<string>(saveResponses.saveOverviewBasic); // Contains the general overview chatGPT returns for the basic questions
    const [industriesBasic, setIndustriesBasic] = useState<string>(saveResponses.saveIndustriesBasic); // Contains the list of industries chatGPT returns for the basic questions
    const [overviewDetailed, setOverviewDetailed] = useState<string>(saveResponses.saveOverviewDetailed); // Contains the general overview chatGPT returns for the detailed questions
    const [industriesDetailed, setIndustriesDetailed] = useState<string>(saveResponses.saveIndustriesDetailed); // Contains the list of industries chatGPT returns for the detailed questions
    const [chatGPTReplyBasic, setChatGPTReplyBasic] = useState<string[]>(saveResponses.saveGPTReplyBaic); // Contains chatGPTs reply to the users input for basic questions
    const [chatGPTReplyDetailed, setChatGPTReplyDetailed] = useState<string[]>(saveResponses.saveGPTReplyDetailed); // Contains chatGPTs reply to the users input for detailed questions
    const [pieChartValuesBasic, setPieChartValuesBasic] = useState<string>(saveResponses.savePieChartValuesBasic);
    const [pieChartValuesDetailed, setPieChartValuesDetailed] = useState<string>(saveResponses.savePieChartValuesDetailed);
    const [error, setError] = useState<boolean>(false); // Determiens whether or not there was an error while proccessing GPT responses.
    
    useEffect(() => {
        if (submitFlagBasic) {
            GenerateText("overview", "basic", "", setError, setOverviewBasic);
            GenerateText("industry", "basic", "", setError, setIndustriesBasic);
            GenerateText("pie", "basic", "", setError, setPieChartValuesBasic);
            console.log("basic");
        }
        if (submitFlagDetailed) {
            GenerateText("overview", "detailed", "", setError, setOverviewDetailed);
            GenerateText("industry", "detailed", "", setError, setIndustriesDetailed);
            GenerateText("pie", "detailed", "", setError, setPieChartValuesDetailed);
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
       if (error) {
            setSubmitFlagBasic(false);
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
    
                pdf.addImage(canvas, 'JPEG', 5, 5, imgWidth, imgHeight);
                pdf.save('downloaded_page.pdf');
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    };



    return(
        <div>
            <div>
                <div className={ error || submitFlagBasic || submitFlagDetailed ? "backgrColor on-loading" : "backgrColor"} style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div>
                        <Col className={ error || submitFlagBasic || submitFlagDetailed ? "textBox loading-screen" : "textBox"}>
                            <Row>
                                <Col>
                                    {industriesBasic && industriesDetailed && overviewBasic && overviewDetailed &&
                                    <Form.Select onChange={changeQuestionsToUse} style={{width: "41%", justifyContent: "flex-end", display: "flex"}} defaultValue={questionsToUse} disabled={submitFlagBasic || submitFlagDetailed}>
                                        <option value="basic">Basic Questions</option>
                                        <option value="detailed">Detailed Questions</option>
                                    </Form.Select>}
                                </Col>
                                <Col style={{justifyContent: "flex-end", display: "flex", alignContent: "flex-end"}}>
                                    {((industriesBasic && overviewBasic) || (industriesDetailed && overviewDetailed)) && !submitFlagBasic && !submitFlagDetailed &&
                                    <Button onClick={downloadPDF} variant={"outline-light"} >
                                        <img src={require('../../assets/images/downloadIcon.png')} alt="Download Button"></img>
                                    </Button>}
                                </Col>
                            </Row>
                           
                            {!error && questionsToUse === "basic" && industriesBasic && overviewBasic && <ResultsSectionText></ResultsSectionText>}
                            {!error && questionsToUse === "detailed" && industriesDetailed && overviewDetailed && <ResultsSectionText></ResultsSectionText>}
                            <div ref = {pdf}> 
                            {!error && questionsToUse === "basic" && industriesBasic && overviewBasic && !submitFlagBasic && <ResultsSection setChatGPTReply={setChatGPTReplyBasic} setError={setError} chatGPTReply={chatGPTReplyBasic} industries={industriesBasic} overview={overviewBasic} pieChartValues={pieChartValuesBasic} questionsToUse={questionsToUse}></ResultsSection>}
                            {!error && questionsToUse === "detailed" && industriesDetailed && overviewDetailed && !submitFlagDetailed &&<ResultsSection setChatGPTReply={setChatGPTReplyDetailed} setError={setError} chatGPTReply={chatGPTReplyDetailed} industries={industriesDetailed} overview={overviewDetailed} pieChartValues={pieChartValuesDetailed} questionsToUse={questionsToUse}></ResultsSection>}
                            </div>
                            {!error && submitFlagBasic && questionsToUse === "basic" && <LoadingScreen></LoadingScreen>}
                            {!error &&submitFlagDetailed && questionsToUse === "detailed" && <LoadingScreen></LoadingScreen>}
                            {error && <ErrorMessage></ErrorMessage>}
                        </Col>   
                    </div>
                </div>
            </div>
        </div>
    );
}