import './homePage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPages } from './interfaces/SwitchPages';
import { SwitchPage } from './components/SwitchPage';

export function HomePage ({setCurrentPage}: SwitchPages) {

    return(
        <div>
            <title> header of page </title>
            <div>
                {/* This is where the 'boxes' of the page are- aka the body with the buttons */}
                <body style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "white", justifyContent:"right"} }>
                    <div >
                    <Container >
                    <Row >
                        <Col className=" box2">
                                meow12
                        </Col>
                        <Col>
                            <Row style={{display:"flex", justifyContent:"right"}}>
                            <Col className= "box" style= {{backgroundColor: "salmon"}}>
                                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={1} varaint={"primary"} type={"button"} /*Basic Question Button*/></SwitchPage> 
                            </Col>
                            <Col className= "box" style= {{backgroundColor: "#ff6347"}}>
                                Take the basic career assessment to discover a career path personally picked for you! The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. The basic quiz consists of 10 shorter questions to provide a quick and easy experience to determine your results.
                            </Col>
                            </Row>
                            <Row style={{display:"flex", justifyContent:"right"}}>
                                <Col className= "box" style= {{backgroundColor: "#FE8A2E"}}>
                                    <SwitchPage setCurrentPage={setCurrentPage} pageNumber={2} varaint={"primary"} type={"button"} /*Detailed Question Button*/></SwitchPage>
                                </Col>
                                <Col className= "orange box">
                                Take the detailed career assessment to discover a career path personally picked for you! The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. The detailed quiz consists of 10 longer and more detailed questions to provide the more accurate results.
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

