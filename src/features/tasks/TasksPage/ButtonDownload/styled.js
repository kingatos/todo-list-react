import styled from "styled-components";

export const StyledButtonDownload = styled.button`
    font-size: 15px;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    background-color: transparent;
    transition: color 0.5s;
    margin: 0 0 0 20px;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: not-allowed;
    }
`;