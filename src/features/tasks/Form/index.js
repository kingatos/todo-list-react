import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled.js";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
        inputRef.current.focus();
    };


    return (
        <StyledForm
            onSubmit={onFormSubmit}>
            <StyledInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                ref={inputRef}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <StyledButton
                onClick={focusInput}
            >
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    )
};

export default Form; 