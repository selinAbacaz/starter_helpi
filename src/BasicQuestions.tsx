import React, { useState } from "react";
import { ShowProgressBar } from "./components/ProgressBar";
import { SwitchPages } from "./interfaces/SwitchPages";
import { ShowHeader } from "./components/Header";
import './BasicQuestions.css';
import { Col, Container, Row, Form } from 'react-bootstrap';

interface BasicQuestionsProps {
    setNumQuestionAnswered: (newAnswered: number) => void;
    question: string;
    answerPlacement: number;
}

const answerArray: string[] = ["", "", "", "", "", "", "", "", "", ""];
const questionsArray: string[] = 
[
    "Question 1: What is most important to you in a job between: Salary, Work Life Balance, Growth, Helping Others, Making a Difference",
    "Question 2: Do you prefer working solo or with others?",
    "Question 3: What is your favorite subject in school?",
    "Question 4: What type of workplace suits you best between: Fast-Paced, Collaborative, Structured, Flexible?",
    "Question 5: On a scale of 1-10, how much do you like working with technology?",
    "Question 6: On a scale of 1-10, how much do you enjoy doing art?",
    "Question 7: Do you prefer working indoors or outdoors?",
    "Question 8: Do you enjoy coming up with new ideas and solutions?",
    "Question 9: Do you like tasks that vary each day, or stay the same?",
    "Question 10: How much education do you plan to pursue? (High School Diploma, Bachelors, Masters, Doctorate)"
];

function Question ({setNumQuestionAnswered, question, answerPlacement}: BasicQuestionsProps) {
    const [userAnswer, setUserAnswer] = useState<string>(answerArray[answerPlacement]);
    
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[answerPlacement] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }
    
    return (
        <div>
            <h3 style={{marginBottom:20}}>{question}</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
            <hr style={{height: 5, backgroundColor: "white", marginBottom:60, color: "white"}}></hr>
        </div>
    );
}

export function BasicQuestions({setCurrentPage}: SwitchPages): JSX.Element {
    const [numQuestionsAnswered, setNumQuestionsAnswered] = useState<number>(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    /*function Description(): JSX.Element {
        return (
        <div> 
            <p>Take the basic career assessment to discover a career path personally picked for you! The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. The basic quiz consists of __ shorter questions to provide a quick and easy experience to determine your results. </p>
        </div>
        );
    }*/

    return (
        <div>


            <title> header with information on how to take the quiz</title>
            <Row className="test" style={ {border: '2px white', padding: '2px', color: "#44506a"} }>

                <Col style= {{marginLeft: 340}}>
                    <header className= "box">
                        <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "white", backgroundColor: "salmon", borderRadius: 20, fontFamily: "Helvetica", fontWeight: "bold"} }>
                            <div  > <p></p><p> Answer Truthfully</p> <p>and</p> <p>fully Check for Typos !</p><p></p> </div>
                        </div>
                    </header>
                </Col>
                <Col style= {{marginRight: 340}}>
                    <header className= "box " >
                        <div  style={ {border: '4px solid #f8f8f89a', fontSize: 30, padding: '8px', color: "white", backgroundColor: "salmon", borderRadius: 20, fontFamily: "Helvetica", fontWeight: "bold"} }>
                            <div  > <p></p><p> Answer Truthfully</p> <p>and</p> <p>fully Check for Typos !</p><p></p> </div>
                        </div>
                    </header>
                    
                </Col>
                
            </Row>

            <title> progress bar's own little box </title>
            <header>
                <div style={ {padding: '8px', backgroundColor: "white"} }>
                    <p></p>
                    <ShowProgressBar numQuestionsAnswered={numQuestionsAnswered} totalQuestions={answerArray.length}></ShowProgressBar>
                    <p></p>
                </div>
            </header>

            <title> body with all questions</title>
            <body className= "margins" style={ {padding: '4px', color: "white", backgroundColor: "salmon", justifyContent:"right", borderRadius: 20} }>
                <div className= "Questions">
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[0]} answerPlacement={0} ></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[1]} answerPlacement={1}></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[2]} answerPlacement={2}></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[3]} answerPlacement={3}></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[4]} answerPlacement={4}></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[5]} answerPlacement={5}></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[6]} answerPlacement={6}></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[7]} answerPlacement={7}></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[8]} answerPlacement={8}></Question>
                <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[9]} answerPlacement={9}></Question>
                </div>
                
            </body>
        </div>
    )
} 