import EmojiButton from "./EmojiButton";

export default function TodoLabel({ list, action }) {
    return (
        <div>
            <label htmlFor="todoText">ToDo</label>
            <EmojiButton />
        </div>
    )
};