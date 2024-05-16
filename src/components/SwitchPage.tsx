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
            <MuiButton 
                sx={{
                    textTransform: 'none',
                    borderRadius: '10px',
                    backgroundColor: '#f9e0d1',
                    color: '#5d3627',
                    border: '2px solid #5d3627',
                    '&:hover': {
                        backgroundColor: '#fad8c3',
                    }
                }} 
                variant={"contained"} 
                onClick={changePage}>Get Started!</MuiButton>
        );
        
    }
    else if (type === "navTitle") {
        return (
            <Nav.Link className="magilio" style={{fontSize: "40px"}} onClick={changePage} eventKey={currentPage} disabled={blurPage || questionsSubmitted}>Career Chef</Nav.Link>
        );   
    }
    else {
        return (
            <MuiButton 
                sx={{
                    textTransform: 'none',
                    backgroundColor: '#f9e0d1',
                    color: '#5d3627',
                    '&:hover': {
                        backgroundColor: '#fad8c3',
                    }
                }} 
                variant={"text"} 
                onClick={changePage}>{(currentPage && buttonNames[currentPage]) || (currentPage === 0 && buttonNames[currentPage])}</MuiButton>
        );
    }
}