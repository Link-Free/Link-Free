import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/Global';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import defaultStyles from './styles/theme/default';

import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <StyledThemeProvider theme={defaultStyles}>
      <GlobalStyle />
      <App />
    </StyledThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
