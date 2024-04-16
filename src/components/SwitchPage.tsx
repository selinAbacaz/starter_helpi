import { Button } from "react-bootstrap";
import { SwitchPages } from "../interfaces/SwitchPages";


export function SwitchPage ({ setCurrentPage, pageNumber, varaint}: SwitchPages) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions"];
    function changePage () {
        setCurrentPage(pageNumber);
    }

    return (
        <Button variant={varaint} onClick={changePage}>{buttonNames[pageNumber]}</Button>
    )
}