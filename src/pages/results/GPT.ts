import { basicQuestionsArray, basicAnswerArray  } from "../questions/BasicQuestions";
import { detailedAnswerArray, detailedQuestionsArray } from "../questions/DetailedQuestions";
import { keyData } from "../../components/Foooter";
import OpenAI from "openai";

export let saveResponses = 
{
  saveIndustriesBasic: "",
  saveIndustriesDetailed: "",
  saveOverviewBasic: "",
  saveOverviewDetailed: "",
  saveGPTReplyBaic: [""],
  saveGPTReplyDetailed: [""],
  saveNumberOfRepliesBasic: 0,
  saveNumberOfRepliesDetailed: 0,
  savePieChartValuesBasic: "",
  savePieChartValuesDetailed: ""
}

let combinedQuestions: string = "";  // Contains the combined questions from either basic/detailed questions
let combinedAnswers: string = ""; // Contains the combined user answers from either basic/detailed questions

let combined: string = "";

function formatQuestionsAndAnswers (page: string) { // Function to format the questions and user answers from either the basic/detailed questions
  if (page === "basic") {
    combined = basicQuestionsArray.map((question: string, index: number) => "Q:" + question + " - A:" + basicAnswerArray[index]).join(",")
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
          { role: "user", content: combined + "Based on my answers, give a list of specific industries that would fit me. Please give me a few reasons as to why." },
          { role: "system", content: "List the reasons as bullet points underneath the industry name. Each bullet point should be on it's own line." +
            "Use a ## symbol to signify a header. Please give 5 reasons for each industry. Do not bold anything."
          }
        ],
          model: "gpt-4-turbo",
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

  else if (type === "user") {
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
  else {
    const json_format =
    `
      {
        humanitarian: <humanitarian value>,
        caretaker: <caretaker value>,
        innovator: <innovator value>,
        pragmatist: <pragmatist value>
      }
    `;
    result = await openai.chat.completions.create(
      {
        messages: 
        [
          { role: "user", content: "What are my humanitarian, caretaker, innovator, pragmatist values based on my answers, you must give each category MUST have a minimum value of 5." },
          { role: "system", content: "Use these questions as context: " + combinedQuestions + ". Use these answeres as context: " + combinedAnswers +
            "Please output your response following this JSON format: " + json_format + ". All of the values should add up to 100. Every category needs a value."
          }
        ],
          model: "gpt-4-turbo",
          response_format: { type: "json_object" }
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
 
export async function GenerateText (type: string, page: string, userInput: string, setResult?: (result: string) => void, setUserResult?: (userResult: string[]) => void) {
  let result = "";
  let newResults: string[] = [];
  formatQuestionsAndAnswers(page);
  result = await callGPT(type, userInput);
  if (page === "basic") {
    if (type === "industry") {
      saveResponses.saveIndustriesBasic = result;
    }
    else if (type === "overview") {
      saveResponses.saveOverviewBasic = result;
    }
    else if (type === "user") {
      if (saveResponses.saveGPTReplyBaic[0] === "") {
        newResults = [ ...saveResponses.saveGPTReplyBaic ]
        newResults[0] = result;
        saveResponses.saveGPTReplyBaic = [...newResults];
      }
      else {
        newResults = [ ...saveResponses.saveGPTReplyBaic, result ]
        saveResponses.saveGPTReplyBaic =  [...newResults];
      }
    }
    else {
      saveResponses.savePieChartValuesBasic = result;
    }
  }
  else {
    if (type === "industry") {
      saveResponses.saveIndustriesDetailed = result;
    }
    else if (type === "overview") {
      saveResponses.saveOverviewDetailed = result;
    }
    else if (type === "user") {
      if (saveResponses.saveGPTReplyDetailed[0] === "") {
        newResults = [ ...saveResponses.saveGPTReplyDetailed ]
        newResults[0] = result;
        saveResponses.saveGPTReplyDetailed = newResults;
      }
      else {
        newResults = [ ...saveResponses.saveGPTReplyDetailed, result ]
        saveResponses.saveGPTReplyDetailed = newResults;
      }
      
    }
    else {
      saveResponses.savePieChartValuesDetailed = result;
    }
  }
  if (type === "user" && setUserResult) {
    setUserResult(newResults); // Contains the returned message content generated by chatGPT
  }
  else if (setResult) {
    setResult(result); // Contains the returned message content generated by chatGPT
  }
  
}