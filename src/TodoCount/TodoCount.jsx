import './TodoCount.css';

export default function TodoCount({ qtyTodos }) {
    return (
        <div className="TodoCount">
            <p>Pendings: <span>{qtyTodos}</span> </p>
        </div>
    )
}