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
<div className="container my-5">

    <footer className="text-white text-center text-lg-start bg-primary">
    <div className="container p-4">
      <div className="row mt-4">
        
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>
  
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>
  
          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>
  
          <div className="mt-4">
            
            <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-facebook-f"></i></a>
            
            <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-dribbble"></i></a>
            
            <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-twitter"></i></a>
            
            <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-google-plus-g"></i></a>
            
          </div>
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
  
</div>
    <Form>
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


