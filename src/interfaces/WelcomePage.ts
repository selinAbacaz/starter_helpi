export interface WelcomePageProps {
    setCurrentPage: (newPage: number) => void;
    setSubmittedNewKey: (isNew: boolean) => void;
    setValidKey: (valid: boolean) => void;
}