import './SaveTodoButton.css';

export default function SaveTodoButton({ action }) {
    return (
        <div className="SaveTodoButton">
            <button onClick={action}>Save Todo</button>
        </div>
    )
}