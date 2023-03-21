import { useState } from "react";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { StyledButtonDownload } from "./styled";

const ButtonDownload = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFetchExampleTasks = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(fetchExampleTasks());
    setLoading(false);
    setSuccess(true);
  };

  return (
    <StyledButtonDownload onClick={handleFetchExampleTasks} disabled={loading}>
      {loading ? "Ładowanie..." : success ? "Pobierz przykładowe zadania" : "Pobierz przykładowe zadania"}
    </StyledButtonDownload>
  );
};

export default ButtonDownload;
