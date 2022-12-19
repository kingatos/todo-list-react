import { useState, useRef } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if ( newTaskContent.trim() === "") {
            return;
        } 
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };
    

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                ref={inputRef}
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