import Input from "../../Input/styled";
import { Wrapper } from "../Search/styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../.././TasksPage/queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    })
  };
 
  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
        />
     </Wrapper>
  );
};

export default Search;
