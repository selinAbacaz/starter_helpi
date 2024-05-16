import { Button, Nav } from "react-bootstrap";
import { SwitchPagesProps } from "../interfaces/SwitchPages";
import { saveResponses } from "../pages/results/GPT";
import { Button as MuiButton} from "@mui/material";
import '../assets/LouisGeorgeCafe/stylesheet.css'

export let vistedWelcomePage = false;
const savevistedWebPage = "VISITEDWELCOME";
const prevKey = sessionStorage.getItem(savevistedWebPage); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
    vistedWelcomePage = JSON.parse(prevKey);
}


export function SwitchPage ({ setBlurPage, setCurrentPage, setQuestionsToUse, setSubmitted, blurPage, currentPage, newCurrentPage, questionsSubmitted, questionsToUse, variant, type }: SwitchPagesProps) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions", "Results"]; // Array of names for the buttons and navs related to page switching

    function changePage () {
        if ((setCurrentPage && newCurrentPage) ||  (setCurrentPage && newCurrentPage === 0)) {
            setCurrentPage(newCurrentPage);
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
            <Button variant={variant} onClick={changePage} disabled={blurPage} className= "box" style= {{backgroundColor: "#ffffff00", border: 0, fontSize: "40px"}}>{newCurrentPage && buttonNames[newCurrentPage]}</Button>
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
                onClick={changePage}>Get Results!</MuiButton>
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
            <Nav.Link className="magilio" style={{fontSize: "40px"}} onClick={changePage} eventKey={newCurrentPage} disabled={blurPage || questionsSubmitted}>Career Chef</Nav.Link>
        );   
    }
    else {
        return (
            <MuiButton
                sx={{
                    textTransform: 'none',
                    color: '#5d3627',
                    fontSize: '20px',
                    fontFamily: 'louis_george_caferegular',
                    backgroundColor: currentPage === newCurrentPage ? "rgb(235, 235, 235)" : "",
                    transition: 'transform 0.5s',
                    '&:hover': {
                        backgroundColor: 'rgb(235, 235, 235)',
                        transform: 'translateY(-10px)',
                    }
                }} 
                variant="text"
                onClick={changePage}>{(newCurrentPage && buttonNames[newCurrentPage]) || (newCurrentPage === 0 && buttonNames[newCurrentPage])}</MuiButton>
        );
    }
}