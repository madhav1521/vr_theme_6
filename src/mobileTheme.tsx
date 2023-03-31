import { createTheme } from '@mui/material';

const secondary = '#4B4B4B';
const secondaryMain = '#424242';
const secondaryLight = '#9C9C9C';
const grey = '#E9E9E9';
const whiteLight = '#EAEAEA';
const greyLight = '#FAFAFA';
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
            "@media (max-width:599px)":{
              fontSize:"38px",
            fontWeight:"500",
            lineHeight:"42px",
            }
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
          "&.copy-left":{
            position:"absolute",
            bottom:"0px",
            left:"0",
            fontSize:"15px",
            fontWeight:"400",
            color:white,
          },
          "&.copy-right":{
            fontSize:"15px",
            fontWeight:"400",
            color:secondaryLight,
            position:"absolute",
            bottom:"0px",
            right:"0px",
          },
          "&.text-default":{
            fontSize:"15px",
            fontWeight:"400",
            lineHeight:"18px",
            color:white,
            marginLeft:"10px",
          },
          "&.profile-name":{
            fontSize:"16px",
            fontWeight:"400",
            lineHeight:"20px",
            color:secondary,
            textTransform:"Capitalize",
            margin:"0 10px",
            "@media (max-width:899px)":{
              display:"none",
            },
          },
        },
      },
    },
    MuiLink:{
      styleOverrides:{
        root:{
          "&:hover": {
            color:black,
          },
          "&:focus": {
            color:black,
          },
          "&:active": {
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
          "&.toggle-btn, &.bell-btn":{
            padding:"11px 14px",
            border:"1px solid" + whiteLight,
            borderRadius:"10px",
            minWidth:"52px",
            height:"47px",
            "&:hover": {
              borderColor:primary,
            },
            "&:focus": {
              borderColor:primary,
            },
            "&:active": {
              borderColor:primary,
            },
            
          },
          "&.chat-btn":{
            padding:"11px 14px",
            border:"1px solid" + whiteLight,
            borderRadius:"10px",
            minWidth:"52px",
            margin:"0 20px",
            "&:hover": {
              borderColor:primary,
            },
            "&:focus": {
              borderColor:primary,
            },
            "&:active": {
              borderColor:primary,
            },
            "@media (max-width:1199px)":{
              margin:"0 10px",
            },
          },
          "&.search-btn":{
            display:"none",
            "@media (max-width:899px)":{
              display:"flex",
              padding:"13.5px 16px",
              border:"1px solid" + whiteLight,
              borderRadius:"10px",
              minWidth:"52px",
              "&:hover": {
                borderColor:primary,
              },
              "&:focus": {
                borderColor:primary,
              },
              "&:active": {
                borderColor:primary,
              },

            },
          },
          "&.menu":{
            backgroundColor:"transparent",
            height:"58px",
            margin:"0 30px",
            padding:"10px",
            position:"relative",
            "&:hover": {
              backgroundColor:grey,
            },
            "&:focus": {
              backgroundColor:grey,
            },
            "&:active": {
              backgroundColor:grey,
            },
            "@media (max-width:1199px)":{
              margin:"0 10px 0 20px",
            },
          },
          "&.btn-close-search":{
            ".MuiSvgIcon-root":{
              width:"30px",
              height:"30px",
            }
          }
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