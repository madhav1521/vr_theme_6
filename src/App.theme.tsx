import { createTheme } from '@mui/material';

const primary = "#59B997";
// const light = "#FFF3F4";
const primaryContrast = '#F6F6F6';
const secondary = '#4B4B4B';
const secondaryMain = '#424242';
const secondaryLight = '#9C9C9C';
const secondaryContrast = '#6D6D6D';
const grey = '#E9E9E9';
const greyLight = '#FAFAFA';
const greyDark = '#A5A5A5';
const white = "#FFFFFF";
const whiteLight = '#EAEAEA';
const black = '#000000';
const blue = "#E6F4FF";
const purple = "#F6EFFF";
const peach = "#FFF0E9";
const orange = "#FFE4E4";
const danger = '#FFFAFA';
const primaryHover = '#59b9972e';
const primaryHoverDark = '#338e6fe6';
const primaryLight = '#3EAE86';



export const mobileTheme = createTheme({
  palette: {
    primary: {
      main: primary,
      light:primaryLight,
    },
    // secondary: {
    //   main: danger,
    // },
  },
  typography: {
    fontFamily: [
      "Ubuntu",
      "sans-serif",
    ].join(','),
    h1: {
      fontSize: "48px",
      lineHeight: "56px",
      color: secondaryMain,
      fontWeight: "500",
      marginBottom: "12px",
      "@media (max-width:899px)": {
        fontSize: "39px",
        fontWeight: "500",
        lineHeight: "45px",
        marginBottom: "10px",
      },
    },
    h2: {
      fontSize: "36px",
      lineHeight: "42px",
      color: secondary,
      fontWeight: "400",
    },
    h3: {
      fontSize: "30px",
      lineHeight: "35px",
      color: secondary,
      fontWeight: "400",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "28px",
      color: secondary,
      fontWeight: "400",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "23px",
      color: secondary,
      fontWeight: "400",
      textTransform: "capitalize",
      "@media (max-width:899px)": {
        display:"flex",
        flexWrap:"wrap",
      },
    },
    h6: {
      fontSize: "18px",
      lineHeight: "21px",
      color: secondary,
      fontWeight: "300",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          // maxWidth:"1399px",
          width: "auto",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          color: secondaryLight,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.page-title":{
            width:"100%",
            paddingBottom:"24px"
          },
          "&.nis": {
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            color: greyDark,
            marginLeft: "19px",
          },
          "&.login-subheading": {
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "25px",
            color: secondaryMain,
            marginBottom: "17px",
            "@media (max-width:899px)": {
              fontWeight: "400",
              marginBottom: "20px",
            },
          },
          "&.reg-here": {
            textAlign: "center",
            color: secondaryMain,
          },
          "&.copyright-desktop": {
            fontSize: "15px",
            fontWeight: "400",
            color: white,
            whiteSpace:"nowrap",
            padding: "24px 24px 50px 70px",
          },
          "&.copyright-mobile": {
            display:"none",
            "@media (max-width:899px)": {
              display:"block",
              fontSize: "15px",
              fontWeight: "400",
              color: secondaryLight,
            },
          },
          "&.text-default": {
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            color: white,
            marginLeft: "10px",
          },
          "&.profile-name": {
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "20px",
            color: secondary,
            textTransform: "Capitalize",
            margin: "0 10px",
            "@media (max-width:899px)": {
              display: "none",
            },
          },
          "&.nums": {
            fontSize: "30px",
            fontWeight: "500",
            lineHeight: "35px",
            color: black,
            margin: "0 0 17px",
            "@media (max-width:1399px)": {
              fontSize: "26px",
              lineHeight: "32px",
              margin: "5px 0 5px",
            },
            "@media (max-width:899px)": {
              fontSize: "26px",
              lineHeight: "32px",
              margin: "0 0 17px",
            },
          },
          "&.stats": {
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            color: secondary,
            textTransform: "Capitalize",
          },
          "&.current, &.past": {
            position: "relative",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            color: secondary,
            whiteSpace: 'nowrap',
            marginLeft: "40px",
          },
          "&.names": {
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            color: secondary,
            whiteSpace: 'nowrap',
            paddingBottom: "5px",
            // "@media (max-width:1199px)":{
            //   paddingBottom:0,
            //   paddingRight:"20px",
            // },
            // "@media (max-width:599px)":{
            //   paddingBottom:"5px",
            //   paddingRight:"0px",
            // },
          },
          "&.dates": {
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "15px",
            color: secondaryLight,
            whiteSpace: 'nowrap',
          },
          "&.success": {
            color: "#6CCD87",
          },
          "&.failure": {
            color: "#FF3232",
          },
          "&.tab-text":{
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "20px",
            color: secondary,
            "@media (max-width:599px)":{
              fontSize: "13px",
              lineHeight: "16px",
            },
          },
          "&.text-message":{
            fontSize:"15px",
            fontWeight:"400",
            lineHeight:"18px",
            paddingLeft:"10px",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "10px",
          fontSize: "15px",
          fontWeight: "400",
          lineHeight: "18px",
          color: secondary,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiMenu-list': {
            padding: "10px",

          },
          ' .MuiPaper-root': {
            marginTop: "0",
            boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.05)",
            borderRadius: "10px",
            minWidth: "157px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
          transform: "all 0.4s ease",
          "&.sticker": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px 31px 31px 30px",
            borderRadius: "10px",
            "@media (max-width:1399px)": {
              flexDirection: "column-reverse",
              padding: "23px",
            },
            "@media (max-width:899px)": {
              flexDirection: "row",
              padding: "20px",
            },
            "@media (max-width:599px)": {
              padding: "16px",
            },
          },
          "&.chart-card": {
            backgroundColor: blue,
            border: "1px solid #C0E3FF",
          },
          "&.wallet-card": {
            backgroundColor: purple,
            border: "1px solid #E8D7FF",
          },
          "&.stack-card": {
            backgroundColor: peach,
            border: "1px solid #FFDDCD",
          },
          "&.key-card": {
            backgroundColor: orange,
            border: "1px solid #FFCACA",
          },
          "&.report-cards, &.user-content": {
            backgroundColor: white,
            border: "1px solid" + whiteLight,
            borderRadius: "10px",
            padding: "26px 30px 15px",
            "@media (max-width:899px)": {
              padding: "20px",
            },
            "@media (max-width:599px)": {
              padding: "16px",
            },
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          "&.forgot-password": {
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "20px",
            color: secondaryLight,
            textDecoration: "none",
          },
          "&.sign-up": {
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "20px",
            color: primary,
            textDecoration: "none",
            textTransform: "uppercase",
          },
          ".policy-links &.MuiLink-root": {
            fontSize: "15px",
            fontWeight: "400",
            color: secondaryLight,
            textDecoration:"none",
            // textTransform: "capitalize",
            "&:hover": {
              color: black,
            },
            "&:focus": {
              color: black,
            },
            "&:active": {
              color: black,
            },
          },
          ".policy-links &.tnc ": {
            margin:"0px 24px",
            textDecoration: "none",
             "@media (max-width:599px)": {
                margin:"0px 10px",
              },
          },
          "&:hover": {
            color: black,
          },
          "&:focus": {
            color: black,
          },
          "&:active": {
            color: black,
          },

        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.login-btn": {
            minHeight: "53px",
            color: white,
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "24px",
            textTransform: "uppercase",
            borderRadius: "10px",
            marginBottom: "30px",
          },
          ".header &.MuiButton-root:not(:last-child)": {
            padding: "11px 14px",
            border: "1px solid" + whiteLight,
            borderRadius: "10px",
            minWidth: "52px",
            height: "47px",
            "&:hover": {
              borderColor: primary,
            },
            "&:focus": {
              borderColor: primary,
            },
            "&:active": {
              borderColor: primary,
            },
            "@media (max-width:599px)": {
              padding:"9px 9px",
              minWidth:"40px",
              height:"40px",
            },
          },
          ".upload-content &.MuiButton-root": {
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "27px",
            color: secondaryContrast,
            textTransform: "lowercase",
            border: "1px solid transparent",
            backgroundColor: primaryContrast,
            borderRadius: "5px",
            // height: "39px",
            "&:hover": {
              borderColor: greyDark,
            },
            "&:focus": {
              borderColor: greyDark,
            },
            "&:active": {
              borderColor: greyDark,
            },
          },
          "&.chat-btn": {
            margin: "0 20px",
            "@media (max-width:1199px)": {
              margin: "0 10px",
            },
            "@media (max-width:599px)": {
              padding:"9px 9px",
              minWidth:"40px",
              height:"40px",
            },
          },
          "&.search-btn": {
            display: "none",
            "@media (max-width:899px)": {
              display: "flex",
              minWidth: "52px",
            },
            "@media (max-width:599px)": {
              padding:"9px 9px",
              minWidth:"40px",
              height:"40px",
            },
          },
          "&.dots": {
            backgroundColor: "transparent",
            padding: "0px",
            minWidth: "0",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: grey,
            },
            "&:focus": {
              backgroundColor: grey,
            },
            "&:active": {
              backgroundColor: grey,
            },
          },
          "&.menu": {
            backgroundColor: "transparent",
            height: "58px",
            margin: "0 30px",
            padding: "10px",
            position: "relative",
            borderRadius:"10px",
            "&:hover": {
              backgroundColor: primaryHover,
            },
            "&:focus": {
              backgroundColor: primaryHover,
            },
            "&:active": {
              backgroundColor: primaryHover,
            },
            "@media (max-width:1199px)": {
              margin: "0 10px 0 20px",
            },
            "@media (max-width:599px)": {
              margin: "0 10px",
              height: "47px",
              minWidth:"52px",
            },
          },
          "&.btn-close-search": {
            ".MuiSvgIcon-root": {
              width: "30px",
              height: "30px",
            },
          },
          "&.views": {
            textTransform: "Capitalize",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            color: "#3EAE86",
            "&:hover": {
              backgroundColor: grey,
            },
            "&:focus": {
              backgroundColor: grey,
            },
            "&:active": {
              backgroundColor: grey,
            },
          },
          "&.primary-btn": {
            textTransform: "uppercase",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "23px",
            color: white,
            padding: "15px 30px",
            borderRadius: "10px",
            backgroundColor: primary,
            height: "53px",
            "&:hover": {
              backgroundColor: primaryHoverDark,
            },
            "&:focus": {
              backgroundColor: primaryHoverDark,
            },
            "&:active": {
              backgroundColor: primaryHoverDark,
            },
            "@media (max-width:599px)": {
              padding: "12px 17px",
              fontWeight:"400",
              fontSize: "16px",
              height:"45px",
              // width: "170px",
            },
          },
          "&.secondary-btn": {
            textTransform: "uppercase",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "23px",
            color:primaryLight,
            padding: "15px 30px",
            borderRadius: "10px",
            border: "2px solid" + primary,
            backgroundColor: white,
            height: "53px",
            marginLeft: "20px",
            "&:hover": {
              backgroundColor: primaryHover,
            },
            "&:focus": {
              backgroundColor: primaryHover,
            },
            "&:active": {
              backgroundColor: primaryHover,
            },
            "@media (max-width:599px)": {
              padding: "12px 17px",
              fontWeight:"400",
              fontSize: "16px",
              height:"45px",
              marginLeft: "10px",
              // width: "170px",
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          maxWidth: "337px",
          height: '9px',
          // padding:"0px 0 24px 0",
          minWidth: "100%",
          color: "#3EAE86",
          borderRadius: "10px",
        },
        thumb: {
          width: 0,
        }
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          opacity: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color:secondaryLight,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          height: "34px",
          color: secondary,
          "&:before": {
            borderBottom: "1px solid" + grey,
          },
          "&:hover": {
            // borderBottom:"1px solid"+grey,
            "&:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "1px solid" + grey,
            },
          },
          ".MuiSvgIcon-root": {
            width: "17px",
            height: "17px",
          },
          ".multiline-text &.MuiInput-root": {
            height: "90px",
          },
          "&.Mui-disabled":{
            "&:before":{
              borderBottom: "1px dashed" + grey,
            },
        },
          "&.Mui-error":{
            "&:after":{
              borderBottom: "1px dashed #ff3232" ,
            },
        },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          lineHeight: "24px",
          color: secondaryLight,
          "&.Mui-focused": {
            color: secondaryLight,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            width: "14px",
            height: "14px",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            width: "14px",
            height: "14px",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: "9px",
        },
      },
    },
    MuiCollapse:{
      styleOverrides:{
        root:{
          // ".alert &.MuiCollapse-root":{
          //   display:"none",
          // },
          // overflow:"none",
          // visibility:"hidden",
        },
        hidden:{
          // overflow:"hidden",
          // ".alert &.MuiCollapse-hidden":{
          //   display:"none",
          // },
        },
        wrapper:{
          // ".alert &.MuiCollapse-hidden &.MuiCollapse-wrapper":{
          //   display:"none",
          // },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        icon: {
          display: "none",
        },
        action:{
          margin:0,
        },
        root:{
          padding: "6px",
          // minHeight: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between",
          background:"transparent",
          "&.text-danger":{
            color:"#FF3535",
            backgroundColor:"#FFFAFA",
            borderRadius: "5px", 
            border: "1px solid #FF3535",
            // height:"45px",
          },
          "&.text-info":{
            color:"#37DBFF",
            backgroundColor:"#F3FDFF",
            borderRadius: "5px", 
            border: "1px solid #37DBFF",
            // height:"45px",
          },
          "&.text-warn":{
            color:"#FFC737",
            backgroundColor:"#FFFCF5",
            borderRadius: "5px", 
            border: "1px solid #FFC737",
            // height:"45px",
          },
          "&.text-success":{
            color:"#65FF87",
            backgroundColor:"#F5FFF8",
            borderRadius: "5px", 
            border: "1px solid #65FF87",
            // height:"45px",
          },
        },
        message:{
          alignItems:"center",
          display:"flex",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexWrap: "wrap",
          "&.MuiTabs-indicator": {
            height: "3px",
            marginBottom: "-1px",
            bottom: "3px",
            zIndex: 10,
          },
        },
        root: {
          minHeight: "15px",
          '&.inner-tabs': {
            marginBottom:"25px",
            '.MuiTabs-flexContainer': {
              borderBottom: '1px solid' + grey,
              // overflowX: "auto",
              flexWrap:"nowrap",
            },
          },
        },
        indicator: {
          height: "3px",
          marginBottom: "-1px",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: "15px",
          fontSize: "18px",
          fontWeight: "300",
          color: secondaryLight,
          padding: "5px",
          textTransform: "capitalize",
          minWidth: "max-content",
          marginLeft: "20px",
          "&:hover": {
            color: black,
            backgroundColor: grey,
          },
          "&:focus": {
            color: primary,
          },
          "&:active": {
            color: black,
            backgroundColor: grey,
          },
          "&.tabs": {
            fontSize: "18px",
            fontWeight: "300",
            color: secondaryLight,
            padding: "5px",
            borderRadius: "5px",
            textTransform: "capitalize",
            minWidth: "max-content",
            marginRight: "19px",
            marginLeft: 0,
            "&:hover": {
              backgroundColor: primaryHover,
            },
            "&:focus": {
              color: primary,
              fontWeight: "500",
            },
            "&:active": {
              fontWeight: "500",
            },
            "@media (max-width:599px)":{
              marginRight:"14px",
            },
          },
          "&.tabs.Mui-selected": {
            color: primary,
            fontWeight: "500",
          },
        },
      },
    },
  },
});