import { ProgressBar } from "react-bootstrap";

interface ShowProgressBarProps {
    numQuestionsAnswered: number
    totalQuestions: number
}

export function ShowProgressBar ({numQuestionsAnswered, totalQuestions}: ShowProgressBarProps) {
    const progress: number = (numQuestionsAnswered * 100) / totalQuestions;
    return (
        <ProgressBar now={progress} label={`${progress}%`} striped></ProgressBar>
    )
}