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
    blurPage?: boolean;
    currentPage?: number;
    questionsToUse?: string;
    type?: string;
    variant?: string;
}

export interface SwitchPages7 {
    submitFlagBasic: boolean;
    setSubmitFlagBasic: (newFlag: boolean) => void;
    submitFlagDetailed: boolean;
    setSubmitFlagDetailed: (newFlag: boolean) => void;
    questionsToUse: string;
    setQuestionsToUse: (newQuestionsToUse: string) => void;
}

export interface SwitchPages8 {
    questionsToUse: string;
    setCurrentPage: (newPage: number) => void;
    setBlurPage: (blur: boolean) => void;
    blurPage: boolean;
    setQuestionsToUse: (newQuestionsToUse: string) => void;
}
