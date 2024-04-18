import './resultsPage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPages } from './interfaces/SwitchPages';

export function ResultsPage ({setCurrentPage}: SwitchPages) {

    return(
        <div>
            <title> header of page </title>
            <div>
                <header >
                    <div style={ {border: '3px', fontSize: 16, padding: '8px', color: "#ff6347", backgroundColor: "white"} }>
                        <div className="right"> <p>Home | Account | LogOut | Results</p> </div>
                        <p> Result Home Page</p> 
                    </div>

                </header>
                <body style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#aebcda", justifyContent:"right"} }>
                    <div >
                    <Container >
                        <Row>
                        <Col className = "navBar" style={{width: "3px"}}> 
                        Overview 
                        Industry
                        Specific Jobs 
                        Other 
                    </Col>
                    <Col>
                    <Row>
                            <Col className ="box2">
                                Overview
                            </Col>
                            <Col className = "textBox" style = {{width: "200px"}}>
                                TEXT WILL BE ENTERED HERE
                            </Col>
                            </Row>
                        <Row >
                            <Col className = "red box" style={{display:"flex"}}>
                                Industry 
                                </Col>
                                <Col className = "textBox">
                                TEXT WILL BE ENTERED HERE
                            </Col>
                        </Row>
                        <Row >
                            <Col className= "  green box">
                            Specific Jobs
                            </Col>
                            <Col className = "textBox">
                                TEXT WILL BE ENTERED HERE
                            </Col>
                        </Row>
                        <Row >
                            <Col className = " pink box" style={{display:"flex"}}>
                                Other
                                </Col>
                                <Col className = "textBox">
                                TEXT WILL BE ENTERED HERE.
                            </Col>
                        </Row>
                        <Row >
                            <Col className = " orange box">
                                Other 2
                                </Col>
                                <Col className = "textBox">
                                TEXT WILL BE ENTERED HERE
                            </Col>
                        </Row>
                    </Col>
                        </Row>
                   
                    </Container>
                    </div>
                </body>
            </div>
        </div>
    );
}


export {}