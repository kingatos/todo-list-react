import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const useTasks = () => {
  const [taskState, setTaskState] = useState([]);

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (tasksFromLocalStorage) {
      setTaskState(JSON.parse(tasksFromLocalStorage));
    } else {
      setTaskState([]);
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskState));
    setTaskState(taskState);
  }, [taskState]);

  const addNewTask = (newTaskContent) => {
    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    const newTask = {
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    };

    dispatch(newTask);
    setTaskState((prevTasks) => [...prevTasks, newTask]);
  };

  return { tasks: taskState, addNewTask };
};

export default useTasks;
