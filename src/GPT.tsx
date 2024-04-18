import { questionsArray } from "./BasicQuestions";
import { answerArray } from "./BasicQuestions";

let result: string;
const combinedQuestions: string = questionsArray.join(",")

async function  callGPT (key: string, combinedQuestions: string, combinedAnswers: string) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    
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
            { role: "system", content: "Use these questions as context: " + combinedQuestions  + ". Section out the response based on Industries. The industries should be a header font surrounded by # no spaces. The bullet points should start with a -. Add line breaks after each header and eacb bullet point." }
          ]
        })
      });
  
      const data = await response.json();
      console.log(data.choices[0]);
      result = data.choices[0].message.content;
    } catch (error) {
      result = "error!";
    }
}

function setGPTParameters () {

}

function formatText () {
  
}

export function GenerateText () {

}