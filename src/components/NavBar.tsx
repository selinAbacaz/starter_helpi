import { Nav, Navbar } from "react-bootstrap";
import { SwitchPages } from "../interfaces/SwitchPages";
import { SwitchPage } from "./SwitchPage";

export function NavBar ({setCurrentPage, pageNumber}: SwitchPages) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions"];
    return (
        <div>
        <Navbar sticky="top">
            <Navbar.Brand style={{fontSize: "25px"}}>Career Helpi</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link><SwitchPage setCurrentPage={setCurrentPage} pageNumber={0} varaint={"me-auto"}></SwitchPage></Nav.Link>
                    <Nav.Link><SwitchPage setCurrentPage={setCurrentPage} pageNumber={1} varaint={"me-auto"}></SwitchPage></Nav.Link>
                    <Nav.Link><SwitchPage setCurrentPage={setCurrentPage} pageNumber={2} varaint={"me-auto"}></SwitchPage></Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text style={{fontSize: "25px"}}>{buttonNames[pageNumber]}</Navbar.Text>
                </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
        </div>
        
    )
}