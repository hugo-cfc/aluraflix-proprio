import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Routes from './Routes';

import GlobalStyle from './styles/Global';
import dark from './styles/theme/dark';

export const App: React.FC = () => {
  const theme: DefaultTheme = dark;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
