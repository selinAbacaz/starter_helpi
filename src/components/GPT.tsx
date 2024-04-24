import { questionsArray } from "../BasicQuestions";
import { answerArray } from "../BasicQuestions";
import { keyData } from "../App";
import OpenAI from "openai";

async function formatQuestionsAndAnswers (userPrompt: string) {
  const combinedQuestions: string = questionsArray.join(",");

  const combinedAnswers: string = (answerArray.map((answer: string): string => 
    "Question " + 
    `${answerArray.indexOf(answer) + 1}` + 
    " Answer: " + answer)).join(",");

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
      { role: "system", content: "You are a helpful assistant that helps people provide detailed results based on a career quiz. If the user asks about industries than provide a list of industries that suit them."},
      { role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers} 
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

export async function GenerateText (type: string) {
  let result = "";
  if (type === "industry") {
    result = await formatQuestionsAndAnswers("Based on my answers what kind of industries should I be working in?");
  }
  else {
    result = await formatQuestionsAndAnswers("Please provide a breif overview of what my results mean.");
  }

  return (
    result
  );
}