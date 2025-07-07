import { useContext } from "react";
import { EmojiContext } from "./context/Context";

export default function SaveTodoButton({ action }) {
    const { emoji } = useContext(EmojiContext);
    return (
        <div>
            <button onClick={() => action(emoji)}>Save Todo</button>
        </div>
    )
}