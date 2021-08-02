import React from "react";
import Routes from "./Routes";

import GlobalStyle from "./styles/Global";
import { ThemeProvider } from "styled-components";
import dark from "./theme/dark";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
