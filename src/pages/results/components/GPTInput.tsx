import { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { GenerateText } from "../GPT";

interface GPTInputProps {
    questionsToUse: string;
    setChatGPTReply: (newReply: string[]) => void;
}

function GPTInput ({questionsToUse, setChatGPTReply}: GPTInputProps) {
    const [userInput, setUserInput] = useState<string>(""); // Contains the users input for GPT communication
    const [loading, setLoading] = useState<boolean>(false);

    async function submitToGPT () {
        setLoading(true);
        await GenerateText("user", questionsToUse, userInput, undefined, setChatGPTReply);
        setLoading(false);
        
    }
    
    function changeUserInput (event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
    }

    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Control type="input" placeholder="Ask chatGPT" onChange={changeUserInput} disabled={loading}></Form.Control>
                    </Col>
                    <Col>
                        {!loading && <Button onClick={submitToGPT}>Submit</Button>}
                        {loading && <Spinner></Spinner>}
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default GPTInput