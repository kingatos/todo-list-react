import { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hiddenDone, setHiddenDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "zjeść obiad", done: false },
    { id: 2, content: "uprasować ciuchy", done: true },
  ]);

  const toggleHiddenDone = () => {
    setHiddenDone(hiddenDone => !hiddenDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  return (
    <Container>
      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hiddenDone={hiddenDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hiddenDone={hiddenDone}
            toggleHiddenDone={toggleHiddenDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
