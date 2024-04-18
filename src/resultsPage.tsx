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
                        <Container>
                        <Col className = "navBar" style={{width: 3}}> 
                        NAV BAR
                    </Col>
                        </Container>
                    <Container >
                        <Row>
                    <Col>
                        <Row className ="box2">
                                Overview
                        </Row>
                        <Row className = "red box" style={{display:"flex"}}>
                                Industry 
                        </Row>
                        <Row className= "  green box">
                            Specific Jobs
                        </Row>
                        <Row className = " pink box" style={{display:"flex"}}>
                                Other
                        </Row>
                        <Row className = " orange box">
                                Other 2
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