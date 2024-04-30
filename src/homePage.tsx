import './homePage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPages5 } from './interfaces/SwitchPages';
import { SwitchPage } from './components/SwitchPage';

export function HomePage ({setCurrentPage, blurPage, setBlurPage}: SwitchPages5) {

    return(
        <div>
            <div style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"} }>
                <div>
                    <Container>
                        <Row>
                            <Col className=" box2">
                            
                            </Col>
                            <Col>
                                <Row style={{display:"flex", justifyContent:"right"}}>
                                    <Col className= "box" style= {{backgroundColor: "salmon"}}>
                                        <SwitchPage setCurrentPage={setCurrentPage} currentPage={1} varaint={"primary"} type={"button"} blurPage={blurPage} setBlurPage={setBlurPage}/*Basic Question Button*/></SwitchPage>
                                    </Col>
                                    <Col className= "box" style= {{backgroundColor: "#ff6347",color:"#f9e0d1"}}>
                                        Take the basic career assessment to discover a career path personally picked for you! 
                                        The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. 
                                        The basic quiz consists of 10 shorter questions to provide a quick and easy experience to determine your results.
                                    </Col>
                                </Row>
                                <Row style={{display:"flex", justifyContent:"right"}}>
                                    <Col className= "box" style= {{backgroundColor: "#FE8A2E"}}>
                                        <SwitchPage setCurrentPage={setCurrentPage} currentPage={2} varaint={"primary"} type={"button"} blurPage={blurPage} setBlurPage={setBlurPage}/*Detailed Question Button*/></SwitchPage>
                                    </Col>
                                    <Col className= "orange box" style={{color:"#916448"}}>
                                        Take the detailed career assessment to discover a career path personally picked for you! 
                                        The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. 
                                        The detailed quiz consists of 10 longer and more detailed questions to provide the more accurate results.
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

