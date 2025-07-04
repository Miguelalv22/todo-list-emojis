import { useContext, useState } from "react";
import ShowPageContext from "../Context";
import "./CreateTodoButton.css";

export default function CreateTodoButton() {
    const { toggleShow } = useContext(ShowPageContext);

    const [styleClass, setStyleClass] = useState(false);

    function changeStyle() {
        setStyleClass(!styleClass);
    }

    function handleClick() {
        changeStyle();
        toggleShow();
    };

    return (
        <div className="create-container">
            <button className={styleClass == true ? "transformed" : ""}
                onClick={handleClick}
            >
                <img src="https://res.cloudinary.com/daxdf7hr0/image/upload/v1751481363/add-icon_alb6vw.png" alt="Add Todo" />
            </button>
        </div>
    )
};