import { useContext, useState } from "react";
import TodoLabel from "../TodoLabel";
import SaveTodoButton from "../SaveTodoButton/SaveTodoButton";
import { ShowPageContext, EmojiContext } from "../context/Context";
import "./CreateTodo.css";

function EmojiProvider({ children }) {
    const [emoji, setEmoji] = useState("🚴‍♀️");

    function newValue() {
        const select = document.getElementById("selectEmoji");
        setEmoji(select.value);
    }

    return (
        <EmojiContext.Provider value={{ emoji, newValue }}>
            {children}
        </EmojiContext.Provider>
    )
}

export default function CreateTodo() {
    const { showPage, addTodo, changeTodoText } = useContext(ShowPageContext);

    return (
        <div className={showPage == true ? "display CreateTodo" : "CreateTodo"
        }>
            <EmojiProvider>
                <TodoLabel />
                <textarea name="todoText" id="todoText" cols="30" rows="10"
                    placeholder="Type your task."
                    onChange={changeTodoText}></textarea>
                <SaveTodoButton action={addTodo} />
            </EmojiProvider>
        </div >
    )
};