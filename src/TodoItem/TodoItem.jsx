import "./TodoItem.css"
import { useContext } from "react";
import "./TodoItem.css";
import { ShowPageContext } from "../context/Context";

export default function TodoItem({ id, todo, emoji }) {
    const { deleteTodo } = useContext(ShowPageContext);

    function handleClick() {
        deleteTodo(id);
    }
