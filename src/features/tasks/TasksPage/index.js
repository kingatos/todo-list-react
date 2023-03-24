import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import styled from "styled-components";
import Search from "../../../features/tasks/TasksPage/Search";
import ButtonDownload from "./ButtonDownload";

export const StyledContainer = styled.main`
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
`;

function TasksPage() {
  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" extraHeaderContent={<ButtonDownload />} body={<Form />} />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </StyledContainer>
  );
}

export default TasksPage;