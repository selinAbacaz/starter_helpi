import { Button, Nav } from "react-bootstrap";
import { SwitchPages4 } from "../interfaces/SwitchPages";

export function SwitchPage ({ setCurrentPage, pageNumber, varaint, type, blurPage, setBlurPage }: SwitchPages4) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions", "Results"];

    function changePage () {
        setCurrentPage(pageNumber);
        if (type === "results") {
            setBlurPage(false);
        }
    }

    if (type === "button") {
        return (
            <Button variant={varaint} onClick={changePage} disabled={blurPage} className= "box" style= {{backgroundColor: "#ffffff00", border: 0, fontSize: 20}}>{buttonNames[pageNumber]}</Button>
        );
    }
    else if (type === "results") {
        return (
            <Button variant={varaint} onClick={changePage}>Get Results!</Button>
        );
        
    }
    return (
        <Nav.Link style={{color: "#ff6347"}} onClick={changePage} eventKey={pageNumber} disabled={blurPage}><b>{buttonNames[pageNumber]}</b></Nav.Link>
    );
}