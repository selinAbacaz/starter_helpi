import React, { useState } from "react";

interface DetailedQuestionsProps {
    setNumQuestionAnswered: (newAnswered: number) => void;
}

const answerArray: string[] = ["", "", "", "", "", "", "", "", "",""]

function Question1({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[0] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 1: Consider a time where you were really enjoying a subject you were studying in school. Say the subject and describe why you enjoyed learning about the topic it was teaching.</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question2({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[1] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 2: Think of a time where you were tasked with doing something you didn't know how to do. Describe how hard it was for you to learn a new skill independently</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question3({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[2] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 3: Recall a project or task at work where you were deeply engaged and interested in it. Identify the specific aspect of the project that captured your interest and explain why it resonated with you.</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question4({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[3] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 4: Consider a time when you were assigned a leadership role in a team project. Describe how you approached leading the team, the challenges you faced, and how much you enjoyed being a leader compared to times where you were not the leader in a project.</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question5({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[4] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 5: Reflect on a time when you had to deliver a presentation to a large audience. Describe how you prepared for the presentation, the challenges you faced during the delivery, and how comfortable or uncomfortable you felt while giving the presentation.</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question6({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[5] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 6: Think about a subject you strongly dislike. What is the subject and why do you feel strongly about it?</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question7({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[6] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 7: Consider a time when you were doing art. How passionately did you feel about doing art and why?</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question8({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[7] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 8: Recall a time when you were fascinated by a topic outside of school, such as a hobby or a current event. What was the topic, and why did it capture your interest?</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question9({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[8] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 9: Think about your ability to complete tasks in the following subjects: Math, Science, English, History, Art. What would you say is your best subject, worst subject, and why?</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

function Question10({setNumQuestionAnswered}: DetailedQuestionsProps): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
        answerArray[9] = event.target.value;
        setNumQuestionAnswered(answerArray.reduce((totalAnswered: number, answer: string) => answer !== "" ? totalAnswered + 1 : totalAnswered, 0));
    }

    return (
        <div>
            <h3>Question 10: Reflect on a time where you were forced to do a lot of social interactions in a day. Did you enjoy having a lot of conversations and what made you like/dislike this experience?</h3>
            <input type="text" value={userAnswer} onChange={updateAnswer} />
            <div>{userAnswer}</div>
        </div>
    );
}

export function BasicQuestions(): JSX.Element {
    const [numQuestionsAnswered, setNumQuestionsAnswered] = useState<number>(0);
    /*function Description(): JSX.Element {
        return (
        <div> 
            <p>Take the basic career assessment to discover a career path personally picked for you! The assessment works with advanced artificial intelligence to analyze your personality traits, interests, and values to provide personalized recommendations specifically for the user. The basic quiz consists of __ shorter questions to provide a quick and easy experience to determine your results. </p>
        </div>
        );
    }*/

    return (
        <div>
            <Question1 setNumQuestionAnswered={setNumQuestionsAnswered}></Question1>
            <Question2 setNumQuestionAnswered={setNumQuestionsAnswered}></Question2>
            <Question3 setNumQuestionAnswered={setNumQuestionsAnswered}></Question3>
            <Question4 setNumQuestionAnswered={setNumQuestionsAnswered}></Question4>
            <Question5 setNumQuestionAnswered={setNumQuestionsAnswered}></Question5>
            <Question6 setNumQuestionAnswered={setNumQuestionsAnswered}></Question6>
            <Question7 setNumQuestionAnswered={setNumQuestionsAnswered}></Question7>
            <Question8 setNumQuestionAnswered={setNumQuestionsAnswered}></Question8>
            <Question9 setNumQuestionAnswered={setNumQuestionsAnswered}></Question9>
            <Question10 setNumQuestionAnswered={setNumQuestionsAnswered}></Question10>
        </div>
    )
} 