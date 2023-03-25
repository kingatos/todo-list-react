import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTasksById } from "../tasksSlice";
import { StyledContainer } from "../../../common/Container/styled";

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
