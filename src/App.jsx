import { useState } from "react";
import { v4 as uuid } from 'uuid';
import TodoList from "./TodoList/TodoList";
import CreateTodo from "./CreateTodo/CreateTodo";
import CreateTodoButton from "./CreateTodoButton/CreateTodoButton";
import { ShowPageContext } from "./context/Context";
import './App.css';

const todoList = [
  { id: uuid(), todo: "Create a new Todo.", emoji: "👩‍🔧" },
  { id: uuid(), todo: "Click the emoji to erase it.", emoji: "👨‍🚀" },
]

function ShowPageProvider({ children }) {
  const [showPage, setShowPage] = useState(true);
  const [todos, setTodos] = useState(todoList)
  const [todoText, setTodoText] = useState("")


  function toggleShow() {
    setShowPage(!showPage);
    console.log(todos)
    setTodoText("")
  };

  function changeTodoText() {
    const text = document.getElementById('todoText');
    setTodoText(text.value)
  }

  function addTodo() {
    const select = document.getElementById("selectEmoji");
    console.log(todoText)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), todo: todoText, emoji: select.value }]
    })
    toggleShow();
  }

  return (
    <ShowPageContext.Provider value={{ showPage, toggleShow, addTodo, todos, changeTodoText }}>
      {children}
    </ShowPageContext.Provider>
  )
};

function App() {
  return (
    <>
      <ShowPageProvider>
        <TodoList />
        <CreateTodo />
        <CreateTodoButton />
      </ShowPageProvider>
    </>
  )
};

export default App;
