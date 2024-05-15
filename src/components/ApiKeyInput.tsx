import { Button, Col, Form, Row } from "react-bootstrap";
import { ApiKeyInputProps } from "../interfaces/ApiKeyInput";
import { useEffect, useState } from "react";
import OpenAI from "openai";

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

    //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }

    if (type === "welcome") {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} disabled={blurPage}></Form.Control>
                    </Col>
                    <Col>
                        <Button className="Submit-Button" onClick={handleSubmit} disabled={blurPage}>Submit</Button>
                    </Col>
                </Row>
                
                
            </Form>
        )
    }
    else {
        return (
            <Form style= {{backgroundColor: "salmon"}}>
                <Form.Label style={{marginLeft: 15}}>API Key:</Form.Label>
                <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} disabled={blurPage} style= {{width: "50%", marginLeft: "25%"}}></Form.Control>
                <br></br>
                <Button className="Submit-Button" onClick={handleSubmit} disabled={blurPage} style= {{backgroundColor:"#916448", borderColor:"#916448"}}>
                Submit</Button>
            </Form>
        )
    }
}

export default ApiKeyInput;