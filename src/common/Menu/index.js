import { StyledMenu, ItemMenu, StyledNavLink } from "./styled.js";

const Menu = () => {
  return (
    <StyledMenu>
      <ItemMenu>
        <StyledNavLink to="/zadania">
          zadania
        </StyledNavLink>
      </ItemMenu>
      <ItemMenu>
        <StyledNavLink to="/autor">
          o autorze
        </StyledNavLink>
      </ItemMenu>
    </StyledMenu>
  );
};


export default Menu;   