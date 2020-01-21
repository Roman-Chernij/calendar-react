import React from 'react';
import { ThemeProvider, createMuiTheme  } from '@material-ui/core/styles';

import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    button: {
      fontSize: "1.6rem"
    }
  }
});

const ThemeWrapper = props => {
  return (
    <ThemeProvider theme={theme}>
      { props.children }
    </ThemeProvider>
  )
};

export default ThemeWrapper
