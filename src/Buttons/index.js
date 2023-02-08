import { StyledButtons, Button } from "./styled.js";

const Buttons = ({ tasks, hiddenDone, toggleHiddenDone, setAllDone }) => (
  <StyledButtons>
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
  </StyledButtons>
);


export default Buttons;