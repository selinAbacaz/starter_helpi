export interface SubmitButtonsProps {
    setBlurPage: (blur: boolean) => void;
    setCurrentPage: (newPage: number) => void;
    setSubmitFlag: (newFlag: boolean) => void;
    setSubmittedAnswers: (submittedAnswers: boolean) => void;
    blurPage: boolean;
    numQuestionsAnswered: number;
    submitted: boolean;
    submitFlag: boolean;
}