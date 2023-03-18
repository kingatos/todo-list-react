import styled from "styled-components";

export const StyledList = styled.ul`
  justify-content: center;
  list-style-type: none;
  background-color: ${({ theme }) => theme.color.white};
  max-width: 870px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
`;

export const ItemA = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
