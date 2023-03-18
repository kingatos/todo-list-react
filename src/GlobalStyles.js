import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
    
  *, ::after, ::before {
    box-sizing:inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin:auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.color.gallery};
    word-break: break-word;
    overflow-wrap: break-word;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }`
  ;
