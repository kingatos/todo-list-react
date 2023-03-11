import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask, setTasks } from "../tasksSlice.js";

const useTasks = () => {
  const [taskState, setTaskState] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (tasksFromLocalStorage) {
      const tasks = JSON.parse(tasksFromLocalStorage);
      dispatch(setTasks(tasks));
      setTaskState(tasks);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskState));
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

    dispatch(addTask(newTask));
    setTaskState((prevTasks) => [...prevTasks, newTask]);
  };

  return { tasks: taskState, addNewTask };
};

export default useTasks;