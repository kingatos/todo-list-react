import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledButtonDownload } from "./styled";

const ButtonDownload = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <StyledButtonDownload disabled={loading} onClick={() => dispatch(fetchExampleTasks())} >
      {loading ? "Ładowanie..."
        : "Pobierz przykładowe zadania"}
    </StyledButtonDownload>
  );
};

export default ButtonDownload;
