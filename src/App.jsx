import { useState } from "react";
import TodoList from "./TodoList/TodoList";
import CreateTodo from "./CreateTodo/CreateTodo";
import CreateTodoButton from "./CreateTodoButton/CreateTodoButton";
import ShowPageContext from "./Context";
import './App.css';

function ShowPageProvider({ children }) {
  const [showPage, setShowPage] = useState(true);

  function toggleShow() {
    setShowPage(!showPage);
  };

  return (
    <ShowPageContext.Provider value={{ showPage, toggleShow }}>
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
