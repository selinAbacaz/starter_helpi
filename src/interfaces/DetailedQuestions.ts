export interface DetailedQuestionsProps {
    setBlurPage: (blur: boolean) => void;
    setCurrentPage: (newPage: number) => void;
    setQuestionsToUse: (newQuestionsToUse: string) => void;
    setSubmitFlagDetailed: (newFlag: boolean) => void;
    setSubmitted: (submitted: boolean) => void;
    blurPage: boolean;
    submitFlagDetailed: boolean;  
}