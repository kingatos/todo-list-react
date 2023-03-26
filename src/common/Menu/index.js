import { StyledMenu, ItemMenu, StyledNavLink } from "./styled.js";

const Menu = () => {
  return (
    <StyledMenu>
      <ItemMenu>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </ItemMenu>
      <ItemMenu>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </ItemMenu>
    </StyledMenu>
  );
};

export default Menu;
