import { questionsArray } from "../BasicQuestions";
import { answerArray } from "../BasicQuestions";
import { keyData } from "../App";
import { useState } from "react";
import { Button } from "react-bootstrap";

const apiUrl = 'https://api.openai.com/v1/chat/completions';

async function formatQuestionsAndAnswers () {
  const combinedQuestions: string = questionsArray.join(",");
  const combinedAnswers: string = (answerArray.map((answer: string): string => "Question" + `${answerArray.indexOf(answer)}` + " Answer: " + answer)).join(",");
  const result: string = await callGPT(keyData, combinedQuestions, combinedAnswers)
  return result;
}

async function callGPT (key: string, combinedQuestions: string, combinedAnswers: string) {
  let result: string;
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
            { role: "user", content: "Based on my answers what kind of industries should I be working in? " + combinedAnswers},
            { role: "system", content: "You are a helpful assistant meant that helps people determine what industries they should be working in." },
            { role: "system", content: "Use these questions as context: " + combinedQuestions}
          ]
        })
      });
  
      const data = await response.json();
      console.log(data.choices[0]);
      result = data.choices[0].message.content

    } catch (error) {
      result = "Error!";
    }
    return result.replace("\n", "");
}

export function GenerateText () {
  const [result, setResult] = useState<string>("[PLACEHOLDER]")

  async function getAnswer () {
    const test: string = await formatQuestionsAndAnswers();
    setResult(test);
  }
  return (
    <div>
      <Button onClick={getAnswer}>Get Results!</Button>
      <p>{result}</p>
    </div>
  );
}