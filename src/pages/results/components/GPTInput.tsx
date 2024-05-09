import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { GenerateText } from "../GPT";

interface GPTInputProps {
    questionsToUse: string;
    setChatGPTReply: (newReply: string[]) => void;
}

function GPTInput ({questionsToUse, setChatGPTReply}: GPTInputProps) {
    const [userInput, setUserInput] = useState<string>(""); // Contains the users input for GPT communication

    async function submitToGPT () {
        await GenerateText("user", questionsToUse, userInput, undefined, setChatGPTReply);
        
    }
    
    function changeUserInput (event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
    }

    return (
        <div>
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

export default GPTInput