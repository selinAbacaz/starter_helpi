/*
    * 0 - Home Page
    * 1 - Basic Questions Page
    * 2 - Detailed Questions Page
    * 3 - Results Page
*/

export interface SwitchPages {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    pageNumber: number // Determines the page
    varaint: string // Determines varaint of button
    type: string
}

export interface SwitchPages2 {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
}

export interface SwitchPages3{
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    pageNumber: number // Determines the page
    blurPage: boolean // Determines whether or not the page is blurred

}

export interface SwitchPages4 {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    pageNumber: number // Determines the page
    varaint: string // Determines varaint of button
    type: string
    blurPage: boolean
}

export interface SwitchPages5 {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    blurPage: boolean // Determines whether or not the page is blurred
}

export interface SwitchPages6 {
    setCurrentPage: (newPage: number) => void;
    setBlurPage: (blur: boolean) => void;
    blurPage: boolean;
}