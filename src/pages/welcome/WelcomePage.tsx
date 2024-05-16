import { Col, Row } from "react-bootstrap";
import ApiKeyInput from "../../components/ApiKeyInput";
import { WelcomePageProps } from "../../interfaces/WelcomePage";
import { SwitchPage } from "../../components/SwitchPage";
import "./WelcomePage.css"

function WelcomePage ({ setCurrentPage, setSubmittedNewKey, setValidKey, validKey }: WelcomePageProps) {
    return (
        <div className="full-height welcome">
            <Row className="full-height d-flex margins">
                <Col className="column d-flex">
                    <div>
                        <div className="title-text">
                            Welcome to the 
                            <br></br>
                            WEBSITE_NAME
                        </div>
                        <div className="ai-text">
                            (Powered by AI)  
                        </div>
                        <br></br>
                        <div className="api-text">
                            <p>The WEBSITE_NAME uses chatGPT to provide accurate results.</p>
                            {!validKey && <p>Please provide an OpenAI API key before moving forward.</p>}
                            {validKey && <p>You're all set! Enjoy the quiz!</p>}
                        </div>
                        {!validKey && <ApiKeyInput setSubmittedNewKey={setSubmittedNewKey} setValidKey={setValidKey} blurPage={false} type={"welcome"}></ApiKeyInput>}
                        {validKey && <SwitchPage setCurrentPage={setCurrentPage} currentPage={0} type={"welcome"}></SwitchPage>}
                    </div>      
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </div>
    )
}

export default WelcomePage;