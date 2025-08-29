import { useContext, useState } from "react";
import { ShowPageContext } from "../context/Context";
import "./CreateTodoButton.css";

export default function CreateTodoButton() {
    const { toggleShow, changeStyle, styleClass } = useContext(ShowPageContext);

    function handleClick() {
        changeStyle();
        toggleShow();
    };

    return (
        <div className="CreateTodoButton">
            <button className={styleClass == true ? "transformed" : ""}
                onClick={handleClick}
            >
                <img src="https://res.cloudinary.com/daxdf7hr0/image/upload/v1751481363/add-icon_alb6vw.png" alt="Add Todo" />
            </button>
        </div>
    )
};