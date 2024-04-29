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

async function callGPT (type: string, userPrompt: string) {
  let result: OpenAI.Chat.Completions.ChatCompletion;
  const openai = new OpenAI(
    {
      apiKey: keyData,
      dangerouslyAllowBrowser: true
    }
  );

  if (type === "indsutry") {
    result = await openai.chat.completions.create(
      {
        messages: 
        [
          { role: "user", content: "Give a list of specific industries that would fit me. Please give me a few reasons as to why." },
          { role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers + 
          ". Output your respones in JSON." }
        ],
          model: "gpt-4-turbo",
          response_format: { type: "json_object" } 
      }
    );
  }
  
  else if (type === "overview") {
    result = await openai.chat.completions.create(
      {
        messages: 
        [
          { role: "user", content: "Please provide an overview of what my results mean." },
          { role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers }
        ],
          model: "gpt-4-turbo",
      }
    );
  }

  else {
    result = await openai.chat.completions.create(
      {
        messages: 
        [
          { role: "user", content: userPrompt },
          { role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers }
        ],
          model: "gpt-4-turbo",
      }
    );
  }

  if (result.choices[0].message.content) {
      console.log(result);
    return (
      
      result.choices[0].message.content
    );
  }
  return (
    ""
  );
}
 
export async function GenerateText (type: string, page: string, userInput: string) {
  formatQuestionsAndAnswers(page);
  return (
    await callGPT(type, userInput)
  );
}