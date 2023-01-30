import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

export const StyledBothButtons = styled.button`
    font-size: 15px;
    color: teal;
    border: none;
    background-color: transparent;
    transition: color 0.5s;
    margin: 0 0 0 20px;
    cursor: pointer;

    @media(max-width: 820px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(191, 54%, 45%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    ${({  disabled }) => disabled && css`
        color: #ccc;
        cursor: not-allowed;
    `}
`;
