import ReactMarkdown from "react-markdown";
import './LoadingScreen.sass'

function LoadingScreen () {
    return (
        <div>
            <ReactMarkdown>{"***"}</ReactMarkdown>
            <div style={{justifyContent: "center", display: "flex", alignItems: "center"}}>
                <ReactMarkdown>{"## Please wait while we bake your results!"}</ReactMarkdown>
            </div>
            <div style={{justifyContent: "center", display: "flex", alignItems: "center"}}>
                <img src={require("../../../assets/images/CatGif.gif")} alt="CatGif"></img>
                <br></br>
            </div>
            <div style={{justifyContent: "center", alignItems: "center"}}>
                <ReactMarkdown>{"***"}</ReactMarkdown>
            </div>
        </div>
    )
}

export default LoadingScreen;