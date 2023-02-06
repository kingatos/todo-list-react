import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  margin:auto;
  padding: 30px;
  background-color:#cccccc41;
  word-break: break-word;
  overflow-wrap: break-word;
}

html {
  box-sizing: border-box;
}
  
*, ::after, ::before {
  box-sizing:inherit;
}
`