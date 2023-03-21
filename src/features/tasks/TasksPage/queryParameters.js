import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (name) => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(name);
  };
  
  export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
  
    return ({ key, value }) => {
      if (value.trim() !== "") {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
  
      history.push(`${location.pathname}?${searchParams.toString()}`);
    };
  };