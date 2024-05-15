import { Col, Row } from "react-bootstrap";

function WelcomePage () {
    return (
        <div style={{fontSize: "75px", minHeight: "100vh"}}>
            <Row style={{height: "100vh"}}>
                <Col style={{justifyContent: "left", alignItems: "center", display: "flex"}}>
                    Welcome to the 
                    <br></br>
                    WEBSITE_NAME
                    <br></br>
                    (Powerd by Ai)
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </div>
    )
}

export default WelcomePage;