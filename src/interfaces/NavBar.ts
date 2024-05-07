export interface NavBarProps {
    setBlurPage: (blur: boolean) => void;
    setCurrentPage: (newPage: number) => void;
    currentPage: number;
    blurPage: boolean;
    questionsSubmitted: boolean;
}