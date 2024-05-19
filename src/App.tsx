import React, { useState } from 'react';
import './App.css';
import { HomePage } from './pages/home/HomePage';
import { BasicQuestions } from './pages/questions/BasicQuestions';
import { DetailedQuestions } from './pages/questions/DetailedQuestions';
import { NavBar } from './components/NavBar';
import { ResultsPage } from './pages/results/ResultsPage';
import { FooterEx } from './components/Foooter';
import WelcomePage from './pages/welcome/WelcomePage';
import { keyData } from './components/ApiKeyInput';
import ApiError from './components/ApiError';
import { vistedWelcomePage } from './components/SwitchPage';

let userSubmmittedNewKey: boolean = false;
export function userHasSubmittedKey(saveSubmittedNewKey: string) {
  const prevKey = sessionStorage.getItem(saveSubmittedNewKey);
  if (prevKey !== null) {
      userSubmmittedNewKey = JSON.parse(prevKey);
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState<number>(vistedWelcomePage === true ? 0 : 4 ); // Determines the current page of the webstie, represented as a number
  const [blurPage, setBlurPage] = useState<boolean>(false); // Determines whether or not the page will be blurred
  const [submitFlagBasic, setSubmitFlagBasic] = useState<boolean>(false); // Determines whether or not the basic questions have been submitted
  const [submitFlagDetailed, setSubmitFlagDetailed] = useState<boolean>(false); // Determines whether or not the detailed questions have been submitted
  const [questionsToUse, setQuestionsToUse] = useState<string>("basic"); // Determines what questions and answers chatGPT should use
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validKey, setValidKey] = useState<boolean>(keyData !== "");
  const [submittedNewKey, setSubmittedNewKey] = useState<boolean>(userSubmmittedNewKey);

  return (
      <div className={blurPage ? "App enableBlur" : "App"}>
        {!validKey && submittedNewKey && <ApiError></ApiError>}
        {currentPage !== 4 && <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={submitFlagBasic || submitFlagDetailed} submitted={submitted}></NavBar>}
        {currentPage === 0 && <HomePage setCurrentPage={setCurrentPage} blurPage={blurPage} setBlurPage={setBlurPage}></HomePage>}
        {currentPage === 1 && <BasicQuestions blurPage={blurPage} setBlurPage={setBlurPage} setCurrentPage={setCurrentPage} submitFlagBasic={submitFlagBasic} setSubmitFlagBasic={setSubmitFlagBasic} setQuestionsToUse={setQuestionsToUse} setSubmitted={setSubmitted}></BasicQuestions>}
        {currentPage === 2 && <DetailedQuestions blurPage={blurPage} setBlurPage={setBlurPage} setCurrentPage={setCurrentPage} submitFlagDetailed={submitFlagDetailed} setSubmitFlagDetailed={setSubmitFlagDetailed} setQuestionsToUse={setQuestionsToUse} setSubmitted={setSubmitted}></DetailedQuestions>}
        {currentPage === 3 && <ResultsPage submitFlagBasic={submitFlagBasic} setSubmitFlagBasic={setSubmitFlagBasic} submitFlagDetailed={submitFlagDetailed} setSubmitFlagDetailed={setSubmitFlagDetailed} questionsToUse={questionsToUse} setQuestionsToUse={setQuestionsToUse}></ResultsPage>}
        {currentPage === 4 && <WelcomePage setCurrentPage={setCurrentPage} setSubmittedNewKey={setSubmittedNewKey} setValidKey={setValidKey} validKey={validKey}></WelcomePage>}
        {currentPage !== 4 && <FooterEx setSubmittedNewKey={setSubmittedNewKey} setValidKey={setValidKey} blurPage={blurPage}></FooterEx>}
      </div>
  );
}

export default App;
