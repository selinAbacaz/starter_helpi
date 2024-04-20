import { Button, Nav } from "react-bootstrap";
import { SwitchPages } from "../interfaces/SwitchPages";


export function SwitchPage ({ setCurrentPage, pageNumber, varaint, type}: SwitchPages) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions"];
    function changePage () {
        setCurrentPage(pageNumber);
    }

    if (type === "button") {
        return (
            <Button variant={varaint} onClick={changePage}>{buttonNames[pageNumber]}</Button>
        )
    }
    return (
        <Nav.Link style={{color: "#ff6347"}} onClick={changePage} eventKey={buttonNames[pageNumber]}><b>{buttonNames[pageNumber]}</b></Nav.Link>
    )
}