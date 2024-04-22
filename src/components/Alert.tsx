import { useState } from "react";
import {  Toast, ToastContainer } from "react-bootstrap";
import { BlurPageProps } from "../interfaces/BlurPage";
import "../App.css"

export function ShowAlert ({ setBlurPage }: BlurPageProps) {
    const [showMessage, setShowMessage] = useState<boolean>(true);
    
    function dismissMessage () {
        setShowMessage(false);
        setBlurPage(false);
    }
    return (
        <div>
            <ToastContainer position="middle-center">
                <Toast show={showMessage} onClose={dismissMessage}>
                    <Toast.Header>
                        <strong className="me-auto">Quiz Completed!</strong>
                    </Toast.Header>
                    <Toast.Body>Congratulations! You have completed all of the questions! Go see your results!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
        
    )
}