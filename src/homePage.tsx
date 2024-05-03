import './homePage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPages5 } from './interfaces/SwitchPages';
import { SwitchPage } from './components/SwitchPage';
//import { relative } from 'path'; 

export function HomePage ({setCurrentPage, blurPage, setBlurPage}: SwitchPages5) {

    return(
        <div>
            <div style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"} }>
                <div>
                    <Container>
                        
                        <Row>
                            {/* this row contains top part of homepage with the image, buttons, and short descriptions */}
                            <Col className="HPImageBox">
                            </Col>

                            <Col>
                                <Row style={{display:"flex", justifyContent:"right"}}>
                                    <Col className= "box" style= {{backgroundColor: "salmon"}}>
                                        <SwitchPage setCurrentPage={setCurrentPage} currentPage={1} variant={"primary"} type={"button"} blurPage={blurPage} setBlurPage={setBlurPage}/*Basic Question Button*/></SwitchPage>
                                    </Col>
                                    <Col className= "box" style= {{backgroundColor: "#ff6347",color:"#f9e0d1"}}>
                                        Take the basic career assessment to discover a career path personally picked for you! 
                                        
                                    </Col>
                                </Row>
                                <Row style={{display:"flex", justifyContent:"right"}}>
                                    <Col className= "box" style= {{backgroundColor: "#FE8A2E"}}>
                                        <SwitchPage setCurrentPage={setCurrentPage} currentPage={2} variant={"primary"} type={"button"} blurPage={blurPage} setBlurPage={setBlurPage}/*Detailed Question Button*/></SwitchPage>
                                    </Col>
                                    <Col className= "orange box" style={{color:"#916448"}}>
                                        Take the detailed career assessment to discover a career path personally picked for you! 
                                        
                                    </Col>
                                </Row>
                            </Col>
                            
                        </Row>

                        
                        <Row className= "HP-lower">
                            {/* this row contains underneath part of home page with more information on basic and detailed questions- WIP */}
                            <Col >
                            {/* basic questions info col */}
                                <header className= "box" style= {{marginTop: 200, marginBottom: 200}}>
                                    <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "#916448", backgroundColor: "#c9885f",  fontFamily: "Helvetica", fontWeight: "bold"} }>
                                        <div> <p></p><p> More Information on Basic Questions</p> </div>
                                        <hr style={{height: 5, backgroundColor: "#f8f8f8c7", marginBottom:60, color: "#f8f8f8c7"}}></hr>
                                         <p style={{fontSize: 20, color: "#f9e0d1"}}> The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. 
                                        The basic quiz consists of 10 shorter questions with a variety of multiple choice, slider, and short answer to provide a quick and easy experience to determine your results.</p>
                                        <p style= {{color: "#ae3b3bca"}}> Warning: Might not be as accurate as detailed questions !</p> 

                                    </div>
                                </header>
                            </Col>

                            <Col >
                            {/* details questions info col */}
                                <header className= "box " style= {{marginTop: 200, marginBottom: 200}}>
                                    <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "#916448", backgroundColor: "#c9885f",  fontFamily: "Helvetica", fontWeight: "bold"} }>
                                        <div  > <p></p><p> More Information on Detailed Questions </p>
                                        <hr style={{height: 5, backgroundColor: "#f8f8f8c7", marginBottom:60, color: "#f8f8f8c7"}}></hr>
                                        <p style={{fontSize: 20, color: "#f9e0d1"}}> The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. 
                                        The detailed quiz consists of 10 longer and more detailed open-ended questions that will then be analyzed by AI to provide the more accurate results.</p> </div>
                                    </div>
                                </header>
                                    
                            </Col>
                        </Row>

                    </Container>
                
                </div>
                
            </div>
        </div>
    );
}

