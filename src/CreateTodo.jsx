import TodoLabel from "./TodoLabel";
import SaveTodoButton from "./SaveTodoButton";

export default function CreateTodo() {
    return (
        <div>
            <TodoLabel />
            <textarea name="" id="todoText" cols="30" rows="10"></textarea>
            <SaveTodoButton />
        </div>
    )
};