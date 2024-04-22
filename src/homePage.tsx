import './homePage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPages5 } from './interfaces/SwitchPages';
import { SwitchPage } from './components/SwitchPage';

export function HomePage ({setCurrentPage, blurPage}: SwitchPages5) {

    return(
        <div>
            <div style={ {border: '3px white', padding: '4px', color: "#44506a", justifyContent:"right"} }>
                <div >
                <Container >
                <Row >
                    <Col className=" box2">
                            meow12
                    </Col>
                    <Col>
                        <Row style={{display:"flex", justifyContent:"right"}}>
                        <Col className= "  red box">
                            <SwitchPage setCurrentPage={setCurrentPage} pageNumber={1} varaint={"primary"} type={"button"} blurPage={blurPage} /*Basic Question Button*/></SwitchPage>
                        </Col>
                        </Row>
                        <Row style={{display:"flex", justifyContent:"right"}}>
                            <Col className= "  pink box">
                                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={2} varaint={"primary"} type={"button"} blurPage={blurPage}/*Detailed Question Button*/></SwitchPage>
                            </Col>
                            <Col className= "  orange box">
                            Take the detailed career assessment to discover a career path personally picked for you! The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. The detailed quiz consists of 10 longer and more detailed questions to provide the more accurate results.
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

