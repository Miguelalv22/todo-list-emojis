import "./CreateTodoButton.css";
import { useState } from "react";

export default function CreateTodoButton() {
    const [styleClass, setStyleClass] = useState(false);

    function changeStyle() {
        setStyleClass(!styleClass);
    }

    return (
        <div className="create-container">
            <button className={styleClass == true ? "transformed" : ""}
                onClick={changeStyle}
            >
                <img src="https://res.cloudinary.com/daxdf7hr0/image/upload/v1751481363/add-icon_alb6vw.png" alt="Add Todo" />
            </button>
        </div>
    )
};