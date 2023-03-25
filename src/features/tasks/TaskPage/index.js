import Section from "../../../common/Section";
import Header from "../../../common/Header";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTasksById } from "../tasksSlice";

export const StyledContainer = styled.main`
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
`;

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTasksById(state, id));
  
  return (
    <StyledContainer>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😟"}
        body={task && (
          <>
            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
          </>
        )}
      />
    </StyledContainer>
  );
}


export default TaskPage;
