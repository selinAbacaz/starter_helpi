import { Navbar } from "react-bootstrap";
import { SwitchPage } from "./SwitchPage";
import { NavBarProps } from "../interfaces/NavBar";


export function NavBar ({setBlurPage, setCurrentPage, currentPage, blurPage, questionsSubmitted, submitted}: NavBarProps) {
    return (
    <Navbar style={{fontFamily: "Helvetica", padding: "10px", alignItems: "center"}}>
        <Navbar.Brand><SwitchPage setCurrentPage={setCurrentPage} currentPage={0} type={"navTitle"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "flex-end"}}>
            <div style={{marginRight: "10px"}}>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={0} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage>
            </div>
            <div style={{marginRight: "10px"}}>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={1} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage>
            </div>
            <div style={{marginRight: "10px"}}>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={2} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage>
            </div>
            {submitted && <SwitchPage setCurrentPage={setCurrentPage} currentPage={3} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage>}
        </Navbar.Collapse>
       
    </Navbar>
    )
}