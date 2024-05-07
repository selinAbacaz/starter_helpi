export interface NavBarProps{
    setCurrentPage: (newPage: number) => void;
    currentPage: number;
    blurPage: boolean;
    setBlurPage: (blur: boolean) => void;

}