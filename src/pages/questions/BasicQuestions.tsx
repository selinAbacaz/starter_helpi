import React, { useState } from "react";
import { ShowProgressBar } from "./components/ProgressBar";
import { ShowAlert } from "./components/Alert";
import { Col, Row, Form } from 'react-bootstrap';
import './Questions.css';
import '../../App.css'
import { QuestionsProps } from "../../interfaces/Questions";
import { BasicQuestionsProps } from "../../interfaces/BasicQuestions";
import SubmitButtons from "./components/SubmitButtons";

export const basicAnswerArray: string[] = ["", "", "", "", "", "", "", "", "", ""];
export const basicQuestionsArray: string[] = 
[
    "What is most important to you in a job between: Salary, Work Life Balance, Growth, Helping Others, Making a Difference?",
    "Do you prefer working solo or with others?",
    "What is your favorite subject in school?",
    "What type of workplace suits you best between: Fast-Paced, Collaborative, Structured, Flexible?",
    "On a scale of 1-10, how much do you like working with technology?",
    "On a scale of 1-10, how much do you enjoy doing art?",
    "Do you prefer working indoors or outdoors?",
    "Do you enjoy coming up with new ideas and solutions?",
    "Do you like tasks that vary each day, or stay the same?",
    "How much education do you plan to pursue? (High School Diploma, Bachelors, Masters, Doctorate)"
];
const optionsArrays: string[][] = 
[
    ["Salary", "Work Life Balance", "Growth", "Helping others", "Making a Difference"],
    ["Solo", "With Others"],
    [""],
    ["Fast-Paced", "Collaborative", "Structured", "Flexible"],
    [""],
    [""],
    ["Indoors", "Outdoors"],
    ["Yes", "No"],
    ["I like tasks that vary", "I like tasks that stay the same"],
    [""]
]

