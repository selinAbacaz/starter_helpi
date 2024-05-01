import { basicQuestionsArray, basicAnswerArray  } from "../BasicQuestions";
import { detailedAnswerArray, detailedQuestionsArray } from "../DetailedQuestions";
import { keyData } from "../App";
import OpenAI from "openai";

let combinedQuestions: string = "";  // Contains the combined questions from either baisc/detailed questions
let combinedAnswers: string = ""; // Contains the combined user answers from either baisc/detailed questions

function formatQuestionsAndAnswers (page: string) { // Function to format the questions and user answers from either the basic/detailed questions
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

async function callGPT (type: string, userPrompt: string) { // Calls the GPT api and prodcues text based on a user input
  let result: OpenAI.Chat.Completions.ChatCompletion;
  const openai = new OpenAI(
    {
      apiKey: keyData,
      dangerouslyAllowBrowser: true
    }
  );

  if (type === "industry") {
    result = await openai.chat.completions.create(
      {
        messages: 
        [
          { role: "user", content: "Give a list of specific industries that would fit me. Please give me a few reasons as to why." },
          { role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers + 
          ". Output your respones in JSON. Please name the industries variable 'industries'. The variable for each industry should be called 'industry'. The variable for the reasons should be called 'reasons'." }
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
          { role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers + 
            "Do not mention the original questions and answers in your response."
          }
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

  if (result.choices[0].message.content) { // Checks to see if there is a generated message, if not, result is returned as an empty string
      console.log(result);
    return (
      
      result.choices[0].message.content
    );
  }
  return (
    ""
  );
}

export function promptEngineering (results: string) {
    results = JSON.parse(results)?.industries
    return results;
}

 
export async function GenerateText (type: string, page: string, userInput: string) {
  formatQuestionsAndAnswers(page);
  let result = await callGPT(type, userInput); // Contains the returned message content generated by chatGPT
  if (type === "industry") {
    result = promptEngineering(result);
  }
  return result;
}