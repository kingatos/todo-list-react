import { useState } from "react";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { StyledButtonDownload } from "./styled";

const ButtonDownload = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleFetchExampleTasks = () => {
    setLoading(true);
    dispatch(fetchExampleTasks());
  };

  return (
    <StyledButtonDownload onClick={handleFetchExampleTasks} disabled={loading}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </StyledButtonDownload>
  );
};

export default ButtonDownload;
