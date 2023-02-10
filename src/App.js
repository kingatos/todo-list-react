import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import useTasks from "./useTasks";
import styled from "styled-components";

export const StyledContainer = styled.main`
    max-width: 900px;
    padding: 20px;
    margin: 0 auto;
`;

function App() {
  const [hiddenDone, setHiddenDone] = useState(false);

  const toggleHiddenDone = () => {
    setHiddenDone(hiddenDone => !hiddenDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();


  return (
    <StyledContainer>
      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />
        }
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
    </StyledContainer>
  );
}

export default App;
