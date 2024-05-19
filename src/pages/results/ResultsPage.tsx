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
    const [pieChartValuesBasic, setPieChartValuesBasic] = useState<string>(saveResponses.savePieChartValuesBasic); // Contains the JSON outputed by chatGPT containing the users personality values for the basic questions
    const [pieChartValuesDetailed, setPieChartValuesDetailed] = useState<string>(saveResponses.savePieChartValuesDetailed); // Contains the JSON outputed by chatGPT containing the users personality values for the detailed questions
    const [error, setError] = useState<string>(""); // Determiens whether or not there was an error while proccessing GPT responses.
    
    useEffect(() => {
        if (submitFlagBasic) {
            GenerateText("overview", "basic", "", setError, setOverviewBasic);
            GenerateText("industry", "basic", "", setError, setIndustriesBasic);
            GenerateText("pie", "basic", "", setError, setPieChartValuesBasic);
        }
        if (submitFlagDetailed) {
            GenerateText("overview", "detailed", "", setError, setOverviewDetailed);
            GenerateText("industry", "detailed", "", setError, setIndustriesDetailed);
            GenerateText("pie", "detailed", "", setError, setPieChartValuesDetailed);
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
        //essentially takes a screenshot of the results page and turns it into a downloadable pdf file
        //at the click of a button
        //function adjusted by Chat GPT to be properly implemented
        
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
                {/*checking to see if there is an error or if it is loading- formats box accordingly*/}
                <div className={ error || submitFlagBasic || submitFlagDetailed ? "backgrColor on-loading" : "backgrColor"} style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                
                    <div>
                        {/* basically doing the same thing as above div- checking to see if there is an error or if it is loading- formats box accordingly*/}
                        <Col className={ error || submitFlagBasic || submitFlagDetailed ? "textBox loading-screen" : "textBox"} xs={6} md={8}>
                            <Row>
                                <Col>
                                    {/*if both results pages have texts rto be displayed, makes it so options box appears for user to be able to pick between them */}
                                    {industriesBasic && industriesDetailed && overviewBasic && overviewDetailed &&
                                    <Form.Select onChange={changeQuestionsToUse} style={{width: "41%", justifyContent: "flex-end", display: "flex"}} defaultValue={questionsToUse} disabled={submitFlagBasic || submitFlagDetailed}>
                                        <option value="basic">Basic Questions</option>
                                        <option value="detailed">Detailed Questions</option>
                                    </Form.Select>}
                                </Col>
                                <Col style={{justifyContent: "flex-end", display: "flex", alignContent: "flex-end"}}>
                                    {/* displays download button once results are processed and displayed */}
                                    {((industriesBasic && overviewBasic) || (industriesDetailed && overviewDetailed)) && !submitFlagBasic && !submitFlagDetailed &&
                                    <Button onClick={downloadPDF} variant={"outline-light"} >
                                        <img src={require('../../assets/images/downloadIcon.png')} alt="Download Button"></img>
                                    </Button>}
                                </Col>
                            </Row>
                           
                           {/*checking if there are basic or detailed reports processed- displays accordingly-- also checks which one to use (hence the question on which one to use) */}
                            {!error && questionsToUse === "basic" && industriesBasic && overviewBasic && <ResultsSectionText></ResultsSectionText>}
                            {!error && questionsToUse === "detailed" && industriesDetailed && overviewDetailed && <ResultsSectionText></ResultsSectionText>}
                            <div ref = {pdf}> 
                            {/*signifies whihc areas to download with the pdf downloader featrue */}
                                {!error && questionsToUse === "basic" && industriesBasic && overviewBasic && !submitFlagBasic && <ResultsSection setChatGPTReply={setChatGPTReplyBasic} setError={setError} chatGPTReply={chatGPTReplyBasic} industries={industriesBasic} overview={overviewBasic} pieChartValues={pieChartValuesBasic} questionsToUse={questionsToUse}></ResultsSection>}
                                {!error && questionsToUse === "detailed" && industriesDetailed && overviewDetailed && !submitFlagDetailed &&<ResultsSection setChatGPTReply={setChatGPTReplyDetailed} setError={setError} chatGPTReply={chatGPTReplyDetailed} industries={industriesDetailed} overview={overviewDetailed} pieChartValues={pieChartValuesDetailed} questionsToUse={questionsToUse}></ResultsSection>}
                            </div>
                            {/*Checks to see if it should render a loading screen or an error message*/}
                            {!error && submitFlagBasic && questionsToUse === "basic" && <LoadingScreen></LoadingScreen>}
                            {!error &&submitFlagDetailed && questionsToUse === "detailed" && <LoadingScreen></LoadingScreen>}
                            {error && <ErrorMessage error={error}></ErrorMessage>}
                        </Col>   
                    </div>
                </div>
            </div>
        </div>
    );
}