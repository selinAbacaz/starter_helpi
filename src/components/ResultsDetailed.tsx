import { Button, Col, Form, Row } from "react-bootstrap";
import { changeUserInput, submitToGPT } from "../resultsPage";

interface ResultsPageDetailedProps {
    industriesDetailed: string;
    overviewDetailed: string;
    chatGPTReply: string;
}

function ResultsPageDetailed ({industriesDetailed, overviewDetailed, chatGPTReply}: ResultsPageDetailedProps) {
    return (
        <div>
            <div style={{border: "3px solid #F4E9E2", padding: '40px'}}>
                <h1>Ask chatGPT anything about your results:</h1>
                <br></br>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control type="input" placeholder="Ask chatGPT" onChange={changeUserInput}></Form.Control>
                        </Col>
                        <Col>
                            <Button onClick={submitToGPT}>Submit</Button>
                        </Col>
                    </Row>
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
            <div style={{whiteSpace: "pre-line"}}>
                {overviewDetailed}
            </div>
            <Row>
                <Col>
                    <Row className = "name1">
                        <h2 className = "title1"> Humanitarian </h2>
                        <p> Driven to make the world a better place. Creative and imaginative in coming up with insightful solutions to meaningful problems.</p>
                    </Row>
                    <Row className = "name4">
                        <h2 className = "title2"> Caretaker </h2>
                        <p> Wants to be of service to others. Prefers to work within established institutions to find ways to maintain stability and security. </p>
                    </Row>
                </Col>
                <Col className = "name2">
                    <img src={require("../assets/images/pieChart.jpg")} alt="Pie Chart" />
                </Col>
                <Col>
                    <Row className = "name3">
                        <h2 className = "title3"> Innovator </h2>
                        <p> Likes to solve complex, rational problems. Uses analytical skills to come up with innovative ways to improve logical systems. </p>
                    </Row>
                    <Row className = "name5">
                        <h2 className = "title4"> Pragmatist </h2>
                        <p> Wants to ensure accuracy and efficiency. Enjoys working within established, logical systems to accomplish practical, real-world goals.  </p>
                    </Row>
                </Col>
            </Row>
            <h1> Potential Industries: </h1>
            <div style={{whiteSpace: "pre-line"}}>
                {industriesDetailed}
            </div>
            <h1>Replies:</h1>
            <div style={{whiteSpace: "pre-line"}}>
                {chatGPTReply}
            </div>
        </div>
    );
}

export default ResultsPageDetailed