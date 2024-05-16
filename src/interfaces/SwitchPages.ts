/*
    * Variables Descriptions: 
    * 
    * currentPage: The current page, represented as a number, the website is on. (0 - Home, 1 - Basic, 2 - Detailed, 3 - Ressults)
    * varaint - Determines the variant of the buttons that result in a page switch
    * type - Determines the type of button to be used
    * blurPage - Determines whether or not the page will be blurred (Only happens when an Alert message appears)
*/

export interface SwitchPagesProps {
    setBlurPage?: (blur: boolean) => void;
    setCurrentPage?: (newPage: number) => void;
    setQuestionsToUse?: (newQuestionsToUse: string) => void;
    setSubmitted?: (submitted: boolean) => void;
    blurPage?: boolean;
    newCurrentPage?: number;
    questionsSubmitted?: boolean;
    questionsToUse?: string;
    type?: string;
    variant?: string;
}
