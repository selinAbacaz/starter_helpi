import { SwitchPages } from "../interfaces/SwitchPages";
import { SwitchPage } from "./SwitchPage";

export function NavBar ({setCurrentPage, pageNumber}: SwitchPages) {
    const buttonNames: string[] = ["Home", "Basic Questions", "Detailed Questions"];
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">{buttonNames[pageNumber]}</span>
            <ul className="navbar-nav">
                <li>
                    <span className="nav-link"><SwitchPage setCurrentPage={setCurrentPage} pageNumber={0} varaint={"outline-primary"}></SwitchPage></span>
                </li>
                <li>
                    <span className="nav-link"><SwitchPage setCurrentPage={setCurrentPage} pageNumber={1} varaint={"outline-primary"}></SwitchPage></span>
                </li>
                <li>
                    <span className="nav-link"><SwitchPage setCurrentPage={setCurrentPage} pageNumber={2} varaint={"outline-primary"}></SwitchPage></span>
                </li>
            </ul>
        </nav>
    )
}