import styled, { css } from "styled-components";
import removeIcon from "../Tasks/wastebasket.png";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    text-decoration: none;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: flex;

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const Content = styled.span`
    margin: 0;
    margin-left: 10px;
    font-size: 14px;
    padding: 5px;
    flex-grow: 1;
    width: 100%;
    
    ${({ done }) => done && css`
    text-decoration: line-through;
    `}

`;

export const Button = styled.button`
    padding: 5px;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    color:white;
    background:rgb(13, 97, 33);
    transition: 0.5s;
`;

export const ToggleDoneButton = styled(Button)`
        background: hsl(120, 61%, 34%);
        
        &:hover {
            background-color: hsl(120, 61%, 39%);
        }
        &:active {
            background-color: hsl(120, 61%, 50%);
        }
`;

export const RemoveButton = styled(Button)`
         background-color: rgb(212, 11, 11);
         background-image: url("${removeIcon}");
         background-repeat: no-repeat;
         background-position: center;
         background-size: 17px;

        &:hover {
            background-color: hsl(348, 83%, 52%);
        }

        &:active {
            background-color: hsl(348, 83%, 52%);
        }
`;
