export interface SwitchPages {
    setCurrentPage: (newPage: number) => void; // Function to change to a new Page
    currentPage: number; // Current Page represented as a number 0 - Home, 1 - Basic Questions, 2 - Detailed Questions
}