import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledList = styled.ul`
  display: flex;
  place-content: center;
  list-style-type: none;
  background-color: ${({ theme }) => theme.color.teal};
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
export const ItemLi = styled.li`
  margin-left: 20px;
`;

export const ItemA = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
    font-weight:bold;
  }
`;
