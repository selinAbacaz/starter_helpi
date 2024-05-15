import { Col, Row } from "react-bootstrap";

function WelcomePage () {
    return (
        <div style={{minHeight: "100vh", marginLeft: "10px", marginRight: "10px"}}>
            <Row style={{height: "100vh"}}>
                <Col style={{justifyContent: "left", alignItems: "center", display: "flex"}}>
                    <div>
                        <div style={{fontSize: "95px"}}>
                            Welcome to the 
                            <br></br>
                            WEBSITE_NAME
                        </div>
                        <br></br>
                        <div style={{fontSize: "50px"}}>
                            (Powered by AI)  
                        </div>
                    </div>
                    
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </div>
    )
}

export default WelcomePage;