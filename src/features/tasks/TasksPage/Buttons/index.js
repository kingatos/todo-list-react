import { Wrapper, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectIsEveryTaskDone,
  selectHideDone,
  selectAreTasksEmpty,
  fetchExmapleTasks,
} from "../.././tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExmapleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
