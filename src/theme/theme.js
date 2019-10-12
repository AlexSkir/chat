import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e7f2ff', // light
      main: '#b4bff1',
      dark: '#838fbe',
      contrastText: '#292733'
    },
    secondary: {
      light: '#524f5c', // dark
      main: '#454153',
      dark: '#292733',
      contrastText: '#fce8c5'
    },
    golden: {
      light: '#ffffc5',
      main: '#fad694',
      dark: '#c6a565',
      contrastText: '#292733'
    },
    success: {
      light: '#e6ffe6',
      main: '#2ac92a',
      dark: '#288028',
    },
    fail: {
      light: '#fff7f5',
      main: '#f54922',
      dark: '#b53c21'
    }
  }
});

export default theme;
