import { Button } from "react-bootstrap";
import { SwitchPages } from "../interfaces/SwitchPages";

export function ShowHeader ({ setCurrentPage }: SwitchPages) {

    function changeToHome () {
        setCurrentPage(0);
    }

    return (
        <Button onClick={changeToHome}>Home Page</Button>
    )
}