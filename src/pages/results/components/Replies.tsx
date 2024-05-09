import ReactMarkdown from "react-markdown";
import GPTInput from "./GPTInput";

interface RepliesProps {
    setChatGPTReply: (newReply: string) => void;
    chatGPTReply: string[];
    questionsToUse: string;
}

function Replies ({setChatGPTReply, chatGPTReply, questionsToUse}: RepliesProps) {

    if (!chatGPTReply.length) {
        return (
            <GPTInput setChatGPTReply={setChatGPTReply} questionsToUse={questionsToUse}></GPTInput>
        )
    }
    
    return (
        <div>
            {chatGPTReply.map((reply: string) => (
                <ReactMarkdown></ReactMarkdown>
            ))}
        </div>
    )
}

export default Replies;