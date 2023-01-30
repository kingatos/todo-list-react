import styled from "styled-components";

export const StyledForm = styled.form`
    display:grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 820px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    
    @media(max-width: 320px) {
        width: 100%;
    }
`;

export const StyledButton = styled.button`
    padding: 10px;
    border-style: none;
    color:white;
    cursor: pointer;
    transition: 0.5s;
    background:hsl(180, 100%, 25%);

    &:hover {
        background: hsl(180, 100%, 30%);
        transform: scale(1.05);
    }

    &:active {
        background-color:hsl(180, 100%, 35%);
    }
`;