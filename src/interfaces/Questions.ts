export interface QuestionsProps {
    setNumQuestionAnswered: (newAnswered: number) => void;
    answerPlacement: number;
    question: string;
    submitted: boolean;
}