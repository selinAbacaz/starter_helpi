import ReactMarkdown from "react-markdown";
import { ErrorMessageProps } from "../../../interfaces/ErrorMessage";

function ErrorMessage ({error}: ErrorMessageProps) {
    return (
        <div className="magilio" style={{color: "#855440"}}>
            <ReactMarkdown>{"***"}</ReactMarkdown>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ReactMarkdown>{"# There was an erorr processing your results!"}</ReactMarkdown>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
                <p>{error}</p>
            </div>
            <ReactMarkdown>{"***"}</ReactMarkdown>
        </div>
    )
}

export default ErrorMessage;