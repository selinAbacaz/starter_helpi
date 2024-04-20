import { Nav, Navbar } from "react-bootstrap";
import { SwitchPages } from "../interfaces/SwitchPages";
import { SwitchPage } from "./SwitchPage";

export function NavBar ({setCurrentPage}: SwitchPages) {
    return (
    <Navbar sticky="top" style={{fontFamily: "Helvetica"}}>
        <Navbar.Brand style={{fontSize: "25px"}}>Career Helpi</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" defaultActiveKey="Home">
                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={0} varaint={""} type={"nav"}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={1} varaint={""} type={"nav"}></SwitchPage>
                <SwitchPage setCurrentPage={setCurrentPage} pageNumber={2} varaint={""} type={"nav"}></SwitchPage>
            </Nav>
        </Navbar.Collapse>
       
    </Navbar>
    )
}