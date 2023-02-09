import { Wrapper, Button } from "./styled.js";

const Buttons = ({ tasks, hiddenDone, toggleHiddenDone, setAllDone }) => (
  <Wrapper>
    {tasks.length > 0 && (
      <>
        <Button
          onClick={toggleHiddenDone}
        >
          {hiddenDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </Wrapper>
);


export default Buttons;