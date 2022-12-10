import { useState, useRef } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");

        if (inputRef.current.value.trim() === ""); {
            inputRef.current.focus();
        } return;
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input value={newTaskContent}
                ref={inputRef}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                className="form__button"
            >
                Dodaj zadanie</button>
        </form>
    )
};

export default Form; 