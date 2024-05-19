export interface ResultsSectionProps {
    setChatGPTReply: (newReply: string[]) => void;
    setError: (error: boolean) => void;
    chatGPTReply: string[];
    industries: string;
    overview: string;
    pieChartValues: string;
    questionsToUse: string;
}