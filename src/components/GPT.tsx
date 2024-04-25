import { basicQuestionsArray, basicAnswerArray  } from "../BasicQuestions";
import { detailedAnswerArray, detailedQuestionsArray } from "../DetailedQuestions";
import { keyData } from "../App";
import OpenAI from "openai";

async function formatQuestionsAndAnswers (userPrompt: string, page: string) {
  let combinedQuestions: string = "";
  let combinedAnswers: string = "";
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

  const result: string = await callGPT(combinedQuestions, combinedAnswers, userPrompt)
  return result;
}

async function callGPT (combinedQuestions: string, combinedAnswers: string, userPrompt: string) {
  const openai = new OpenAI(
    {
      apiKey: keyData,
      dangerouslyAllowBrowser: true
    });
  const result = await openai.chat.completions.create({
    messages: 
    [
      { role: "user", content: userPrompt},
      { role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers + ". Do not mention the orginal questions and answers in your response. If the user asks for specific industries, give a list of specific indsutries that would suit them"}
    ],
      model: "gpt-4-turbo"
  });

  if (result.choices[0].message.content) {
    return (
      result.choices[0].message.content
    );
  }
  return (
    ""
  );
}

export async function GenerateText (type: string, page: string, userInput: string) {
  let result = "";
  if (type === "industry") {
    result = await formatQuestionsAndAnswers("Give a list of specific industries that would fit me, add a few bullet points as to why.", page);
  }
  else if (type === "detailed") {
    result = await formatQuestionsAndAnswers("Please provide an overview of what my results mean.", page);
  }
  else {
    result = await formatQuestionsAndAnswers(userInput, page);
  }
  return (
    result
  );
}