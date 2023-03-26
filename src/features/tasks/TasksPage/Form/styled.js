import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  border-style: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: 0.5s;
  background: ${({ theme }) => theme.color.teal};

  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(120%);
  }
`;
