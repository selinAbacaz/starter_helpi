import React, { useState } from 'react';
import './homePage.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export function HomePage(){

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
                        meow button 1
                    </Col>
                    <Col className= "  green box">
                        meow description                        
                    </Col>
                    </Row>
                    <Row style={{display:"flex", justifyContent:"right"}}>
                        <Col className= "  pink box">
                            meow button 2
                        </Col>
                        <Col className= "  orange box">
                            detailed meow description 
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

