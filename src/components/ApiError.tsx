import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { saveSubmittedNewKey } from "../App";
import './ApiError.css'

function ApiError () {
    const [showError, setShowError] = useState<boolean>(true); // Determines wether or not to show the API error message

    useEffect (() => { // Makes it so that the API error message will disapper after a set amount of time
        setTimeout(() => {
            setShowError(false); 
            sessionStorage.setItem(saveSubmittedNewKey, JSON.stringify(false));
        }, 4000);
    });

    return (
        <div className={"error"}>
            {showError && <Alert severity="error" variant="filled">Invalid API Key! You must submit a valid API key!</Alert>}
        </div>
    )
}

export default ApiError; 