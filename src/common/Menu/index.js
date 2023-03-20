import { ItemLink, StyledMenu, ItemMenu } from "./styled.js";

const Menu = () => (
    <StyledMenu>
    <ItemMenu>
      <ItemLink to="/zadania">zadania</ItemLink>
    </ItemMenu>
    <ItemMenu>
      <ItemLink to="/autor">o autorze</ItemLink>
    </ItemMenu>
  </StyledMenu>
);

export default Menu;   