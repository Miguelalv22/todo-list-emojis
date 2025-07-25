import { useContext } from "react"
import "./TodoItem.css"
import { ShowPageContext } from "../context/Context"

export default function TodoItem({ id, todo, emoji }) {
    const { deleteTodo } = useContext(ShowPageContext);

    function handleClick() {
        deleteTodo(id)
    }

    return (
        <div className="TodoItem">
            <p>{todo}</p>
            <button onClick={handleClick}>{emoji}</button>
        </div>
    )
}