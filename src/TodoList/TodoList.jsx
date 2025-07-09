import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoTitle from "../TodoTitle";
import TodoCount from "../TodoCount";
import SearchBar from "../SearchBar";
import { ShowPageContext } from "../context/Context";
import "./TodoList.css"

export default function TodoList({ todoList }) {
    const { showPage } = useContext(ShowPageContext);

    return (
        <div className={showPage == true ? "" : "TodoList"}>
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