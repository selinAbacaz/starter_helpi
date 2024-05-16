import { Alert } from "@mui/material";

function ApiError () {
    return (
        <div style={{position: "fixed", left: "50%", transform: "translate(-50%)"}}>
            <Alert severity="error" variant="filled">Invalid API Key! You must submit a valid API key!</Alert>
        </div>
    )
}

export default ApiError;