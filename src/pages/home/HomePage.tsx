import './HomePage.css';
import '../../assets/milchellaFont/stylesheet.css'
import '../../assets/magilioFont/stylesheet.css'
import '../../assets/LouisGeorgeCafe/stylesheet.css'
import { Col, Container, Row } from 'react-bootstrap';
import { SwitchPage } from '../../components/SwitchPage';
import { HomePageProps } from '../../interfaces/HomePage';



export function HomePage ({setBlurPage, setCurrentPage, blurPage}: HomePageProps) {

    return(
        <div>
            <div className= "backgrColor" style={ {border: '3px white', padding: '4px', justifyContent:"right"} }>
                <div>
                    <Container style= {{minWidth: "95%"}}>
                        
                        <Row  style={{minHeight: "120%"}}>
                            {/* this row contains top part of homepage with the image, buttons, and short descriptions */}
                            <Col className="HPImageBox" style={{marginRight: "1%", minHeight: "120%"}}>
                            </Col>

                            <Col>
                                <Row style={{display:"flex", justifyContent:"right"}}>
                                    <Col className= "buttonBox1 LouisGeorgeNormal" style={{marginBottom: "1%", marginRight: "1%"}}>
                                        <SwitchPage setCurrentPage={setCurrentPage} currentPage={1} variant={"primary"} type={"button"} blurPage={blurPage} setBlurPage={setBlurPage}/*Basic Question Button*/></SwitchPage>
                                    </Col>
                                    <Col className= "box magilio" style= {{backgroundColor: "#ff6347",color:"#f9e0d1", opacity: "75%", marginBottom: "1%"}}>
                                        <h1>10</h1>
                                        <h2>Basic Questions</h2>
                                        <h3><i className="arrow left"></i><i className="arrow left"></i></h3>
                                         
                                    </Col>
                                </Row>
                                <Row style={{display:"flex", justifyContent:"right"}}>
                                    <Col className= "buttonBox2 LouisGeorgeNormal" style={{marginRight: "1%"}}>
                                        <SwitchPage setCurrentPage={setCurrentPage} currentPage={2} variant={"primary"} type={"button"} blurPage={blurPage} setBlurPage={setBlurPage}/*Detailed Question Button*/></SwitchPage>
                                    </Col>
                                    <Col className= "orange box magilio" style={{color:"#916448", opacity: "75%",}}>
                                        <h1>10</h1>
                                        <h2>Detailed Questions</h2>
                                        <h3><i className="arrow2 left" ></i><i className="arrow2 left"></i></h3>                                        
                                    </Col>
                                </Row>
                            </Col>
                            
                        </Row>

                        <Row style= {{marginTop:"2%", backgroundColor: "#855440"}}>
                                <h1 className="magilio" style={{color:"white", fontSize: "400%", opacity: "80%", marginTop: "5%", marginBottom: "2%", letterSpacing:5}}> Results made reliable with AI</h1>
                                <hr style={{height: 4, width: "60%", backgroundColor: "white", marginLeft: "20%", borderRadius:80, color: "white", marginBottom: "5%"}}></hr>
                        </Row>
                        <Row className= "HP-lower" style={{minHeight: "100%", backgroundColor: "#b56f53b2"}}>
                            
                            {/* this row contains underneath part of home page with more information on basic and detailed questions- WIP */}
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

