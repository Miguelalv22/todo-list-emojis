import EmojiButton from "./emojiButton";
import SaveTodoButton from "./SaveTodoButton";

export default function TodoText() {
    return (
        <div>
            <label htmlFor="todoText"></label>
            <EmojiButton />
            <textarea name="" id="todoText" cols="30" rows="10"></textarea>
            <SaveTodoButton />
        </div>
    )
}