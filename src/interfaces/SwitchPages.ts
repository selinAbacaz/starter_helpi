/*
    * Variables Descriptions: 
    * 
    * currentPage: The current page, represented as a number, the website is on. (0 - Home, 1 - Basic, 2 - Detailed, 3 - Ressults)
    * varaint - Determines the variant of the buttons that result in a page switch
    * type - Determines the type of button to be used
    * blurPage - Determines whether or not the page will be blurred (Only happens when an Alert message appears)
    * overview - Contains the overview text generated by chatGPT. Rendered in the results page
    * industries - Contains the industries text generated by chatGPT. Rendered in the results page
    * 
    * IMPORTANT NOTE: We know this is probably not the best way to go about this, and we are trying to find another solution.
*/

export interface SwitchPages {
    setCurrentPage: (newPage: number) => void;
    currentPage: number;
    variant: string;
    type: string;
}

export interface SwitchPages2 {
    setCurrentPage: (newPage: number) => void; 
}

export interface SwitchPages3{
    setCurrentPage: (newPage: number) => void;
    currentPage: number;
    blurPage: boolean;
    setBlurPage: (blur: boolean) => void;

}

export interface SwitchPages4 {
    setCurrentPage: (newPage: number) => void;
    currentPage: number;
    variant: string;
    type: string;
    blurPage: boolean;
    setBlurPage: (blur: boolean) => void;
}

export interface SwitchPages5 {
    setCurrentPage: (newPage: number) => void;
    blurPage: boolean;
    setBlurPage: (blur: boolean) => void;
}

export interface SwitchPages6 {
    setCurrentPage: (newPage: number) => void;
    setBlurPage: (blur: boolean) => void;
    setOverview: (newOverview: string) => void;
    setIndustryTitles: (newTitles: string[]) => void;
    setIndustryReasons: (newReasons: string[][]) => void;
    blurPage: boolean;
}

export interface SwitchPages7 {
    overview: string;
    industryTitles: string[];
    industryReasons: string[][];
}

export interface SwitchPages8 {
    setCurrentPage: (newPage: number) => void;
    setBlurPage: (blur: boolean) => void;
    blurPage: boolean;
}
