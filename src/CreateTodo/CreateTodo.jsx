import { useContext } from "react";
import TodoLabel from "../TodoLabel";
import SaveTodoButton from "../SaveTodoButton";
import ShowPageContext from "../Context";
import "./CreateTodo.css";

export default function CreateTodo() {
    const { showPage } = useContext(ShowPageContext);

    return (
        <div className={showPage == true ? "CreateTodo" : ""}>
            <TodoLabel />
            <textarea name="" id="todoText" cols="30" rows="10"></textarea>
            <SaveTodoButton />
        </div>
    )
};