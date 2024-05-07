import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { HomePage } from './homePage';
import { BasicQuestions } from './BasicQuestions';
import { DetailedQuestions } from './DetailedQuestions';
import { NavBar } from './components/NavBar';
import { ResultsPage } from './resultsPage';
import {FooterEx} from'./components/Foooter';


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
export let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [currentPage, setCurrentPage] = useState<number>(0); // Determines the current page of the webstie, represented as a number
  const [blurPage, setBlurPage] = useState<boolean>(false); // Determines whether or not the page will be blurred
  const [overview, setOverview] = useState<string>(""); // Sets the overview text in the results page
  const [industries, setIndustries] = useState<string>(""); // Sets the industries text in the results page
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
      <div className={blurPage ? "App enableBlur" : "App"}>
        <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} blurPage={blurPage} setBlurPage={setBlurPage}></NavBar>
        {currentPage === 0 && <HomePage setCurrentPage={setCurrentPage} blurPage={blurPage} setBlurPage={setBlurPage}></HomePage>}
        {currentPage === 1 && <BasicQuestions blurPage={blurPage} setBlurPage={setBlurPage} setCurrentPage={setCurrentPage} setOverview={setOverview} setIndustries={setIndustries}></BasicQuestions>}
        {currentPage === 2 && <DetailedQuestions blurPage={blurPage} setBlurPage={setBlurPage} setCurrentPage={setCurrentPage} setOverview={setOverview} setIndustries={setIndustries}></DetailedQuestions>}
        {currentPage === 3 && <ResultsPage setOverview={setOverview} overview={overview} setIndustries={setIndustries} industries={industries}></ResultsPage>}
        
        <FooterEx></FooterEx>
        
      </div>
  );
}

export default App;
