import { Col, Row } from "react-bootstrap";
import ApiKeyInput from "../../components/ApiKeyInput";
import { WelcomePageProps } from "../../interfaces/WelcomePage";
import { SwitchPage } from "../../components/SwitchPage";
import "./WelcomePage.css"
import '../../assets/LouisGeorgeCafe/stylesheet.css'
import TypewriterComponent from "typewriter-effect";

function WelcomePage ({ setCurrentPage, setSubmittedNewKey, setValidKey, validKey }: WelcomePageProps) {
    return (
        <div className="full-height welcome">
            <Row className="full-height d-flex row-margins animations LouisGeorgeNormal">
                <Col xs={12} md={6} className="text-column d-flex">
                    <div className="text-background">
                        <div className="text-margins">
                            <div className="title-text magilio">
                                Welcome to the 
                                <br></br>
                                Career Chef
                            </div>
                            <div className="ai-text">
                                <TypewriterComponent onInit={(typewriter) => {
                                    typewriter
                                    .pauseFor(500)
                                    .changeDelay(75)
                                    .typeString("(Powered by AI)")
                                    .start()
                                    .callFunction(() => {
                                        const cursor = document.querySelector(".Typewriter__cursor");
                                        if (cursor) {
                                            cursor.setAttribute('style', 'visibility: hidden');
                                        }
                                    })}} ></TypewriterComponent>
                            </div>
                            <br></br>
                            <div className="api-text">
                                <p>The Career Chef uses chatGPT to provide accurate results.</p>
                                {!validKey && <p>Please provide an OpenAI API key before moving forward.</p>}
                                {validKey && <p>You're all set! Enjoy the quiz!</p>}
                            </div>
                            <div>
                                {!validKey && <ApiKeyInput setSubmittedNewKey={setSubmittedNewKey} setValidKey={setValidKey} blurPage={false} type={"welcome"}></ApiKeyInput>}
                                {validKey && <SwitchPage setCurrentPage={setCurrentPage} newCurrentPage={0} type={"welcome"}></SwitchPage>}
                            </div>
                        </div>
                        
                    </div>      
                </Col>
                <Col xs={12} md={6} className="cat-image">
                    <img src={require("../../assets/images/Mia.png")} alt="Mia"></img>
                </Col>
            </Row>
        </div>
    )
}

export default WelcomePage;