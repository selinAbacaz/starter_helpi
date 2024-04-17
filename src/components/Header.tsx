import { SwitchPages } from "../interfaces/SwitchPages";
import { SwitchPage } from "./SwitchPage";

export function ShowHeader ({setCurrentPage}: SwitchPages) {
    return (
        <SwitchPage setCurrentPage={setCurrentPage} pageNumber={0}></SwitchPage>
    )
}