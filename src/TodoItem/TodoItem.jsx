import "./TodoItem.css"

export default function TodoItem({ todo, emoji }) {
    return (
        <div className="TodoItem">
            <p>{todo}</p>
            <button>{emoji}</button>
        </div>
    )
}