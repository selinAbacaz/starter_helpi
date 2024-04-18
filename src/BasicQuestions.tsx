import React, { useState } from "react";
import { ShowProgressBar } from "./components/ProgressBar";
import { SwitchPages } from "./interfaces/SwitchPages";
import { ShowHeader } from "./components/Header";
import { keyData } from "./App";
import { Button } from "react-bootstrap";

interface BasicQuestionsProps {
    setNumQuestionAnswered: (newAnswered: number) => void;
    question: string;
    answerPlacement: number;
}

let result: string = "Hello";
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

function callAPI () {
    const combinedQuestions: string = questionsArray.join(",");
    const combinedAnswers: string = answerArray.join(",");
    test(keyData, combinedQuestions, combinedAnswers);
}
  
  async function test (key: string, combinedQuestions: string, combinedAnswers: string) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo',
          messages: [
            { role: "user", content: "Based on my answers what kind of industries should I be working in? " + combinedAnswers },
            { role: "system", content: "Use these questions as context: " + combinedQuestions}
          ]
        })
      });
  
      const data = await response.json();
      console.log(data.choices[0]);
      result = data.choices[0].message.content;
    } catch (error) {
      result = "error!";
    }
  }

function Question ({setNumQuestionAnswered, question, answerPlacement}: BasicQuestionsProps) {
    const [userAnswer, setUserAnswer] = useState<string>(answerArray[answerPlacement]);
    
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[answerPlacement] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }
    
    return (
        <div>
            <h3>{question}</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
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
            <ShowHeader setCurrentPage={setCurrentPage} pageNumber={0}></ShowHeader>
            <ShowProgressBar numQuestionsAnswered={numQuestionsAnswered} totalQuestions={answerArray.length}></ShowProgressBar>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[0]} answerPlacement={0}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[1]} answerPlacement={1}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[2]} answerPlacement={2}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[3]} answerPlacement={3}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[4]} answerPlacement={4}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[5]} answerPlacement={5}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[6]} answerPlacement={6}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[7]} answerPlacement={7}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[8]} answerPlacement={8}></Question>
            <Question setNumQuestionAnswered={setNumQuestionsAnswered} question={questionsArray[9]} answerPlacement={9}></Question>
            <Button onClick={callAPI}>Trigger API call</Button>
            <div>{result}</div>
        </div>
    )
} 