import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "../App.css"
import { SwitchPages6 } from "../interfaces/SwitchPages";
import { SwitchPage } from "./SwitchPage";

export function ShowAlert ({ setBlurPage, setCurrentPage, blurPage }: SwitchPages6) {
    const [showMessage, setShowMessage] = useState<boolean>(true);
    const [toastPosition, setToastPosition] = useState<number>(window.scrollY)
    
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
            <ToastContainer style={{ position: "fixed", top: toastPosition, left: "50%", transform: "translate(-50%, 200%)"}}>
                <Toast show={showMessage} onClose={dismissMessage} style={{width: "500px"}}>
                    <Toast.Header style={{fontSize: "28px"}}>
                        <strong className="me-auto">Quiz Completed!</strong>
                    </Toast.Header>
                    <Toast.Body style={{fontSize: "25px"}}>
                        Congratulations! You have completed all of the questions! Go see your results!
                        <SwitchPage setCurrentPage={setCurrentPage} pageNumber={3} varaint={""} type={"button"} blurPage={blurPage}></SwitchPage>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
        
    )
}