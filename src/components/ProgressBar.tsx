import { ProgressBar } from "react-bootstrap";

interface ShowProgressBarProps {
    numQuestionsAnswered: number
    totalQuestions: number
}

export function ShowProgressBar ({numQuestionsAnswered, totalQuestions}: ShowProgressBarProps) {
    let barStyle: string = "danger";
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