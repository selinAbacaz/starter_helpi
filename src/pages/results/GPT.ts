import { basicQuestionsArray, basicAnswerArray  } from "../questions/BasicQuestions";
import { detailedAnswerArray, detailedQuestionsArray } from "../questions/DetailedQuestions";
import { keyData } from "../../components/ApiKeyInput";
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

let combined: string = "";

function formatQuestionsAndAnswers (page: string) { // Function to format the questions and user answers from either the basic/detailed questions
  if (page === "basic") {
    combined = basicQuestionsArray.map((question: string, index: number) => question + basicAnswerArray[index]).join(".");
  }
  else {
    combined = detailedQuestionsArray.map((question: string, index: number) => question + detailedAnswerArray[index]).join(".")
  }
}

async function callGPT (type: string, userPrompt: string, setError: (error: boolean) => void) { // Calls the GPT api and prodcues text based on a user input
  try {
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
            { role: "user", content: combined + "Please provide 5 industries I should work in based off of my answers. Proivide a concise description of the job. Give 1 paragraph as for why. Give an average salary." },
            { role: "system", content: "Your job is to list 5 job industries you think the user will fit into. Industries should start with  ## . Put the description in a bullet point labeled Description. Put the reasons paragraph in a single bullet point labled Reasons. The paragraph should be at least 3 long sentences. The average salary should also be a bulelt point."}
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
            { role: "user", content: combined + " Based on my answers, please provide an overview of what my results mean." },
            { role: "system", content: "Your job is to provide a brief 1 paragraph overview of what their answers mean."
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
            { role: "user", content: combined + userPrompt },
            { role: "system", content: "You are a helpful assistant designed to help people answer career related questions." }
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
            { role: "user", content: combined + " Based on my answers, what are my humanitarian, caretaker, innovator, pragmatist values based on my answers." },
            { role: "system", content: "Please output your response following this JSON format: " + json_format + ". All of the values should add up to 100." }
          ],
            model: "gpt-4-turbo",
            response_format: { type: "json_object" }
        }
      );
    }

    if (result.choices[0].message.content) { // Checks to see if there is a generated message, if not, result is returned as an empty string
        console.log(result);
        setError(false);
      return result.choices[0].message.content;
    }
    return "";
  } catch (error) {
    setError(true);
    return "";
  }
  
}
 
export async function GenerateText (type: string, page: string, userInput: string, setError: (error: boolean) => void, setResult?: (result: string) => void, setUserResult?: (userResult: string[]) => void) {
  let result = "";
  let newResults: string[] = [];
  formatQuestionsAndAnswers(page);
  result = await callGPT(type, userInput, setError);
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