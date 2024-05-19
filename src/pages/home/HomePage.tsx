import './HomePage.css';
import '../../assets/milchellaFont/stylesheet.css';
import '../../assets/magilioFont/stylesheet.css';
import '../../assets/LouisGeorgeCafe/stylesheet.css';
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPage } from '../../components/SwitchPage';
import { HomePageProps } from '../../interfaces/HomePage';



export function HomePage ({setBlurPage, setCurrentPage, blurPage}: HomePageProps) {

    return(
        
        <div className= "backgrColor">
            <div>
                <div>
                    <Container style= {{minWidth: "95%"}}>
                        
                        <Row  style={{gridRow: "100%"}}>
                            {/* this row contains top part of homepage with the image, buttons, and short descriptions */}
                            <Col>
                                <Row className="HPImageBox" style={{marginRight: ".01%", height: "111%"}}></Row>
                            </Col>

                            <Col>
                                <Row style={{display:"flex", justifyContent:"right", height: "55%"}}>
                                    <Col className= "buttonBox1 LouisGeorgeNormal" style={{ marginRight: "1%" }}>
                                        <SwitchPage setCurrentPage={setCurrentPage} newCurrentPage={1} variant={"primary"} type={"button"} blurPage={blurPage} setBlurPage={setBlurPage}/*Basic Question Button*/></SwitchPage>
                                    </Col>
                                    
                                    <Col className= "orangeBun box magilio" style= {{color:"#f9e0d1", height: "101%"}}>
                                         
                                    </Col>
                                </Row>
                                <Row style={{display:"flex", justifyContent:"right", height: "55%"}}>
                                    <Col className= "buttonBox2 LouisGeorgeNormal" style={{marginRight: "1%", marginTop: "1%"}}>
                                        <SwitchPage setCurrentPage={setCurrentPage} newCurrentPage={2} variant={"primary"} type={"button"} blurPage={blurPage} setBlurPage={setBlurPage}/*Detailed Question Button*/></SwitchPage>
                                    </Col>
                                    <Col className= "orangeWithWorm box magilio" style={{color:"#916448", marginTop: ".5%", height: "101%"}}>                    
                                    </Col>
                                </Row>
                            </Col>
                            
                        </Row>

                    </Container>

                    <Container style= {{marginTop: "5%", minWidth: "95%"}}>
                        <Row style= {{marginTop:"2%", backgroundColor: "#855440"}}>
                                <h1 className="magilio" style={{color:"white", fontSize: "400%", opacity: "80%", marginTop: "5%", marginBottom: "2%", letterSpacing:5}}> Results made reliable with AI</h1>
                                <hr style={{height: 4, width: "60%", backgroundColor: "white", marginLeft: "20%", borderRadius:80, color: "white", marginBottom: "5%"}}></hr>
                        </Row>
                        <Row className= "HP-lower" style={{minHeight: "100%", backgroundColor: "#b56f53b2"}}>
                            
                            {/* this row contains underneath part of home page with more information on basic and detailed questions*/}
                            <Col style= {{marginTop: "5%", marginBottom: "15%", minHeight: "100%"}}>
                            {/* basic questions info col */}
                                <header >
                                    <div  style={ { fontSize: 30, padding: '8px', color: "#916448", backgroundColor: "#c9885f",  fontFamily: "Helvetica", fontWeight: "bold", height: 550} }>
                                        <div> <p></p><h1 className= "magilio"> More Information on Basic✦Questions</h1> </div>
                                        <hr style={{height: 5, backgroundColor: "#f8f8f8c7", marginBottom:60, color: "#f8f8f8c7"}}></hr>
                                         <p  className= "LouisGeorgeNormal" style={{fontSize: 25, color: "#f9e0d1", marginLeft: "10%", marginRight:"10%"}}> The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. 
                                        The basic quiz consists of 10 shorter questions with a variety of multiple choice, slider, and short answer to provide a quick and easy experience to determine your results.</p>

                                    </div>
                                </header>
                            </Col>

                            <Col style= {{marginTop: "5%", marginBottom: "5%", minHeight: "100%"}}>
                            {/* details questions info col */}
                                <header >
                                    <div  style={ {fontSize: 30, padding: '8px', color: "#916448", backgroundColor: "#c9885f",  fontFamily: "Helvetica", fontWeight: "bold", height: 550} }>
                                        <div  > <p></p><h1 className= "magilio"> More Information on Detailed✦Questions </h1>
                                        <hr style={{height: 5, backgroundColor: "#f8f8f8c7", marginBottom:60, color: "#f8f8f8c7"}}></hr>
                                        <p className= "LouisGeorgeNormal" style={{fontSize: 25, color: "#f9e0d1", marginLeft: "10%", marginRight:"10%"}}> The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. 
                                        The detailed quiz consists of 10 longer and more detailed open-ended questions that will then be analyzed by AI to provide the more accurate results.</p>
                                        <p className= "LouisGeorgeNormal" style={{fontSize: 25, marginLeft: "10%", marginRight:"10%"}}> Tip: Detailed Questions gives more accurate results !</p>
                                         </div>
                                    </div>
                                </header>
                                    
                            </Col>
                        </Row>

                    </Container>

                    
                </div>
                <br></br>
                
            </div>
            
        </div>
    );
}

