import { ProgressBar } from "react-bootstrap";
import { ShowProgressBarProps } from "../../../interfaces/ProgressBar";

export function ShowProgressBar ({numQuestionsAnswered, totalQuestions}: ShowProgressBarProps) {
    let barStyle: string = "danger"; // Sets the style of the progress bar
    const progress: number = (numQuestionsAnswered * 100) / totalQuestions;

    if (progress <= 40) {
        barStyle = "danger"
    }
    else if (progress > 40 && progress < 100) {
        barStyle = "warning"
    }
    else {
        barStyle = "success"
    }
    return (
        <ProgressBar now={progress} label={`${progress}%`} variant={barStyle}></ProgressBar>
    )
}