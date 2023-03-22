import { StyledMenu, ItemMenu, StyledNavLink } from "./styled.js";

const Menu = () => {
  return (
    <StyledMenu>
      <ItemMenu>
        <StyledNavLink activeClassName="active" to="/zadania">
          zadania
        </StyledNavLink>
      </ItemMenu>
      <ItemMenu>
        <StyledNavLink activeClassName="active" to="/autor">
          o autorze
        </StyledNavLink>
      </ItemMenu>
    </StyledMenu>
  );
};


export default Menu;   