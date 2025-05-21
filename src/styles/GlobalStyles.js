// /styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f9fbfd;
    color: #1d1d1f;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    padding: 12px;
  }

  th {
    color: #7a7a7a;
    font-size: 14px;
  }

  td {
    font-size: 15px;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #4a90e2;
  }
`;

export default GlobalStyles;
