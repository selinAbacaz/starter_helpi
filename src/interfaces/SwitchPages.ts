export interface SwitchPages {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    pageNumber: number

    /*
    * 0 - Home Page
    * 1 - Basic Questions Page
    * 2 - Detailed Questions Page
    */
}