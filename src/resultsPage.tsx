import './homePage.css';
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
                    <Row >
                        <Col className=" box2">
                                Overview
                        </Col>
                        <Col>
                            <Row style={{display:"flex"}}>
                            <Col className= "  red box">
                                Industry 
                            </Col>
                            <Col className= "  green box">
                                Specific Jobs
                            </Col>
                            </Row>
                            <Row style={{display:"flex"}}>
                                <Col className= "  pink box">
                                Other
                                </Col>
                                <Col className= "  orange box">
                                Other 2
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