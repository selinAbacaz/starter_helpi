import { Button } from "react-bootstrap";
import { SwitchPages } from "../interfaces/SwitchPages";


export function DetailedQButton ({ setCurrentPage }: SwitchPages) {
    function changeToDetailedQuestions () {
        setCurrentPage(2)
    }

    return (
        <Button onClick={changeToDetailedQuestions}>Detailed Questions</Button>
    )
}