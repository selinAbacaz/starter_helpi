import { Button, ButtonGroup } from "@mui/material";
import { SwitchPage } from "../../../components/SwitchPage";
import { SubmitButtonsProps } from "../../../interfaces/SubmitButtons";

function SubmitButtons ({ setBlurPage, setCurrentPage, setSubmitFlag, setQuestionsToUse, setSubmitted, setSubmittedAnswers, blurPage, numQuestionsAnswered, questionsToUse, submitted, submitFlag }: SubmitButtonsProps) {

    function changeSubmitState () {
        const newSubmit = !submitted
        setSubmittedAnswers(!submitted)
        setSubmitFlag(!submitFlag);
        if (newSubmit) {
            setBlurPage(true);
        }
    }

    return (
        <ButtonGroup variant="text">
            <Button onClick={changeSubmitState} disabled={numQuestionsAnswered !== 10 || blurPage} sx={{
                textTransform: 'none',
                color: '#5d3627',
                fontSize: '20px',
                fontFamily: 'louis_george_caferegular',
                transition: 'transform 0.5s',
                '&:hover': {
                    backgroundColor: 'rgb(235, 235, 235)',
                    transform: 'translateY(-5px)',
                }
            }}
            variant="text">{submitted ? "Change Answers" : "Submit"}</Button>
            {submitted && <SwitchPage setCurrentPage={setCurrentPage} newCurrentPage={3} type={"otherResults"} blurPage={blurPage} setBlurPage={setBlurPage} setQuestionsToUse={setQuestionsToUse} questionsToUse={questionsToUse} setSubmitted={setSubmitted}></SwitchPage>}
        </ButtonGroup>
    )
}

export default SubmitButtons;