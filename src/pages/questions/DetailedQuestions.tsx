import React, { useState } from "react";
import { ShowProgressBar } from "./components/ProgressBar";
import { ShowAlert } from "./components/Alert";
import { Col, Form, Row } from 'react-bootstrap';
import './Questions.css';
import '../../App.css'
import { QuestionsProps } from "../../interfaces/Questions";
import { DetailedQuestionsProps } from "../../interfaces/DetailedQuestions";
import SubmitButtons from "./components/SubmitButtons";

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

function Question ({setNumQuestionAnswered, answerPlacement, question, submitted}: QuestionsProps) {
    const [userAnswer, setUserAnswer] = useState<string>(detailedAnswerArray[answerPlacement]);
    
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        detailedAnswerArray[answerPlacement] = event.target.value;
        setNumQuestionAnswered(detailedAnswerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }
    
    return (
        <div>
            <h3 style={{marginBottom:20}}>{question}</h3>
            <Form style={{width: "50%"}}>
                <Form.Control 
                    type="input" 
                    value={userAnswer} 
                    onChange={updateAnswer} 
                    disabled={submitted} 
                    placeholder="Enter Answer Here...">
                </Form.Control>
            </Form>
            <hr style={{height: 5, backgroundColor: "#916448", marginBottom:60, color: "#916448"}}></hr>
        </div>
    );
}

export function DetailedQuestions({ setBlurPage, blurPage, setCurrentPage, submitFlagDetailed, setSubmitFlagDetailed, setQuestionsToUse, setSubmitted }: DetailedQuestionsProps): JSX.Element {
    // Contains the combined questions from either baisc/detailed questions
    const [numQuestionsAnswered, setNumQuestionsAnswered] = useState<number>(detailedAnswerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    const [submitted, setSubmittedAnswers] = useState<boolean>(false); // Determines whether or not the results have been submitted

    return (
        <div className="disableBlur backgrColor">
            {/* Header with information on how to take the quiz */}
            <div className={blurPage ? "enableBlur" : ""}>
            <img src= {require("../../assets/images/strawberry.png")} alt="strawberry" style={{zIndex:100, right: 2, position: "fixed" }}/>
                <img src= {require("../../assets/images/strawberry.png")} alt="strawberry" style={{zIndex:100, transform:"scaleX(-1)", left: 2, position: "fixed" }}/>
                <Row className="DetailImage" style={ {border: '2px white', padding: '2px', color: "#44506a", display: "flex"}}>
                    <Col style= {{marginLeft: 340}}>
                        <header className= "box">
                            <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "white", backgroundColor: "#c9885fda", minHeight:"80%",marginTop:"", fontFamily: "magilio", wordSpacing:2, letterSpacing:2} }>
                                <div> 
                                    <br></br><p> Answer Truthfully</p> <p>and</p> <p>Check for Typos !</p><br></br> 
                                </div>
                            </div>
                        </header>
                    </Col>

                    <Col style= {{marginRight: 340}}>
                        <header className= "box " >
                            <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "white", backgroundColor: "#c9885fda", minHeight:"80%",marginTop:"", fontFamily: "magilio", wordSpacing:2, letterSpacing:2} }>
                                <div> 
                                    <br></br><p> Or Don't</p> <p>afterall</p> <p>We cant stop you !</p><br></br> 
                                </div>
                            </div>
                        </header>
                        
                    </Col>
                </Row>
            </div>
            <br></br>
            <br></br>
            <div>
                {submitted && <ShowAlert setBlurPage={setBlurPage} blurPage={blurPage} setCurrentPage={setCurrentPage} setQuestionsToUse={setQuestionsToUse} questionsToUse={"detailed"} setSubmitted={setSubmitted}></ShowAlert>}
            </div>
            <div className={blurPage ? "margins enableBlur" : "margins"} style={ {padding: '4px', color: "#c9885f", backgroundColor: "white", letterSpacing:1, wordSpacing: 1} }>
                {/* progress bar's own little box */}
                <div style= {{top:window.screenTop, position: "sticky"}}>
                    <div className={blurPage ? "enableBlur" : ""} style= {{ padding: '10px' }}>
                        <ShowProgressBar numQuestionsAnswered={numQuestionsAnswered} totalQuestions={detailedAnswerArray.length}></ShowProgressBar>
                    </div>
                </div>
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
                    <SubmitButtons 
                        setBlurPage={setBlurPage} 
                        setCurrentPage={setCurrentPage} 
                        setQuestionsToUse={setQuestionsToUse}
                        setSubmitted={setSubmitted}
                        setSubmitFlag={setSubmitFlagDetailed} 
                        setSubmittedAnswers={setSubmittedAnswers} 
                        blurPage={blurPage} 
                        questionsToUse={"detailed"}
                        numQuestionsAnswered={numQuestionsAnswered} 
                        submitted={submitted} 
                        submitFlag={submitFlagDetailed}>

                    </SubmitButtons>
                </div>
            </div>
            <br></br>
        </div>
    )
} 