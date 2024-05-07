import { Button, Nav } from "react-bootstrap";
import { SwitchPagesProps } from "../interfaces/SwitchPages";

export function SwitchPage ({ setBlurPage, setCurrentPage, setQuestionsToUse, blurPage, currentPage, questionsToUse, variant, type }: SwitchPagesProps) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions", "Results"]; // Array of names for the buttons and navs related to page switching

    function changePage () {
        if ((setCurrentPage && currentPage) ||  (setCurrentPage && currentPage === 0)) {
            setCurrentPage(currentPage);
        }
        if (type === "results" && setBlurPage && setQuestionsToUse && questionsToUse) {
            setBlurPage(false);
            setQuestionsToUse(questionsToUse);
        }
    }

    if (type === "button") {
        return (
            <Button variant={variant} onClick={changePage} disabled={blurPage} className= "box" style= {{backgroundColor: "#ffffff00", border: 0, fontSize: 25}}>{currentPage && buttonNames[currentPage]}</Button>
        );
    }
    else if (type === "results") {
        return (
            <Button variant={variant} onClick={changePage}>Get Results!</Button>
        );
        
    }
    return (
        <Nav.Link style={{color: "#ff6347"}} onClick={changePage} eventKey={currentPage} disabled={blurPage}><b>{(currentPage && buttonNames[currentPage] ) || (currentPage === 0 && buttonNames[currentPage])}</b></Nav.Link>
    );
}