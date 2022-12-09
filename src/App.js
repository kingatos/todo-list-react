import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zjeść obiad", done: false },
  { id: 2, content: "uprasować ciuchy", done: true },
];

const hiddenDone = false;

function App() {
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
          <Tasks tasks={tasks} hiddenDone={hiddenDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hiddenDone={hiddenDone} />
        }
      />
    </Container>
  );
}

export default App;
