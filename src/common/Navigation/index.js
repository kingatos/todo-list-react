import { StyledMenu, ItemMenu, StyledNavLink } from "./styled.js";
import { toTasks, toAuthor } from "../../routes.js";

const Menu = () => {
  return (
    <StyledMenu>
      <ItemMenu>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </ItemMenu>
      <ItemMenu>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
      </ItemMenu>
    </StyledMenu>
  );
};

export default Menu;
