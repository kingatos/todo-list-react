import styled, { css } from "styled-components";
import removeIcon from "../TasksList/wastebasket.png";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  text-decoration: none;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  display: flex;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  margin: 0;
  margin-left: 10px;
  font-size: 14px;
  padding: 5px;
  flex-grow: 1;
  width: 100%;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background: rgb(13, 97, 33);
  transition: 0.5s;
`;

export const ToggleDoneButton = styled(Button)`
  background: ${({ theme }) => theme.color.forestGreen};

  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
`;

export const RemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.crimson};
  background-image: url("${removeIcon}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 17px;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;
`;
