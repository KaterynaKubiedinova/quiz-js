import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#476075',
      contrastText: '#cbdbe9',
    },
    secondary: {
      main: '#65849e',
      contrastText: '#e8f1fc',
    },
    background: {
      default: '#57758c',
      paper: '#476075'
    },
    text: {
      primary: '#cbdbe9',
      secondary: '#0e0c0c',
      disabled: '#5a7294',
    },
  },
  typography: {
    fontFamily: [
      'Droid Sans',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5278e6',
      light: '#002ea7',
      contrastText: '#002ea7'
    },
    secondary: {
      main: '#c6d0f6',
      contrastText: '#002ea7'
    },
    text: {
      primary: '#2560e1',
      secondary: '#191514',
      disabled: '#0157C0',
    },
    background: {
      default: '#a0b1f1',
      paper: '#a0b1f1'
    },
  },
  typography: {
    fontFamily: [
      'Droid Sans',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

