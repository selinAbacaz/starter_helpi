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
<div className="container my-5" >

    <footer className="text-white text-center text-lg-start bg-primary">

    <section className="d-flex justify-content-between p-4" style={{backgroundColor: "blue"}}>
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <a href="https://www.youtube.com/watch?v=a56T2llZf_k&ab_channel=Udont_know_mee" className="text-white me-4" style={{fontSize: 24}}>
          <i className="fa fa-youtube-play"></i>
        </a>
        <a href="https://www.google.com/search?q=shrimp+fried+rice+meme&sca_esv=a0ffaebd0ed0b666&sca_upv=1&rlz=1C1VDKB_enUS981US981&ei=L_s6ZsGIMKLj5NoP352BmAg&ved=0ahUKEwiB3Lfal_2FAxWiMVkFHd9OAIMQ4dUDCBA&uact=5&oq=shrimp+fried+rice+meme&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnNocmltcCBmcmllZCByaWNlIG1lbWUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjOC1CEBFiqCnABeAGQAQCYAVigAf4CqgEBNbgBA8gBAPgBAZgCBqACmgPCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBRAuGIAEwgIHEAAYgAQYCsICCxAAGIAEGIYDGIoFmAMAiAYBkAYKkgcBNqAHvSA&sclient=gws-wiz-serp" className="text-white me-4" style={{fontSize: 24}}>
          <i className="fa fa-google"></i>
        </a>
        <a href="https://github.com/selinAbacaz/starter_helpi" className="text-white me-4" style={{fontSize: 24}}>
          <i className="fa fa-github"></i>
        </a>
      </div>
    </section>

    <div className="container p-4" style= {{backgroundColor: "salmon"}}>
      <div className="row mt-4">
        
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>
  
          <p>
            Website made by Selin Bacaz, Brandon Nauta, and Nathan Rowell 
            For Cisc 275
          </p>
  
          <p>
            Career Quiz Website using ChatGPT to generate results answers..
            Helloooo everyone !!
          </p>
  
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
  
          <div className="form-outline form-white mb-4">
            <input type="text" id="formControlLg" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="formControlLg">Search</label>
          </div>
  
          <ul className="fa-ul" style={{marginLeft: 1.65}}>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">New York, NY 10012, US</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 01 234 567 88</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 01 234 567 89</span>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>
  
          <table className="table text-center text-white">
            <tbody className="font-weight-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
      
      
    </div>

<div>
  
</div >
    <Form style= {{backgroundColor: "salmon"}}>
              <Form.Label>API Key:</Form.Label>
              <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey} disabled={blurPage}></Form.Control>
              <br></br>
              <Button className="Submit-Button" onClick={handleSubmit} disabled={blurPage}>Submit</Button>
  </Form>

    
  </footer>
  
  
</div>

</div>
)
}


