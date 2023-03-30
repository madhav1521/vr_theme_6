import { createTheme } from '@mui/material';

const secondary = '#4B4B4B';
const secondaryMain = '#424242';
const secondaryLight = '#9C9C9C';
const grey = '#E9E9E9';
const primary = "#59B997";
const primaryLight = "#FFF3F4";
const black = '#000000';
const white = "#FFFFFF";

export const mobileTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
  typography: {
    fontFamily: [
      "Ubuntu",
      "sans-serif",
    ].join(','),
  },
  components: {
    MuiContainer:{
      styleOverrides:{
        root:{
          // maxWidth:"1399px",
          width:"auto",
          alignItems:"center",
          justifyContent:"center",
          display:"flex",
          color:secondaryLight,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          
          "&.login-heading":{
            fontSize:"48px",
            fontWeight:"500",
            lineHeight:"56px",
            color:secondaryMain,
            marginBottom:"12px",
          },
          "&.subheading":{
            fontSize:"20px",
            fontWeight:"500",
            lineHeight:"25px",
            color:secondaryMain,
            marginBottom:"17px",
          },
          "&.reg-here":{
            textAlign:"center",
            color:secondaryMain,
          },
          "&.copy-right":{
            fontSize:"15px",
            fontWeight:"400",
            color:white,
          },
          "&.copy-left":{
            fontSize:"15px",
            fontWeight:"400",
            color:secondaryLight,
          },
        },
      },
    },
    MuiLink:{
      styleOverrides:{
        root:{
          "&.hover": {
            color:black,
          },
          "&.focus": {
            color:black,
          },
          "&.active": {
            color:black,
          },
          "&.fp":{
            fontSize:"15px",
            fontWeight:"400",
            lineHeight:"20px",
            color:secondaryLight,
            textDecoration:"none",
          },
          "&.sign-up":{
            fontSize:"15px",
            fontWeight:"700",
            lineHeight:"20px",
            color:primary,
            textDecoration:"none",
            textTransform:"uppercase",
          },
        },
      },
    },
    MuiButton:{
      styleOverrides:{
        root:{
          "&.login-btn":{
          minHeight:"53px",
          color:white,
          fontSize:"20px",
          fontWeight:"500",
          lineHeight:"24px",
          textTransform:"uppercase",
          borderRadius:"10px",
          marginBottom:"30px",
          },
        },
      },
    },
    MuiFormControl:{
      styleOverrides:{
        root:{
          width:"100%",
        },
      },
    },
    MuiInput:{
      styleOverrides:{
        root:{
          height:"34px",
          color:secondary,
          "&:before":{
            borderBottom:"1px solid"+grey,
          },
          "&:hover":{
          // borderBottom:"1px solid"+grey,
            "&:not(.Mui-disabled, .Mui-error):before":{
              borderBottom:"1px solid"+grey,
            },
          },
          ".MuiSvgIcon-root":{
            width:"17px",
            height:"17px",
        }
        },
      },
    },
    MuiInputLabel:{
      styleOverrides:{
        root:{
          lineHeight:"24px",
          color:secondaryLight,
          "&.Mui-focused": {
            color:secondaryLight,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root":{
            width:"14px",
            height:"14px",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight:"9px",
        },
      },
    },
    
},
});