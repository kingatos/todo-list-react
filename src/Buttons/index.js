import { StyledButtons, StyledBothButtons } from "./styled.js";

const Buttons = ({ tasks, hiddenDone, toggleHiddenDone, setAllDone }) => (
  <StyledButtons>
    {tasks.length > 0 && (
      <>
        <StyledBothButtons
          onClick={toggleHiddenDone}
        >
          {hiddenDone ? "Pokaż" : "Ukryj"} ukończone
        </StyledBothButtons>
        <StyledBothButtons
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </StyledBothButtons>
      </>
    )}
  </StyledButtons>
);


export default Buttons;