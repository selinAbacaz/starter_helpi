import ReactMarkdown from "react-markdown";
import GPTInput from "./GPTInput";
import { useEffect, useRef } from "react";

interface RepliesProps {
    setChatGPTReply: (newReply: string[]) => void;
    chatGPTReply: string[];
    questionsToUse: string;
}

function Replies ({setChatGPTReply, chatGPTReply, questionsToUse}: RepliesProps) {
    const endReplies = useRef<HTMLDivElement>(null)

    useEffect (() => {
        endReplies.current?.scrollIntoView({behavior: "smooth"})
    }, [chatGPTReply])

    if (!chatGPTReply.length) {
        return (
            <GPTInput setChatGPTReply={setChatGPTReply} questionsToUse={questionsToUse}></GPTInput>
        )
    }

    return (
        <div>
            {chatGPTReply.map((reply: string) => chatGPTReply.indexOf(reply) === chatGPTReply.length - 1 ?
                (   
                    <div key={reply}>
                        <ReactMarkdown>{"***"}</ReactMarkdown>
                        <ReactMarkdown children={reply}></ReactMarkdown>
                        <br></br>
                        <GPTInput setChatGPTReply={setChatGPTReply} questionsToUse={questionsToUse}></GPTInput>
                        <div ref={endReplies}/>
                    </div>
                    
                ) : 
                (
                    <div key={reply}>
                        <ReactMarkdown>{"***"}</ReactMarkdown>
                        <ReactMarkdown children={reply}></ReactMarkdown>
                    </div>
                ))}
        </div>
    )
}

export default Replies;