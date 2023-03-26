import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { StyledContainer } from "../../../common/Container/styled";
import Search from "../../../features/tasks/TasksPage/Search";
import ButtonDownload from "./ButtonDownload";

function TasksPage() {
  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ButtonDownload />}
        body={<Form />}
      />

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
