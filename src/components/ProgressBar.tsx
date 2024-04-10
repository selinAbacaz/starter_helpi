import { ProgressBar } from "react-bootstrap";

interface ShowProgressBarProps {
    numQuestionsAnswered: number
    totalQuestions: number
}

export function ShowProgressBar ({numQuestionsAnswered, totalQuestions}: ShowProgressBarProps) {
    return (
        <ProgressBar now={(numQuestionsAnswered * 100) / totalQuestions}></ProgressBar>
    )
}