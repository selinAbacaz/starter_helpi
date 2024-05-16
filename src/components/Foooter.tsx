import { Button, Form } from "react-bootstrap";
import React, { useState } from 'react';


interface FooterProps {
  blurPage: boolean;
}

export let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function FooterEx({ blurPage }: FooterProps){

  const [key, setKey] = useState<string>(keyData); //for api key input  

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  

return(

<div>
<div >

  <footer className="text-white text-center" style= {{backgroundColor:"salmon"}}>

    <section className="d-flex justify-content-between p-4" style={{backgroundColor: "#916448"}}>
      <div >
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <a href="https://www.youtube.com/watch?v=coaN2VBNgYA&ab_channel=Brisses" target="_blank" className="text-white me-4" style={{fontSize: 24}} rel="noreferrer">
          <i className="fa fa-youtube-play"></i>
        </a>
        <a target="_blank" href="https://www.google.com/search?q=shrimp+fried+rice+meme&sca_esv=a0ffaebd0ed0b666&sca_upv=1&rlz=1C1VDKB_enUS981US981&ei=L_s6ZsGIMKLj5NoP352BmAg&ved=0ahUKEwiB3Lfal_2FAxWiMVkFHd9OAIMQ4dUDCBA&uact=5&oq=shrimp+fried+rice+meme&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnNocmltcCBmcmllZCByaWNlIG1lbWUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjOC1CEBFiqCnABeAGQAQCYAVigAf4CqgEBNbgBA8gBAPgBAZgCBqACmgPCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAuGIAEwgIHEAAYgAQYCsICCxAAGIAEGIYDGIoFmAMAiAYBkAYKkgcBNqAHvSA&sclient=gws-wiz-serp" className="text-white me-4" style={{fontSize: 24}} rel="noreferrer">
          <i className="fa fa-google"></i>
        </a>
        <a target="_blank" href="https://github.com/selinAbacaz/starter_helpi" className="text-white me-4" style={{fontSize: 24}} rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </section>

      <section  style= {{backgroundColor: "salmon", fontSize: 18}}>
          <div style={{alignContent:"center", justifyContent:"center", display:"flex"}}>
              <p style={{float:"left", marginLeft:"10%"}}>
                <br></br>
                Career Helpi authored by Selin Bacaz, Nathan Rowell, Brandon Nauta.
                <br></br>
                All art assets produced by Selin Bacaz.
              </p>
              <img src= {require("../assets/images/tinyWorm.png")} alt= "tiny worm" style={{height:"10%", width:"10%", float:"right"}}></img>

          </div>          
      </section>

      <hr style={{height: 4, backgroundColor: "white", marginLeft: "15%", marginRight: "15%", borderRadius:80, color: "white"}}></hr>
      
      <Form style= {{backgroundColor: "salmon"}}>
        <Form.Label style={{marginLeft: 15}}>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} disabled={blurPage} style= {{width: "50%", marginLeft: "25%"}}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit} disabled={blurPage} style= {{backgroundColor:"#916448", borderColor:"#916448"}}>
          Submit</Button>
      </Form>

        
    </footer>
      
      
  </div>

</div>
)
}


