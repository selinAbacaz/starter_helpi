import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { GenerateText } from "./GPT";

interface GPTInputProps {
    questionsToUse: string;
    setChatGPTReplyBasic: (newBasicReply: string) => void;
    setChatGPTReplyDetailed: (newDetailedReply: string) => void;
}

function GPTInput ({questionsToUse, setChatGPTReplyBasic, setChatGPTReplyDetailed}: GPTInputProps) {
    const [userInput, setUserInput] = useState<string>(""); // Contains the users input for GPT communication

    async function submitToGPT () {
        if (questionsToUse === "basic") {
            await GenerateText("user", questionsToUse, userInput, setChatGPTReplyBasic);
        }
        else {
            await GenerateText("user", questionsToUse, userInput, setChatGPTReplyDetailed);
        }
    }
    
    function changeUserInput (event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
    }

    return (
        <div style={{border: "3px solid #F4E9E2", padding: '40px'}}>
            <h1>Ask chatGPT anything about your results:</h1>
            <br></br>
            <Form>
                <Row>
                    <Col>
                        <Form.Control type="input" placeholder="Ask chatGPT" onChange={changeUserInput}></Form.Control>
                    </Col>
                    <Col>
                        <Button onClick={submitToGPT}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default GPTInput;