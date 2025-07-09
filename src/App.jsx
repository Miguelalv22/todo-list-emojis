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

  function toggleShow() {
    setShowPage(!showPage);
  };

  function addTodo(emoji) {
    const todo = document.getElementById('todoText');
    todoList.push({ id: uuid(), todo: todo.value, emoji: emoji })
    todo.value = "";
    toggleShow();
  }


  return (
    <ShowPageContext.Provider value={{ showPage, toggleShow, addTodo }}>
      {children}
    </ShowPageContext.Provider>
  )
};

function App() {
  return (
    <>
      <ShowPageProvider>
        <TodoList todoList={todoList} />
        <CreateTodo />
        <CreateTodoButton />
      </ShowPageProvider>
    </>
  )
};

export default App;
