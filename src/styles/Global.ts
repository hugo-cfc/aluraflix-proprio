import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme.colors.blackDark};
    color: ${(props) => props.theme.colors.graylight}
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
