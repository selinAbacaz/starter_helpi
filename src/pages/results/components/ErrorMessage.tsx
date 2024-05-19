import ReactMarkdown from "react-markdown";

function ErrorMessage () {
    return (
        <div className="magilio" style={{color: "#855440"}}>
            <ReactMarkdown>{"***"}</ReactMarkdown>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ReactMarkdown>{"# There was an erorr processing your results!"}</ReactMarkdown>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <p>Please try submititng your results again and make sure your API key is correct.</p>
            </div>
            <ReactMarkdown>{"***"}</ReactMarkdown>
        </div>
    )
}

export default ErrorMessage;