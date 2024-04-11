import { useState } from "react";
import {  Toast, ToastContainer } from "react-bootstrap";

export function ShowAlert () {
    const [showMessage, setShowMessage] = useState<boolean>(true);

    function dismissMessage () {
        setShowMessage(false);
    }
    return (
        <ToastContainer position="top-start">
            <Toast show={showMessage} onClose={dismissMessage} >
                <Toast.Header>
                <strong className="me-auto">Quiz Completed!</strong>
                </Toast.Header>
                <Toast.Body>Congratulations! You have completed all of the questions! Go see your results!</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}