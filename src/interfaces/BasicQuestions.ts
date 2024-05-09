export interface BasicQuestionsProps {
    setBlurPage: (blur: boolean) => void;
    setCurrentPage: (newPage: number) => void;
    setSubmitFlagBasic: (newFlag: boolean) => void;
    setQuestionsToUse: (newQuestionsToUse: string) => void;
    setSubmitted: (submitted: boolean) => void;
    blurPage: boolean;
    submitFlagBasic: boolean;
}