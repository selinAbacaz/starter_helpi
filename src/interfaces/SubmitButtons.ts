export interface SubmitButtonsProps {
    setBlurPage: (blur: boolean) => void;
    setCurrentPage: (newPage: number) => void;
    setQuestionsToUse: (newQuestionsToUse: string) => void;
    setSubmitted: (submitted: boolean) => void;
    setSubmitFlag: (newFlag: boolean) => void;
    setSubmittedAnswers: (submittedAnswers: boolean) => void;
    blurPage: boolean;
    numQuestionsAnswered: number;
    questionsToUse: string;
    submitted: boolean;
    submitFlag: boolean;
}