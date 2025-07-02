import TodoLabel from "../TodoLabel";
import SaveTodoButton from "../SaveTodoButton";
import "./CreateTodo.css"

export default function CreateTodo() {
    return (
        <div className="CreateTodo">
            <TodoLabel />
            <textarea name="" id="todoText" cols="30" rows="10"></textarea>
            <SaveTodoButton />
        </div>
    )
};