import TodoTitle from "./TodoTitle"
import TodoCount from "./TodoCount";
import SearchBar from "./SearchBar"
import TodoList from "./TodoList"
import CreateTodoButton from "./CreateTodoButton"
import './App.css'

function App() {


  return (
    <>
      <TodoTitle />
      <TodoCount />
      <SearchBar />
      <TodoList />
      <CreateTodoButton />
    </>
  )
}

export default App
