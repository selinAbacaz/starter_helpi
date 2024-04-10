import React, { useState } from "react";
import { ShowProgressBar } from "./components/ProgressBar";

const answerArray: string[] = ["", "", "", "", "", "", "", "", "",""]

export function BasicQuestions(): JSX.Element {
    const [numQuestionsAnswered, setNumQuestionsAnswered] = useState<number>(0);

    function Description(): JSX.Element {
        return (
        <div> 
            <p>Take the basic career assessment to discover a career path personally picked for you! The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. The basic quiz consists of __ shorter questions to provide a quick and easy experience to determine your results. </p>
        </div>
        );
    }

    function Question1(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[0] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 1: What is most important to you in a job between: Salary, Work Life Balance, Growth, Helping Others, Making a Difference</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }

    function Question2(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[1] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 2: Do you prefer working solo or with others?</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }

    function Question3(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[2] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 3: What is your favorite subject in school?</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }
    
    function Question4(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[3] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 4: What type of workplace suits you best between: Fast-Paced, Collaborative, Structured, Flexible?</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }

    function Question5(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[4] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 5: On a scale of 1-10, how much do you like working with technology?</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }

    function Question6(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[5] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 6: On a scale of 1-10, how much do you enjoy doing art?</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }

    function Question7(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[6] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 7: Do you prefer working indoors or outdoors?</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }

    function Question8(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[7] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 8: Do you enjoy coming up with new ideas and solutions?</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }

    function Question9(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[8] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 9: Do you like tasks that vary each day, or stay the same?</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }

    function Question10(): JSX.Element {
        const [userAnswer, setUserAnswer] = useState<string>("");

        function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
            setUserAnswer(event.target.value);
            answerArray[9] = userAnswer;
            setNumQuestionsAnswered(numQuestionsAnswered + 1);
        }

        return (
            <div>
                <h3>Question 10: How much education do you plan to pursue? (High School Diploma, Bachelors, Masters, Doctorate)</h3>
                <input type="text" value={userAnswer} onChange={updateAnswer} />
                <div>{userAnswer}</div>
            </div>
        );
    }
    return (
        <div>
            <ShowProgressBar numQuestionsAnswered={numQuestionsAnswered} totalQuestions={answerArray.length}></ShowProgressBar>
            <Question1></Question1>
            <Question2></Question2>
            <Question3></Question3>
            <Question4></Question4>
            <Question5></Question5>
            <Question6></Question6>
            <Question7></Question7>
            <Question8></Question8>
            <Question9></Question9>
            <Question10></Question10>
        </div>
    )
} 