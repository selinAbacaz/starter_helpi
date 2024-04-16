import { SwitchPages } from "../interfaces/SwitchPages";
import { SwitchPage } from "./SwitchPage";

export function NavBar ({setCurrentPage}: SwitchPages) {
    return (
        <SwitchPage setCurrentPage={setCurrentPage} pageNumber={0}></SwitchPage>
    )
}