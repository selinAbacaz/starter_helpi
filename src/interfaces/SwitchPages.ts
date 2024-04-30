/*
    * Variables Descriptions: 
    * 
    * currentPage: The current page, represented as a number, the website is on. (0 - Home, 1 - Basic, 2 - Detailed, 3 - Ressults)
    * varaint
*/

export interface SwitchPages {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    currentPage: number // Determines the page
    variant: string // Determines varaint of button
    type: string
}

export interface SwitchPages2 {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
}

export interface SwitchPages3{
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    currentPage: number // Determines the page
    blurPage: boolean // Determines whether or not the page is blurred
    setBlurPage: (blur: boolean) => void

}

export interface SwitchPages4 {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    currentPage: number // Determines the page
    variant: string // Determines varaint of button
    type: string
    blurPage: boolean
    setBlurPage: (blur: boolean) => void
}

export interface SwitchPages5 {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    blurPage: boolean // Determines whether or not the page is blurred
    setBlurPage: (blur: boolean) => void
}

export interface SwitchPages6 {
    setCurrentPage: (newPage: number) => void;
    setBlurPage: (blur: boolean) => void;
    setOverview: (newOverview: string) => void;
    setIndustries: (newIndustry: string) => void;
    blurPage: boolean;
}

export interface SwitchPages7 {
    setOverview: (newOverview: string) => void;
    overview: string;
    setIndustries: (newIndustry: string) => void;
    industries: string;
}

export interface SwitchPages8 {
    setCurrentPage: (newPage: number) => void;
    setBlurPage: (blur: boolean) => void;
    blurPage: boolean;
}
