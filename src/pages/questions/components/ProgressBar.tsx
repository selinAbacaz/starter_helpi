import { ProgressBar } from "react-bootstrap";
import { ShowProgressBarProps } from "../../../interfaces/ProgressBar";

export function ShowProgressBar ({numQuestionsAnswered, totalQuestions}: ShowProgressBarProps) {
    let barStyle: string = "primary"; // Sets the style of the progress bar
    const progress: number = (numQuestionsAnswered * 100) / totalQuestions;

    if (progress === 100) {
        barStyle = "success"
    }
    return (
        <ProgressBar now={progress} label={`${progress}%`} variant={barStyle} striped animated></ProgressBar>
    )
}