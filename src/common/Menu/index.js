import { useLocation } from "react-router-dom"; 
import { ItemLink, StyledMenu, ItemMenu } from "./styled.js";

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <StyledMenu>
      <ItemMenu>
        <ItemLink to="/zadania" open={pathname === "/zadania"}>
          zadania
        </ItemLink>
      </ItemMenu>
      <ItemMenu>
        <ItemLink to="/autor" open={pathname === "/autor"}>
          o autorze
        </ItemLink>
      </ItemMenu>
    </StyledMenu>
  );
};


export default Menu;   