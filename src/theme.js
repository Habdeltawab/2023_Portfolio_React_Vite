import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f06000',
    },
    secondary: {
      main: '#11abb0',
    },
    info: {
      main: '#ffffff',
    },
  },
  typography: [
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
  // h1: {
  //   [theme.breakpoints.down(1600)]: {
  //     fontSize: '9.4rem',
  //   },
  //   [theme.breakpoints.down(1400)]: {
  //     fontSize: '8.8rem',
  //   },
  //   // Add other breakpoints here...
  // },
});

export default theme;
