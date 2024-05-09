import React, { useState } from 'react';
import './App.css';
import { HomePage } from './pages/home/HomePage';
import { BasicQuestions } from './pages/questions/BasicQuestions';
import { DetailedQuestions } from './pages/questions/DetailedQuestions';
import { NavBar } from './components/NavBar';
import { ResultsPage } from './pages/results/ResultsPage';
import { FooterEx } from './components/Foooter';

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0); // Determines the current page of the webstie, represented as a number
  const [blurPage, setBlurPage] = useState<boolean>(false); // Determines whether or not the page will be blurred
  const [submitFlagBasic, setSubmitFlagBasic] = useState<boolean>(false); // Determines whether or not the basic questions have been submitted
  const [submitFlagDetailed, setSubmitFlagDetailed] = useState<boolean>(false); // Determines whether or not the detailed questions have been submitted
  const [questionsToUse, setQuestionsToUse] = useState<string>("basic"); // Determines what questions and answers chatGPT should use
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
      <div className={blurPage ? "App enableBlur" : "App"}>
        <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={submitFlagBasic || submitFlagDetailed} submitted={submitted}></NavBar>
        {currentPage === 0 && <HomePage setCurrentPage={setCurrentPage} blurPage={blurPage} setBlurPage={setBlurPage}></HomePage>}
        {currentPage === 1 && <BasicQuestions blurPage={blurPage} setBlurPage={setBlurPage} setCurrentPage={setCurrentPage} submitFlagBasic={submitFlagBasic} setSubmitFlagBasic={setSubmitFlagBasic} setQuestionsToUse={setQuestionsToUse} setSubmitted={setSubmitted}></BasicQuestions>}
        {currentPage === 2 && <DetailedQuestions blurPage={blurPage} setBlurPage={setBlurPage} setCurrentPage={setCurrentPage} submitFlagDetailed={submitFlagDetailed} setSubmitFlagDetailed={setSubmitFlagDetailed} setQuestionsToUse={setQuestionsToUse} setSubmitted={setSubmitted}></DetailedQuestions>}
        {currentPage === 3 && <ResultsPage submitFlagBasic={submitFlagBasic} setSubmitFlagBasic={setSubmitFlagBasic} submitFlagDetailed={submitFlagDetailed} setSubmitFlagDetailed={setSubmitFlagDetailed} questionsToUse={questionsToUse} setQuestionsToUse={setQuestionsToUse}></ResultsPage>}
        <FooterEx blurPage={blurPage}></FooterEx>
      </div>
  );
}

export default App;
