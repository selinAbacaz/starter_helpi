export interface BasicQuestionsProps {
    setBlurPage: (blur: boolean) => void;
    setCurrentPage: (newPage: number) => void;
    setSubmitFlagBasic: (newFlag: boolean) => void;
    setQuestionsToUse: (newQuestionsToUse: string) => void;
    blurPage: boolean;
    submitFlagBasic: boolean;
}