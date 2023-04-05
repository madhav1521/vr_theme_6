import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  ImageList,
  ImageListItem,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Link,
  Input,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";
import { CheckBox, Visibility, VisibilityOff } from "@mui/icons-material";
import { brand_logo, colored_logo, hero_image } from "../Assets/Images/image";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      {/* <React.Fragment>
        <CssBaseline /> */}
      <Box className="login-container">
        <Box className="section">
          {/* <Container maxWidth="xl" className="container"> */}

          {/* <Grid container maxWidth="xl" > */}
          {/* <Grid item xs={12} md className="left-grid"> */}
          {/* <Box > */}
          <Box className="cmp-heading">
            <img src={brand_logo} alt="logo" className="logo" />
          </Box>
          {/* </Grid> */}
          {/* <Grid item xs={12} md > */}
          {/* <Box className="login-left"> */}
            <img src={hero_image} alt="hero-image" className="login-left" />
          {/* </Box> */}
          <Typography variant="body1" component="h6" className="copy-left ">
                  © 2021 Company. All Rights Reserved.
          </Typography>
        </Box>
        {/* </Grid> */}
        {/* <Box className="footer"> */}
        {/* <Grid item xs={12} md={12}>
                <Typography variant="body1" component="h6" className="copy-left copyright">
                  © 2021 Company. All Rights Reserved.
                </Typography>
                </Grid> */}
        {/* <Typography variant="body1" component="h6" className="copy-left copyright">
                  Privacy Policy        Terms and Condition        Help
                </Typography> */}
        {/* </Box> */}
        {/* </Grid> */}



        {/* <Grid item xs={12} md alignItems="center" justifyContent="end" display="flex" className="right-grid"> */}
        <Box className='aside' >
          <Box className="login-right">
            <img src={colored_logo} alt="brand" className="colored-brand" />
            <Typography variant="h1" component="h1" className="login-heading">
              Welcome Back!
            </Typography>
            <Typography variant="h5" component="h4" className="subheading">
              Login into your account
            </Typography>

            <Grid container rowSpacing={1} className="login-name">
              <Grid item xs={12} >
                <TextField label="Username" variant="standard" type="text" autoFocus />
              </Grid>
              <Grid item xs={12} marginBottom="29px">
                <FormControl variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Box className="check-line">
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
              />
              <Link href="#" className="fp">
                Forgot Password?
              </Link>
            </Box>
            <Button
              fullWidth
              type="submit"
              disableElevation
              variant="contained"
              className="login-btn"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Login
            </Button>

            <Typography variant="body1" component="h6" className="reg-here">
              Don’t have an account? <Link href="#" className="sign-up">Sign up</Link>
            </Typography>

          </Box>
          <Box className="copy-right ">
            <Link href="#" className="privacy">Privacy Policy</Link>
            <Link href="#" className="tnc">Terms and Condition</Link>
            <Link href="#" className="help">Help</Link>
          </Box>
          <Typography variant="body1" component="h6" className="copy-left-right ">
            © 2021 Company. All Rights Reserved.
          </Typography>
        </Box>
        {/* </Grid>  */}

        {/* <Grid item xs={12}> */}
        {/* <Box className="footer"> */}
          
        {/* </Box> */}
        {/* </Grid> */}
        {/* </Grid> */}
        {/* </Container> */}

        {/* </Box> */}

      </Box>
    </>
  );
}
