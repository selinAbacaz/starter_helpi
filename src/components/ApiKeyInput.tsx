import { Button, Form } from "react-bootstrap";
import { ApiKeyInputProps } from "../interfaces/ApiKeyInput";
import { useState } from "react";

export let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function ApiKeyInput ({ blurPage, type }: ApiKeyInputProps) {
    const [key, setKey] = useState<string>(keyData); //for api key input  

    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
    }

    //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }

    if (type === "welcome") {
        return (
            <Form>
                <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} disabled={blurPage} style= {{width: "50%"}}></Form.Control>
                <Button className="Submit-Button" onClick={handleSubmit} disabled={blurPage}>Submit</Button>
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