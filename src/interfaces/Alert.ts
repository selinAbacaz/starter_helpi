export interface AlertMessageProps {
    setBlurPage: (blur: boolean) => void;
    setCurrentPage: (newPage: number) => void;
    setQuestionsToUse: (newQuestionsToUse: string) => void;
    setSubmitted: (submitted: boolean) => void;
    blurPage: boolean;
    questionsToUse: string;
}