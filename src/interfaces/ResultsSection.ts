export interface ResultsSectionProps {
    setGPTReply: (newReply: string[]) => void;
    chatGPTReply: string[];
    industries: string;
    overview: string;
    pieChartValues: string;
    questionsToUse: string;
}