export interface ResultsPageProps {
    setQuestionsToUse: (newQuestionsToUse: string) => void;
    setSubmitFlagBasic: (newFlag: boolean) => void;
    setSubmitFlagDetailed: (newFlag: boolean) => void;
    questionsToUse: string;
    submitFlagBasic: boolean;
    submitFlagDetailed: boolean;
}