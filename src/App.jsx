import TodoList from "./TodoList/TodoList";
import CreateTodo from "./CreateTodo/CreateTodo";
import CreateTodoButton from "./CreateTodoButton/CreateTodoButton";
import './App.css';

function App() {
  return (
    <>
      <TodoList />
      <CreateTodo />
      <CreateTodoButton />
    </>
  )
};

export default App;
