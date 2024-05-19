import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

function ApiError () {
    const [showError, setShowError] = useState<boolean>(true);

    useEffect (() => {
        setTimeout(() => setShowError(false), 5000)
    })
    
    return (
        <div style={{position: "fixed", left: "50%", transform: "translate(-50%)"}}>
            {showError && <Alert severity="error" variant="filled">Invalid API Key! You must submit a valid API key!</Alert>}
        </div>
    )
}

export default ApiError;