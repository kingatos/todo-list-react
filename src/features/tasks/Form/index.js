import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled.js";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice.js";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <StyledButton onClick={focusInput}>Dodaj zadanie</StyledButton>
    </StyledForm>
  );
};

export default Form;
