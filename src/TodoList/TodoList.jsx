import TodoItem from "../TodoItem/TodoItem";
import TodoTitle from "../TodoTitle";
import TodoCount from "../TodoCount";
import SearchBar from "../SearchBar";
import "./TodoList.css"

const todoList = [
    { id: 2, todo: "Hacer la tarea", emoji: "👩‍🔧" },
    { id: 3, todo: "Barrer", emoji: "👨‍🚀" },
    { id: 4, todo: "Pasear el perro", emoji: "🧙‍♂️" },
    { id: 5, todo: "Cambiar las llantas del auto", emoji: "🏇" },
]

export default function TodoList() {
    return (
        <div className="TodoList">
            <TodoTitle />
            <TodoCount />
            <SearchBar />
            {
                todoList.map((item) => {
                    return <TodoItem
                        key={item.id}
                        todo={item.todo}
                        emoji={item.emoji} />
                })
            }
        </div>
    )
};