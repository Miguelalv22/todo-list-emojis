import { useContext, useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoTitle from "../TodoTitle";
import TodoCount from "../TodoCount";
import SearchBar from "../SearchBar";
import { ShowPageContext } from "../context/Context";
import "./TodoList.css";

export default function TodoList() {
    const { showPage, todos } = useContext(ShowPageContext);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [text, setText] = useState('');

    function searchTodo() {
        let searchBar = document.getElementById('searchBar');
        setText(searchBar.value.toUpperCase());
    }

    function filterTodos() {
        setFilteredTodos(todos.filter(item => item.todo.toUpperCase().startsWith(text)));
    }

    useEffect(() => {
        if (text != '') {
            filterTodos();
        }
    }, [text]);

    return (
        <div className={showPage == true ? "" : "TodoList"}>
            <TodoTitle />
            <TodoCount />
            <SearchBar searchTodo={searchTodo} />
            <ul>
                {
                    text != '' ? (
                        filteredTodos.map((item) => {
                            return <TodoItem
                                key={item.id}
                                id={item.id}
                                todo={item.todo}
                                emoji={item.emoji} />
                        })
                    ) : (
                        todos.map((item) => {
                            return <TodoItem
                                key={item.id}
                                id={item.id}
                                todo={item.todo}
                                emoji={item.emoji} />
                        })
                    )
                }
            </ul>
        </div>
    )
};