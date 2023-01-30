import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 5px #ddd;
`;

export const StyledHeader = styled.h1`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    font-size: 20px;
    padding: 20px;
    margin: 0;
    border-bottom: 1px solid #ddd;

   @media(max-width: 820px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
   }
`;

export const SectionBody = styled.div`
    padding: 20px;
`;

