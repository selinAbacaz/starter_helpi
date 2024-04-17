import './homePage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPages } from './interfaces/SwitchPages';
import { SwitchPage } from './components/SwitchPage';

export function HomePage ({setCurrentPage}: SwitchPages) {

    return(
        <div>
            <title> header of page </title>
            <div>
                <header >
                    <div style={ {border: '3px', fontSize: 16, padding: '8px', color: "#ff6347", backgroundColor: "white"} }>
                        <div className="right"> <p>Home | Account | LogOut | Results</p> </div>
                        <p> Quiz Home Page</p> 
                    </div>

                </header>
                <body style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#aebcda", justifyContent:"right"} }>
                    <div >
                    <Container >
                    <Row >
                        <Col className=" box2">
                                meow12
                        </Col>
                        <Col>
                            <Row style={{display:"flex", justifyContent:"right"}}>
                            <Col className= "  red box">
                                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={1} /*Basic Question Button*/></SwitchPage> 
                            </Col>
                            <Col className= "  green box">
                                Take the basic career assessment to discover a career path personally picked for you! The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. The basic quiz consists of 10 shorter questions to provide a quick and easy experience to determine your results.
                            </Col>
                            </Row>
                            <Row style={{display:"flex", justifyContent:"right"}}>
                                <Col className= "  pink box">
                                    <SwitchPage setCurrentPage={setCurrentPage} pageNumber={2} /*Detailed Question Button*/></SwitchPage>
                                </Col>
                                <Col className= "  orange box">
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

