export interface ApiKeyInputProps {
    setSubmittedNewKey: (isNew: boolean) => void;
    setValidKey: (valid: boolean) => void;
    blurPage: boolean;
    type: string;
} 