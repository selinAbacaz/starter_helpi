import { Nav, Navbar } from "react-bootstrap";
import { SwitchPage } from "./SwitchPage";
import { NavBarProps } from "../interfaces/NavBar";


export function NavBar ({setCurrentPage, currentPage, blurPage, setBlurPage}: NavBarProps) {
    return (
    <Navbar style={{fontFamily: "Helvetica"}}>
        <Navbar.Brand style={{fontSize: "25px"}}>Career Helpi</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" defaultActiveKey={currentPage} activeKey={currentPage}>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={0} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={1} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={2} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} currentPage={3} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage}></SwitchPage>
            </Nav>
        </Navbar.Collapse>
       
    </Navbar>
    )
}