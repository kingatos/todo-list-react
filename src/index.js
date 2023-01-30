import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
