import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import TodoList from "./TodoList/TodoList";
import CreateTodo from "./CreateTodo/CreateTodo";
import CreateTodoButton from "./CreateTodoButton/CreateTodoButton";
import { ShowPageContext } from "./context/Context";
import './App.css';

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
}

const getInitialQuantity = () => {
  const qty = (JSON.parse(localStorage.todos)).length;
  return qty;
}

function ShowPageProvider({ children }) {
  const [showPage, setShowPage] = useState(true);
  const [todos, setTodos] = useState(getInitialData);
  const [todoText, setTodoText] = useState("");
  const [qtyTodos, setQtyTodos] = useState(getInitialQuantity);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setQtyTodos((JSON.parse(localStorage.todos)).length);
  }, [todos]);

  function toggleShow() {
    setShowPage(!showPage);
  };

  function changeTodoText() {
    const text = document.getElementById('todoText');
    setTodoText(text.value);
  };

  function addTodo() {
    const select = document.getElementById("selectEmoji");
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), todo: todoText, emoji: select.value }];
    })
    const text = document.getElementById('todoText');
    text.value = ''
    toggleShow();
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    })
  }

  return (
    <ShowPageContext.Provider value={{ showPage, toggleShow, addTodo, deleteTodo, todos, qtyTodos, changeTodoText }}>
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
