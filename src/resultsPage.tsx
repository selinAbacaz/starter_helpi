import './resultsPage.css';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { SwitchPages7 } from './interfaces/SwitchPages';
import { useState } from 'react';
import { GenerateText } from './components/GPT';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';





export function ResultsPage({ overview, industries }: SwitchPages7) {
    const [userInput, setUserInput] = useState<string>(""); // Contains the user's input for GPT communication
    const [chatGPTReply, setChatGPTReply] = useState<string>(""); // Contains chatGPT's reply to the user's input
    const [questionsToUse, setQuestionsToUse] = useState<string>("basic"); // Determines what questions and answers chatGPT should use

    // Reference to the content element
    const contentRef = useRef<HTMLDivElement>(null);
    const pdf = useRef<HTMLDivElement>(null);

    async function submitToGPT() {
        setChatGPTReply(await GenerateText("user", questionsToUse, userInput));
    }

    function changeUserInput(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
    }

    function changeQuestionsToUse(event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestionsToUse(event.target.value);
    }
    const downloadPDF = () => {
        const input = pdf.current;
        if (!input) return;
    
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;
            const imgX = 0;
            const imgY = 0;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight);
            pdf.save('downloaded_page.pdf');
          })
          .catch((error) => {
            console.error('Error generating PDF:', error);
          });
    };

    return (
        <div >
            <div>
                <div>
                    <div ref = {pdf}>
                        <Col className="textBox">
                            <div ref={contentRef} style={{ border: "3px solid #F4E9E2", padding: '40px' }}>
                                <h1>Ask chatGPT anything about your results:</h1>
                                <br></br>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Control type="input" placeholder="Ask chatGPT" onChange={changeUserInput}></Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Select onChange={changeQuestionsToUse}>
                                                <option value="basic">Basic Questions</option>
                                                <option value="detailed">Detailed Questions</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Button onClick={submitToGPT} style={{ justifyContent: "center", alignItems: "center" }}>Submit</Button>
                                </Form>
                            </div>
                            <br></br>
                            <br></br>
                            <p> Congratulations! You've just finished a complete assessment of your interests and personality and you're well on your way to discovering your ideal career path.</p>
                            <p>In this free basic report, you'll see a summary of your scores in each of the six career interest areas. You'll learn more about what these scores mean, and how your top interest area can show which careers you are suited for.</p>
                            <p>Then, we'll show you how key personality traits can point you toward a career that takes advantage of your natural strengths.</p>
                            <p>Finally, we'll show you how to unlock your full report to get an in-depth profile of your interests and personality, along with personalized career planning advice and a complete listing of careers that match your individual interest profile.</p>
                            <p>So, let's get started!</p>
                            <h1> Overview: </h1>
                            <div>
                                {overview}
                            </div>
                            <Row>
                                <Col>
                                    <Row className="name1">
                                        <h2 className="title1"> Humanitarian </h2>
                                        <p> Driven to make the world a better place. Creative and imaginative in coming up with insightful solutions to meaningful problems.</p>
                                    </Row>
                                    <Row className="name4">
                                        <h2 className="title2"> Caretaker </h2>
                                        <p> Wants to be of service to others. Prefers to work within established institutions to find ways to maintain stability and security. </p>
                                    </Row>
                                </Col>
                                <Col className="name2">
                                    <img src={require("./assets/images/pieChart.jpg")} alt="Pie Chart" />
                                </Col>
                                <Col>
                                    <Row className="name3">
                                        <h2 className="title3"> Innovator </h2>
                                        <p> Likes to solve complex, rational problems. Uses analytical skills to come up with innovative ways to improve logical systems. </p>
                                    </Row>
                                    <Row className="name5">
                                        <h2 className="title4"> Pragmatist </h2>
                                        <p> Wants to ensure accuracy and efficiency. Enjoys working within established, logical systems to accomplish practical, real-world goals.  </p>
                                    </Row>
                                </Col>
                            </Row>
                            <h1> Potential Industries: </h1>
                            <div>
                                {industries}
                            </div>
                            <h1>Replies:</h1>
                            <div>
                                {chatGPTReply}
                            </div>
                            
                        </Col>
                    </div>
                    <div>
                            <Button onClick={downloadPDF}>Download PDF</Button>
                            </div>
                </div>
            </div>
        </div>
    );
}