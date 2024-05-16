import ReactMarkdown from "react-markdown";

function LoadingScreen () {
    return (
        <div className="magilio">
            <ReactMarkdown>{"***"}</ReactMarkdown>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ReactMarkdown>{"# Please wait while we bake your results!"}</ReactMarkdown>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={require("../../../assets/images/CatGif.gif")} alt="CatGif"></img>
            </div>
            <ReactMarkdown>{"***"}</ReactMarkdown>
        </div>
    )
}

export default LoadingScreen;