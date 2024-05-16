import { Button, Nav } from "react-bootstrap";
import { SwitchPagesProps } from "../interfaces/SwitchPages";
import { saveResponses } from "../pages/results/GPT";
import { Button as MuiButton} from "@mui/material";

export let vistedWelcomePage = false;
const savevistedWebPage = "VISITEDWELCOME";
const prevKey = sessionStorage.getItem(savevistedWebPage); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
    vistedWelcomePage = JSON.parse(prevKey);
}


export function SwitchPage ({ setBlurPage, setCurrentPage, setQuestionsToUse, setSubmitted, blurPage, currentPage, questionsSubmitted, questionsToUse, variant, type }: SwitchPagesProps) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions", "Results"]; // Array of names for the buttons and navs related to page switching

    function changePage () {
        if ((setCurrentPage && currentPage) ||  (setCurrentPage && currentPage === 0)) {
            setCurrentPage(currentPage);
        }
        if (type === "results" && setBlurPage && setQuestionsToUse && setSubmitted && questionsToUse) {
            setSubmitted(true);
            setBlurPage(false);
            setQuestionsToUse(questionsToUse);
        }
        if (type === "welcome") {
            sessionStorage.setItem(savevistedWebPage, JSON.stringify(true));
        }
    }

    if (type === "button") {
        return (
            <Button variant={variant} onClick={changePage} disabled={blurPage} className= "box" style= {{backgroundColor: "#ffffff00", border: 0, fontSize: 25}}>{currentPage && buttonNames[currentPage]}</Button>
        );
    }
    else if (type === "results") {
        if (questionsToUse === "basic") {
            saveResponses.saveIndustriesBasic = "";
            saveResponses.saveOverviewBasic = "";
        }
        else if (questionsToUse === "detailed"){
            saveResponses.saveIndustriesDetailed = "";
            saveResponses.saveOverviewDetailed = "";
        }
        
        return (
            <Button variant={variant} onClick={changePage}>Get Results!</Button>
        );
        
    }
    else if (type === "welcome") {
        return (
            <MuiButton variant={"contained"} onClick={changePage} style={{textTransform: "none"}}>Get Started!</MuiButton>
        )
        
    }
    else {
        return (
            <Nav.Link style={{color: "#ff6347"}} onClick={changePage} eventKey={currentPage} disabled={blurPage || questionsSubmitted}><b>{(currentPage && buttonNames[currentPage] ) || (currentPage === 0 && buttonNames[currentPage])}</b></Nav.Link>
        );
    }
}