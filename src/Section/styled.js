import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const StyledHeader = styled.h1`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    font-size: 20px;
    padding: 20px;
    margin: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
   }
`;

export const SectionBody = styled.div`
    padding: 20px;
`;

