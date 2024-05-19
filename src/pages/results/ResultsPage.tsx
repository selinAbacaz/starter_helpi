import './ResultsPage.css';
import { Col, Form, Button} from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { GenerateText, saveGPTReplyBaic, saveGPTReplyDetailed, saveIndustriesBasic, saveIndustriesDetailed, saveOverviewBasic, saveOverviewDetailed, savePieChartValuesBasic, savePieChartValuesDetailed } from './GPT';
import ResultsSection from './components/ResultsSection';
import ResultsSectionText from './components/ResultsSectionText';
import { ResultsPageProps } from '../../interfaces/ResultsPage';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function ResultsPage ({ setQuestionsToUse, setSubmitFlagBasic, setSubmitFlagDetailed, questionsToUse, submitFlagBasic, submitFlagDetailed}: ResultsPageProps) {
    const [overviewBasic, setOverviewBasic] = useState<string>(saveOverviewBasic); // Contains the general overview chatGPT returns for the basic questions
    const [industriesBasic, setIndustriesBasic] = useState<string>(saveIndustriesBasic); // Contains the list of industries chatGPT returns for the basic questions
    const [overviewDetailed, setOverviewDetailed] = useState<string>(saveOverviewDetailed); // Contains the general overview chatGPT returns for the detailed questions
    const [industriesDetailed, setIndustriesDetailed] = useState<string>(saveIndustriesDetailed); // Contains the list of industries chatGPT returns for the detailed questions
    const [chatGPTReplyBasic, setChatGPTReplyBasic] = useState<string>(saveGPTReplyBaic); // Contains chatGPTs reply to the users input for basic questions
    const [chatGPTReplyDetailed, setChatGPTReplyDetailed] = useState<string>(saveGPTReplyDetailed); // Contains chatGPTs reply to the users input for detailed questions
    const [pieChartValuesBasic, setPieChartValuesBasic] = useState<string>(savePieChartValuesBasic);
    const [pieChartValuesDetailed, setPieChartValuesDetailed] = useState<string>(savePieChartValuesDetailed);

    useEffect(() => {
        if (submitFlagBasic) {
            GenerateText("overview", "basic", "", setOverviewBasic);
            GenerateText("industry", "basic", "", setIndustriesBasic);
            GenerateText("pie", "basic", "", setPieChartValuesBasic);
            console.log("basic");
            setSubmitFlagBasic(false);
        }
        if (submitFlagDetailed) {
            GenerateText("overview", "detailed", "", setOverviewDetailed);
            GenerateText("industry", "detailed", "", setIndustriesDetailed);
            GenerateText("pie", "detailed", "", setPieChartValuesDetailed);
            console.log("detailed");
            setSubmitFlagDetailed(false);
        }
    }, [submitFlagBasic, setSubmitFlagBasic, submitFlagDetailed, setSubmitFlagDetailed]);

    function changeQuestionsToUse (event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestionsToUse(event.target.value);
    }
    // const value that obtains the amount that will be downloaded in the pdf
    const pdf = useRef<HTMLDivElement>(null);
    // Function that allows the user to download the results page as a pdf file
    // Function adjusted by Chat GPT to be properly implemented
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
                <div style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"} }>
                    <div>
                        <Col className = "textBox">
                            <Form.Select onChange={changeQuestionsToUse} style={{width: "19%", justifyContent: "flex-end", display: "flex"}} defaultValue={questionsToUse}>
                                <option value="basic">Basic Questions</option>
                                <option value="detailed">Detailed Questions</option>
                            </Form.Select>
                            
                            {questionsToUse === "basic" && industriesBasic && overviewBasic && <ResultsSectionText setGPTReply={setChatGPTReplyBasic} chatGPTReply={chatGPTReplyBasic} industries={industriesBasic} overview={overviewBasic} pieChartValues={pieChartValuesBasic} questionsToUse={questionsToUse}></ResultsSectionText>}
                            {questionsToUse === "detailed" && industriesDetailed && overviewDetailed && <ResultsSectionText setGPTReply={setChatGPTReplyDetailed} chatGPTReply={chatGPTReplyDetailed} industries={industriesDetailed} overview={overviewDetailed} pieChartValues={pieChartValuesDetailed} questionsToUse={questionsToUse}></ResultsSectionText>}
                            <div ref = {pdf}> 
                            {questionsToUse === "basic" && industriesBasic && overviewBasic && <ResultsSection setGPTReply={setChatGPTReplyBasic} chatGPTReply={chatGPTReplyBasic} industries={industriesBasic} overview={overviewBasic} pieChartValues={pieChartValuesBasic} questionsToUse={questionsToUse}></ResultsSection>}
                            {questionsToUse === "detailed" && industriesDetailed && overviewDetailed && <ResultsSection setGPTReply={setChatGPTReplyDetailed} chatGPTReply={chatGPTReplyDetailed} industries={industriesDetailed} overview={overviewDetailed} pieChartValues={pieChartValuesDetailed} questionsToUse={questionsToUse}></ResultsSection>}
                            </div>
                        </Col>   
                    </div>
                </div>
            </div>
            <div>
                <Button onClick={downloadPDF}>Download Results as PDF</Button>
            </div>

        </div>
    );
}