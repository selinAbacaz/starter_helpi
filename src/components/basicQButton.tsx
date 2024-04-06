import { Button } from "react-bootstrap";
import { SwitchPages } from "../interfaces/SwitchPages";


export function BasicQButton ({ setCurrentPage }: SwitchPages) {
    function changeToBasicQuestions () {
        setCurrentPage(1)
    }

    return (
        <Button onClick={changeToBasicQuestions}>Basic Questions</Button>
    )
}