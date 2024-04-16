export interface SwitchPages {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    pageNumber: number // Determines the page
    varaint: string // Determines varaint of button

    /*
    * 0 - Home Page
    * 1 - Basic Questions Page
    * 2 - Detailed Questions Page
    */
}