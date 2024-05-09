import { Col, Row } from "react-bootstrap";
import { ResultsSectionProps } from "../../../interfaces/ResultsSection";
import ShowPieChart from "./PieChart";
import '../ResultsPage.css'
import ReactMarkdown from "react-markdown";

function ResultsSection ({ setGPTReply, chatGPTReply, industries, overview, pieChartValues, questionsToUse }: ResultsSectionProps) {
    return (
        <div>
            <h1> Overview: </h1>
            <ReactMarkdown children={overview}></ReactMarkdown>
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
                <Col>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <ShowPieChart pieChartValues={pieChartValues}></ShowPieChart>
                    </div>
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
            <br></br>
            <ReactMarkdown children={industries}></ReactMarkdown>
            <br></br>
            <h1>Replies:</h1>
            <ReactMarkdown children={chatGPTReply}></ReactMarkdown>
        </div>
    );
}

export default ResultsSection