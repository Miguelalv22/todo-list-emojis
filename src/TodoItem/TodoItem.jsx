import "./TodoItem.css";

export default function TodoItem({ todo, emoji }) {
    return (
        <li className="TodoItem">
            <p>{todo}</p>
            <button>{emoji}</button>
        </li>
    )
}