import { basicQuestionsArray, basicAnswerArray  } from "../BasicQuestions";
import { detailedAnswerArray, detailedQuestionsArray } from "../DetailedQuestions";
import { keyData } from "../App";
import OpenAI from "openai";

let combinedQuestions: string = "";
let combinedAnswers: string = "";

function formatQuestionsAndAnswers (page: string) {
  if (page === "basic") {
    combinedQuestions = basicQuestionsArray.join(",");
    combinedAnswers = (basicAnswerArray.map((answer: string): string => 
    "Question " + 
    `${basicAnswerArray.indexOf(answer) + 1}` + 
    " Answer: " + answer)).join(",");
  }
  else {
    combinedQuestions = detailedQuestionsArray.join(",");
    combinedAnswers = (detailedAnswerArray.map((answer: string): string => 
    "Question " + 
    `${detailedAnswerArray.indexOf(answer) + 1}` + 
    " Answer: " + answer)).join(",");
  }
}

async function callGPT (combinedQuestions: string, combinedAnswers: string, userPrompt: string, setProcessed: (processed: boolean) => void, isUserInput: boolean) {
  const openai = new OpenAI(
    {
      apiKey: keyData,
      dangerouslyAllowBrowser: true
    });
  const result = await openai.chat.completions.create({
    messages: 
    [
      { role: "user", content: userPrompt},
      //{ role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers + ". Do not mention the orginal questions and answers in your response. If the user asks for specific industries, give a list of specific indsutries that would suit them"}
      {role: "system", content: "Only say test."}
    ],
      model: "gpt-4-turbo"
  });
  if (result.choices[0].message.content) {
    if (isUserInput) {
      setProcessed(true);
    }
    return (
      result.choices[0].message.content
    );
  }
  return (
    ""
  );
}

export async function GenerateText (type: string, page: string, userInput: string, setProcessed: (processed: boolean) => void) {
  let result: string = "";
  if (type === "industry") {
    formatQuestionsAndAnswers(page);
    result = await callGPT(combinedQuestions, combinedAnswers, "Give a list of specific industries that would fit me, add a few bullet points as to why.", setProcessed, false)
    
  }
  else if (type === "overview") {
    formatQuestionsAndAnswers(page);
    result = await callGPT(combinedQuestions, combinedAnswers, "Please provide an overview of what my results mean.", setProcessed, false)
  }
  else {
    formatQuestionsAndAnswers(page);
    result = await callGPT(combinedQuestions, combinedAnswers, userInput, setProcessed, true)
  }
  return (
    result
  );
}