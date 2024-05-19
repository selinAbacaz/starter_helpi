import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

function ApiError () {
    const [showError, setShowError] = useState<boolean>(true); // Determines wether or not to show the API error message

    useEffect (() => { // Makes it so that the API error message will disapper after a set amount of time
        setTimeout(() => setShowError(false), 5000);
    });

    return (
        <div style={{position: "fixed", left: "50%", transform: "translate(-50%)"}}>
            {showError && <Alert severity="error" variant="filled">Invalid API Key! You must submit a valid API key!</Alert>}
        </div>
    )
}

export default ApiError; 