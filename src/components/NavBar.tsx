import { Navbar } from "react-bootstrap";
import { SwitchPage } from "./SwitchPage";
import { NavBarProps } from "../interfaces/NavBar";
import { ButtonGroup } from "@mui/material";


export function NavBar ({setBlurPage, setCurrentPage, currentPage, blurPage, questionsSubmitted, submitted}: NavBarProps) {
    return (
    <Navbar style={{ padding: "10px", alignItems: "center" }}>
        <Navbar.Brand><SwitchPage setCurrentPage={setCurrentPage} newCurrentPage={0} type={"navTitle"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "flex-end"}}>
            <ButtonGroup variant="text"  sx={{ "& .MuiButtonGroup-grouped": { borderColor: "black" } }}>
                
                    <SwitchPage setCurrentPage={setCurrentPage} currentPage={currentPage} newCurrentPage={0} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage>
               
                
                    <SwitchPage setCurrentPage={setCurrentPage} currentPage={currentPage} newCurrentPage={1} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage>
              
                    <SwitchPage setCurrentPage={setCurrentPage} currentPage={currentPage} newCurrentPage={2} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage>
            
                    {submitted && <SwitchPage setCurrentPage={setCurrentPage} newCurrentPage={3} type={"nav"} blurPage={blurPage} setBlurPage={setBlurPage} questionsSubmitted={questionsSubmitted}></SwitchPage>}
            </ButtonGroup>
            
        </Navbar.Collapse>
       
    </Navbar>
    )
}