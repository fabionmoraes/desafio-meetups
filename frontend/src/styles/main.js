import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  a {
  text-decoration: none;
  transition-duration: 0.5s;
}

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: linear-gradient(0deg, #402845, #22202c);
    -webkit-font-smoothing: antialiased !important;
    font-family: Roboto, sans-serif;
    height: 100%;
    font-size: 14px;
  }

  button, input {
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
