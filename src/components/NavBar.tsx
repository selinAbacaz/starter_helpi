import { Nav, Navbar } from "react-bootstrap";
import { SwitchPages3 } from "../interfaces/SwitchPages";
import { SwitchPage } from "./SwitchPage";


export function NavBar ({setCurrentPage, currentPage, blurPage, setBlurPage}: SwitchPages3) {
    return (
    <Navbar style={{fontFamily: "Helvetica"}}>
        <Navbar.Brand style={{fontSize: "25px"}}>Career Helpi</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" defaultActiveKey={currentPage} activeKey={currentPage}>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={0} variant={""} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsToUse={""} setQuestionsToUse={() => ""}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={1} variant={""} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsToUse={""} setQuestionsToUse={() => ""}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={2} variant={""} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsToUse={""} setQuestionsToUse={() => ""}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={3} variant={""} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsToUse={""} setQuestionsToUse={() => ""}></SwitchPage>
            </Nav>
        </Navbar.Collapse>
       
    </Navbar>
    )
}