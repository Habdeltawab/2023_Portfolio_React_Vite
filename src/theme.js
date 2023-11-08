import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#f06000',
      light: '#ff7b24',
      lighter: '#ff9a57',
      dark: '#bd4b00',
      darker: '#8a3700',
    },
    secondary: {
      main: '#11abb0',
      light: '#16d8df',
      lighter: '#3ce6ec',
      dark: '#0d7e82',
      darker: '#085154',
    },
    info: {
      main: '#ffffff',
    },
    darkBackground: {
      main: '#282828',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
