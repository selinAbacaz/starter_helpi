import { Col, Row } from "react-bootstrap";
import ApiKeyInput from "../../components/ApiKeyInput";
import { WelcomePageProps } from "../../interfaces/WelcomePage";
import { SwitchPage } from "../../components/SwitchPage";

function WelcomePage ({ setCurrentPage, setSubmittedNewKey, setValidKey }: WelcomePageProps) {
    return (
        <div style={{minHeight: "100vh", marginLeft: "10px", marginRight: "10px"}}>
            <Row style={{height: "100vh", display: "flex"}}>
                <Col style={{textAlign: "left", alignItems: "center", display: "flex"}}>
                    <div>
                        <div style={{fontSize: "95px"}}>
                            Welcome to the 
                            <br></br>
                            WEBSITE_NAME
                        </div>
                        <div style={{fontSize: "50px"}}>
                            (Powered by AI)  
                        </div>
                        <br></br>
                        <div style={{fontSize: "25px"}}>
                            <p>
                                The WEBSITE_NAME uses chatGPT to provide accurate results. 
                                <br></br>
                                Please provide an OpenAI API key before moving forward.
                            </p>
                        </div>
                        <ApiKeyInput setSubmittedNewKey={setSubmittedNewKey} setValidKey={setValidKey} blurPage={false} type={"welcome"}></ApiKeyInput>
                        <SwitchPage setCurrentPage={setCurrentPage} currentPage={0} type={"welcome"}></SwitchPage>
                    </div>      
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </div>
    )
}

export default WelcomePage;