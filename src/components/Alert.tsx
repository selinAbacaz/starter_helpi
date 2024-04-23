import { useEffect, useState } from "react";
import {  Toast, ToastContainer } from "react-bootstrap";
import { BlurPageProps } from "../interfaces/BlurPage";
import "../App.css"

export function ShowAlert ({ setBlurPage }: BlurPageProps) {
    const [showMessage, setShowMessage] = useState<boolean>(true);
    const [toastPosition, setToastPosition] = useState<number>(window.scrollY);
    
    function dismissMessage () {
        setShowMessage(false);
        setBlurPage(false);
    }

    useEffect(() => {
        const handleScroll = () => {
          setToastPosition(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div>
            <ToastContainer style={{top: toastPosition, transform: "translate(180%, 180%)"}}>
                <Toast show={showMessage} onClose={dismissMessage} style={{width: "500px"}}>
                    <Toast.Header style={{fontSize: "28px"}}>
                        <strong className="me-auto">Quiz Completed!</strong>
                    </Toast.Header>
                    <Toast.Body style={{fontSize: "25px"}}>Congratulations! You have completed all of the questions! Go see your results!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
        
    )
}