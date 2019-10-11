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
    }
  }
});

export default theme;
