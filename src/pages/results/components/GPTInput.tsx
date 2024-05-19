import { useState } from "react";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import { GenerateText } from "../GPT";
import { Button } from "@mui/material";

interface GPTInputProps {
    setChatGPTReply: (newReply: string[]) => void;
    setError: (error: boolean) => void;
    questionsToUse: string;
    
}

function GPTInput ({setChatGPTReply, setError, questionsToUse}: GPTInputProps) {
    const [userInput, setUserInput] = useState<string>(""); // Contains the users input for GPT communication
    const [loading, setLoading] = useState<boolean>(false);

    async function submitToGPT () {
        setLoading(true);
        await GenerateText("user", questionsToUse, userInput, setError, undefined, setChatGPTReply);
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
                        {!loading && <Button onClick={submitToGPT} variant="contained" sx={{
                            borderRadius: "10px",
                            backgroundColor: "#f9e0d1",
                            color: "#5d3627",
                            '&:hover' : {
                                backgroundColor: "#fad8c3",
                                color: "#5d3627",
                            }
                        }}>Submit</Button>}
                        {loading && <Spinner></Spinner>}
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default GPTInput