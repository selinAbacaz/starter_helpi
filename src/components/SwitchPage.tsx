import { Button, Nav } from "react-bootstrap";
import { SwitchPages4 } from "../interfaces/SwitchPages";

export function SwitchPage ({ setCurrentPage, pageNumber, varaint, type, blurPage }: SwitchPages4) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions","Results"];

    function changePage () {
        setCurrentPage(pageNumber);
    }

    if (type === "button") {
        return (
            <Button 
            variant={varaint} onClick={changePage} disabled={blurPage}>{buttonNames[pageNumber]}</Button>
        )
    }
    return (
        <Nav.Link style={{color: "#ff6347"}} onClick={changePage} eventKey={pageNumber} disabled={blurPage}><b>{buttonNames[pageNumber]}</b></Nav.Link>
    )
}