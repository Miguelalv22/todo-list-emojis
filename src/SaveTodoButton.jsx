import { useContext } from "react";
import { EmojiContext } from "./context/Context";

export default function SaveTodoButton({ action }) {
    return (
        <div>
            <button onClick={action}>Save Todo</button>
        </div>
    )
}