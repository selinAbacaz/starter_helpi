import React, { useState } from "react";
import { ShowProgressBar } from "./components/ProgressBar";
import { ShowAlert } from "./components/Alert";
import { Button, Col, Row } from 'react-bootstrap';
import './Questions.css';
import './App.css'
import { SwitchPages6 } from "./interfaces/SwitchPages";
import { SwitchPage } from "./components/SwitchPage";
import { GenerateText } from "./components/GPT";


interface DetailedQuestionsProps {
    setNumQuestionAnswered: (newAnswered: number) => void;
    question: string;
    answerPlacement: number;
    submitted: boolean
}

export const detailedAnswerArray: string[] = ["", "", "", "", "", "", "", "", "", ""]
export const detailedQuestionsArray: string[] = 
[
    "Question 1: Consider a time where you were really enjoying a subject you were studying in school. Say the subject and describe why you enjoyed learning about the topic it was teaching.",
    "Question 2: Think of a time where you were tasked with doing something you didn't know how to do. Describe how hard it was for you to learn a new skill independently",
    "Question 3: Recall a project or task at work where you were deeply engaged and interested in it. Identify the specific aspect of the project that captured your interest and explain why it resonated with you.",
    "Question 4: Consider a time when you were assigned a leadership role in a team project. Describe how you approached leading the team, the challenges you faced, and how much you enjoyed being a leader compared to times where you were not the leader in a project.",
    "Question 5: Reflect on a time when you had to deliver a presentation to a large audience. Describe how you prepared for the presentation, the challenges you faced during the delivery, and how comfortable or uncomfortable you felt while giving the presentation.",
    "Question 6: Think about a subject you strongly dislike. What is the subject and why do you feel strongly about it?",
    "Question 7: Consider a time when you were doing art. How passionately did you feel about doing art and why?",
    "Question 8: Recall a time when you were fascinated by a topic outside of school, such as a hobby or a current event. What was the topic, and why did it capture your interest?",
    "Question 9: Think about your ability to complete tasks in the following subjects: Math, Science, English, History, Art. What would you say is your best subject, worst subject, and why?",
    "Question 10: Reflect on a time where you were forced to do a lot of social interactions in a day. Did you enjoy having a lot of conversations and what made you like/dislike this experience?"
];

function Question ({setNumQuestionAnswered, question, answerPlacement, submitted}: DetailedQuestionsProps) {
    const [userAnswer, setUserAnswer] = useState<string>(detailedAnswerArray[answerPlacement]);
    
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        detailedAnswerArray[answerPlacement] = event.target.value;
        setNumQuestionAnswered(detailedAnswerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }
    
    return (
        <div>
            <h3 style={{marginBottom:20}}>{question}</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} disabled={submitted}/>
            <div>{userAnswer}</div>
            <hr style={{height: 5, backgroundColor: "#916448", marginBottom:60, color: "#916448"}}></hr>
        </div>
    );
}

export function DetailedQuestions({ setBlurPage, blurPage, setCurrentPage, setOverview, setIndustries }: SwitchPages6): JSX.Element {
    // Contains the combined questions from either baisc/detailed questions
    const [numQuestionsAnswered, setNumQuestionsAnswered] = useState<number>(detailedAnswerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    const [submitted, setSubmittedAnswers] = useState<boolean>(false); // Determines whether or not the results have been submitted
    const [submitButtonText, setSubmittButtonText] = useState<string>("Submit Answers"); // Sets the text of the submitt button based on submitt status

    async function changeSubmitState () {
        setSubmittedAnswers(!submitted)
        if (submitButtonText === "Submit Answers") {
            setSubmittButtonText("Change Answers");
            setBlurPage(true);
            setOverview(await GenerateText("overview", "detailed", ""));
            setIndustries(await GenerateText("industry", "detailed", ""));
        }
        else {
            setSubmittButtonText("Submit Answers");
        }
    }

    return (
        <div className="disableBlur"style={{backgroundColor: "#F4E9E2"}}>
            {/* Header with information on how to take the quiz */}
            <div className={blurPage ? "enableBlur" : ""}>
                <Row className="image2" style={ {border: '2px white', padding: '2px', color: "#44506a", display: "flex"}}>
                    <Col style= {{marginLeft: 340}}>
                        <header className= "box">
                            <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "white", backgroundColor: "#c9885f", borderRadius: 20, fontFamily: "Helvetica", fontWeight: "bold"} }>
                                <div> <p></p><p> Answer Truthfully</p> <p>and</p> <p>fully Check for Typos !</p><p></p> </div>
                            </div>
                        </header>
                    </Col>
                    <Col style= {{marginRight: 340}}>
                        <header className= "box " >
                            <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "white", backgroundColor: "#c9885f", borderRadius: 20, fontFamily: "Helvetica", fontWeight: "bold"} }>
                                <div  > <p></p><p> Or Don't</p> <p>afterall</p> <p>We cant stop you !</p><p></p> </div>
                            </div>
                        </header>
                        
                    </Col>
                </Row>
            </div>

            {/* progress bar's own little box */}
            <header className={blurPage ? "enableBlur" : ""}>
                <div style={ {padding: '8px', backgroundColor: "white"} }>
                    <p></p>
                    <ShowProgressBar numQuestionsAnswered={numQuestionsAnswered} totalQuestions={detailedAnswerArray.length}></ShowProgressBar>
                    <p></p>
                </div>
            </header>

            <div> 
                <p>  </p>
            </div>


            <div>
                {submitted && <ShowAlert setBlurPage={setBlurPage} blurPage={blurPage} setCurrentPage={setCurrentPage}></ShowAlert>}
            </div>
            <div className={blurPage ? "margins enableBlur" : "margins"} style={ {padding: '4px', color: "#c9885f", backgroundColor: "white", justifyContent:"right"} }>
                <div className= "Questions">
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[0]} answerPlacement={0} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[1]} answerPlacement={1} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[2]} answerPlacement={2} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[3]} answerPlacement={3} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[4]} answerPlacement={4} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[5]} answerPlacement={5} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[6]} answerPlacement={6} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[7]} answerPlacement={7} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[8]} answerPlacement={8} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={detailedQuestionsArray[9]} answerPlacement={9} submitted={submitted}></Question>
                    <span>
                        <Button onClick={changeSubmitState} disabled={numQuestionsAnswered !== 10 || blurPage}>{submitButtonText}</Button>
                        {submitted && <SwitchPage setCurrentPage={setCurrentPage} currentPage={3} variant={"primary"} type={"results"} blurPage={blurPage} setBlurPage={setBlurPage}></SwitchPage>}
                    </span>
                </div>
            </div>
        </div>
    )
} 