function Question ({setNumQuestionAnswered, question, answerPlacement, submitted}: QuestionsProps) {
    const [userAnswer, setUserAnswer] = useState<string>(basicAnswerArray[answerPlacement]);
    question = "Question " + (answerPlacement + 1 ) + ": " + question;
    
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        if (answerPlacement === 6) {
            if (!basicAnswerArray[4]) {
                basicAnswerArray[4] = "1";
            }
            if (!basicAnswerArray[5]) {
                basicAnswerArray[5] = "1";
            }
        }
        setUserAnswer(event.target.value.toString());
        basicAnswerArray[answerPlacement] = event.target.value;
        setNumQuestionAnswered(basicAnswerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    if (answerPlacement !== 2 && answerPlacement !== 4 && answerPlacement !== 5 && answerPlacement !== 9) {
        return (
            <div>
                <h3 style={{marginBottom:20}}>{question}</h3>
                {optionsArrays[answerPlacement].map((option: string) => (
                    <Form.Check
                        key={option}
                        inline
                        id={option}
                        type="radio"
                        name={answerPlacement.toString()}
                        label={option}
                        value={option}
                        onChange={updateAnswer}
                        checked={userAnswer === option}
                        disabled={submitted}>
                    </Form.Check>
                ))}
                <hr style={{height: 5, backgroundColor: "salmon", marginBottom:60, color: "salmon"}}></hr>
            </div>
        );
    }
    else if (answerPlacement === 4 || answerPlacement === 5) {
        return (
            <div>
                <h3 style={{marginBottom:20}}>{question}</h3>
                <Form style={{width: "50%"}}>
                    <Form.Range 
                        min={1}
                        max={10} 
                        step={1} 
                        defaultValue={userAnswer === "" ? 1 : userAnswer} 
                        onChange={updateAnswer}
                        disabled={submitted}>
                    </Form.Range>
                    <Form.Text style={{color: "salmon"}}>
                        <div className="d-flex justify-content-between">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                    </Form.Text>
                </Form>
                <hr style={{height: 5, backgroundColor: "salmon", marginBottom:60, color: "salmon"}}></hr>
            </div>
        );
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
            <hr style={{height: 5, backgroundColor: "salmon", marginBottom:60, color: "salmon"}}></hr>
        </div>
    );
}

export function BasicQuestions({ setBlurPage, blurPage, setCurrentPage, submitFlagBasic, setSubmitFlagBasic, setQuestionsToUse, setSubmitted}: BasicQuestionsProps): JSX.Element {
    // Contains the number of questions that have been anwered
    const [numQuestionsAnswered, setNumQuestionsAnswered] = useState<number>(basicAnswerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    const [submitted, setSubmittedAnswers] = useState<boolean>(false); // Determines whether or not the results have been submitted

    return (
        <div className="disableBlur backgrColor">
            {/* Header with information on how to take the quiz */}
            <div className={blurPage ? "enableBlur" : ""}>
                <img src= {require("../../assets/images/strawberry.png")} alt="strawberry" style={{zIndex:100, right: 2, position: "fixed" }}/>
                <img src= {require("../../assets/images/strawberry.png")} alt="strawberry" style={{zIndex:100, transform:"scaleX(-1)", left: 2, position: "fixed" }}/>

                <Row className="BasicImage" style={ {border: '2px white', padding: '2px', color: "#44506a", display: "flex"}}>
                    <Col style= {{marginLeft: 340}}>

                        <header className= "box">
                            <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "white",position: "relative", backgroundColor: "#fa8072b9",minHeight:"80%", fontFamily: "magilio", wordSpacing:2, letterSpacing:2 } }>
                                <div> 
                                    <br></br><p> Answer Truthfully</p> <p>and</p> <p>Have Fun !</p><br></br> 
                                </div>
                            </div>
                        </header>
                    </Col>
                    <Col style= {{marginRight: 340}}>
                        <header className= "box " >
                            <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "white",position: "relative", minHeight:"80%",marginTop:"", backgroundColor: "#fa8072b9", fontFamily: "magilio", wordSpacing:2, letterSpacing:2} }>
                                <div>
                                    <br></br><p> Answer Truthfully</p> <p>and</p> <p>Have a Snack !</p><br></br> 
                                </div>
                            </div>
                        </header>
                        
                    </Col>
                </Row>
            </div>

            <br></br>
            <br></br>

            {/* Body with all questions */}
            {submitted && <ShowAlert setBlurPage={setBlurPage} setCurrentPage={setCurrentPage} blurPage={blurPage} setQuestionsToUse={setQuestionsToUse} questionsToUse={"basic"} setSubmitted={setSubmitted}></ShowAlert>}
            <div className={blurPage ? "margins enableBlur" : "margins"} style={ {padding: '4px', color: "salmon", backgroundColor: "white", justifyContent:"right"} }>
                {/* progress bar's own little box */}
                <div style= {{top:window.screenTop, position: "sticky"}}>
                    <div className={blurPage ? "enableBlur" : ""} style= {{ padding: '10px' }}>
                        <ShowProgressBar numQuestionsAnswered={numQuestionsAnswered} totalQuestions={basicAnswerArray.length}></ShowProgressBar>
                    </div>
                </div>
                <div className= "Questions">
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[0]} answerPlacement={0} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[1]} answerPlacement={1} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[2]} answerPlacement={2} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[3]} answerPlacement={3} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[4]} answerPlacement={4} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[5]} answerPlacement={5} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[6]} answerPlacement={6} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[7]} answerPlacement={7} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[8]} answerPlacement={8} submitted={submitted}></Question>
                    <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={basicQuestionsArray[9]} answerPlacement={9} submitted={submitted}></Question>
                    <br></br>
                    <SubmitButtons 
                        setBlurPage={setBlurPage} 
                        setCurrentPage={setCurrentPage} 
                        setQuestionsToUse={setQuestionsToUse}
                        setSubmitted={setSubmitted}
                        setSubmitFlag={setSubmitFlagBasic} 
                        setSubmittedAnswers={setSubmittedAnswers} 
                        blurPage={blurPage} 
                        questionsToUse={"basic"}
                        numQuestionsAnswered={numQuestionsAnswered} 
                        submitted={submitted} 
                        submitFlag={submitFlagBasic}>

                    </SubmitButtons>
                </div>
            </div>
            <br></br>
        </div>
    )
} 