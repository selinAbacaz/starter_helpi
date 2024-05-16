import { Button, Col, Form, Row } from "react-bootstrap";
import { Button as MuiButton } from "@mui/material";
import { ApiKeyInputProps } from "../interfaces/ApiKeyInput";
import { useState } from "react";
import OpenAI from "openai";
import './ApiKeyInput.css'

export let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function ApiKeyInput ({ setSubmittedNewKey, setValidKey, blurPage, type }: ApiKeyInputProps) {
    const [key, setKey] = useState<string>(keyData); //for api key input  

     async function checkValidAPIKey () {
        const openai = new OpenAI(
            {
              apiKey: key,
              dangerouslyAllowBrowser: true
            }
        );
    
        try {
            await openai.models.list();
            setValidKey(true);
            window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
        } catch (error) {
            localStorage.setItem(saveKeyData, JSON.stringify(""));
            setValidKey(false);
        }
    }

    async function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        await checkValidAPIKey();
        setSubmittedNewKey(true);
    }

    async function handleEnterSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            event.preventDefault();
            await handleSubmit();
        } 
    }

    //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }

    if (type === "welcome") {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} disabled={blurPage} onKeyDown={handleEnterSubmit}></Form.Control>
                    </Col>
                    <Col>
                        <Button className="submit-button" variant={"outline-secondary"} onClick={handleSubmit} disabled={blurPage}>Submit</Button>
                    </Col>
                </Row>
                
                
            </Form>
        )
    }
    else {
        return (
            <Form style= {{backgroundColor: "salmon"}}>
                <Form.Label style={{marginLeft: 15}}>API Key:</Form.Label>
                <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} onKeyDown={handleEnterSubmit} disabled={blurPage} style= {{width: "50%", marginLeft: "25%"}}></Form.Control>
                <br></br>
                <MuiButton onClick={handleSubmit} disabled={blurPage} variant="contained" sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    backgroundColor:" #916448",
                    color: "#f9e0d1",
                    '&:hover': {
                        backgroundColor: "#724930",
                        color: "#f9e0d1",
                    }
                }}>Submit</MuiButton>
            </Form>
        )
    }
}

export default ApiKeyInput;