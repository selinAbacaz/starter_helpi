import { Nav, Navbar } from "react-bootstrap";
import { SwitchPages3 } from "../interfaces/SwitchPages";
import { SwitchPage } from "./SwitchPage";


export function NavBar ({setCurrentPage, pageNumber, blurPage}: SwitchPages3) {
    return (
    <Navbar style={{fontFamily: "Helvetica"}}>
        <Navbar.Brand style={{fontSize: "25px"}}>Career Helpi</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" defaultActiveKey={pageNumber} activeKey={pageNumber}>
                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={0} varaint={""} type={"nav"} blurPage={blurPage}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={1} varaint={""} type={"nav"} blurPage={blurPage}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={2} varaint={""} type={"nav"} blurPage={blurPage}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={3} varaint={""} type={"nav"} blurPage={blurPage}></SwitchPage>
            </Nav>
        </Navbar.Collapse>
       
    </Navbar>
    )
}