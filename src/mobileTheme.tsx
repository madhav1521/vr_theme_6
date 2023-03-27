import { createTheme } from '@mui/material';

const secondaryMain = '#ADADAD';
const secondaryLight = '#3E3E3E';
const secondaryDark = '#000000';
const primaryMain = "#59B997";
const primaryLight = "#FFF3F4";
const white = "#FFFFFF";

export const mobileTheme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
  },
  typography: {
    fontFamily: [
      "Ubuntu",
      "sans-serif",
    ].join(','),

  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.copyright":{
            fontSize:"15px",
            fontWeight:"400",
            color:white,
            position:"absolute",
            bottom:"5px",
            left:"5px",
          },
        },
      },
    },
},
});