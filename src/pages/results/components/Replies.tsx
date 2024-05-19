import ReactMarkdown from "react-markdown";
import GPTInput from "./GPTInput";
import { useEffect, useRef } from "react";

interface RepliesProps {
    setChatGPTReply: (newReply: string[]) => void;
    setError: (error: string) => void;
    chatGPTReply: string[];
    questionsToUse: string;
}

function Replies ({setChatGPTReply, setError, chatGPTReply, questionsToUse}: RepliesProps) {
    const endReplies = useRef<HTMLDivElement>(null)

    useEffect (() => {
        endReplies.current?.scrollIntoView({behavior: "smooth"})
    }, [chatGPTReply])

    if (chatGPTReply[0] === "") {
        return (
            <div>
                <br></br>
                <GPTInput setChatGPTReply={setChatGPTReply} setError={setError} questionsToUse={questionsToUse}></GPTInput>
            </div>
        )
    }

    return (
        <div>
            {chatGPTReply.map((reply: string, index: number) =>
                (   
                    <div key={index}>
                        <ReactMarkdown>{"***"}</ReactMarkdown>
                        <ReactMarkdown children={reply}></ReactMarkdown>
                        <br></br>
                        {(index === chatGPTReply.length - 1) && <GPTInput setChatGPTReply={setChatGPTReply} setError={setError} questionsToUse={questionsToUse}></GPTInput>}
                        <div ref={endReplies}/>
                    </div>
                    
                ))}
        </div>
    )
}

export default Replies;