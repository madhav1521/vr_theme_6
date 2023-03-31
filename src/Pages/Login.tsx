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
          <Container maxWidth="xl" className="container">

            <Grid container maxWidth="lg" className="left-grid">
              <Grid item xs={12}>
                {/* <Box className="cmp-heading"> */}
                <img src={brand_logo} alt="logo" className="logo" />
                {/* </Box> */}
              </Grid>
              <Grid item xs={12} md={12}>
                <Box className="leftlogin">
                  {/* <img src={brand_logo} alt="logo" className="logo" /> */}
                  <img src={hero_image} alt="hero-image" className="hero-image" />
                  {/* <Typography
                  component="h6"
                  variant="body1"
                  className="copyright"
                >
                  © 2021 Company. All Rights Reserved.
                </Typography> */}
                </Box>
              </Grid>
              {/* <Box className="footer"> */}
              <Grid item xs={12} md={12}>
                <Typography variant="body1" component="h6" className="copy-left copyright">
                  © 2021 Company. All Rights Reserved.
                </Typography>
                </Grid>
                {/* <Typography variant="body1" component="h6" className="copy-left copyright">
                  Privacy Policy        Terms and Condition        Help
                </Typography> */}
              {/* </Box> */}



              {/* <Grid item xs={12} md={5} alignItems="center" display="flex" >
              <Box className="login-right">
                <Typography variant="h4" component="h2" className="login-heading">
                  Welcome Back!
                </Typography>
                <Typography variant="h5" component="h3" className="subheading">
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
            </Grid> 

             <Grid item xs={12}>
              <Box className="footer">
                <Typography variant="body1" component="h6" className="copy-right copyright">
                  © 2021 Company. All Rights Reserved.
                </Typography>
                <Typography variant="body1" component="h6" className="copy-left copyright">
                  Privacy Policy        Terms and Condition        Help
                </Typography>
              </Box>
            </Grid> */}
            </Grid>
          </Container>
          <Container maxWidth="lg" className="container2">
            <Grid container maxWidth="lg" className="right-grid">
            <Grid item xs={12}  justifyContent='center' alignItems="center" display="flex" >
              <Box className="login-right">
                <img src={colored_logo} alt="brand" className="colored-brand" />
                <Typography variant="h4" component="h2" className="login-heading">
                  Welcome Back!
                </Typography>
                <Typography variant="h5" component="h3" className="subheading">
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
            </Grid>
            <Grid item xs={12} >
            <Typography variant="body1" component="h6" className="copy-right copyright">
                  Privacy Policy        Terms and Condition        Help
                </Typography>
                </Grid>
                </Grid>
          </Container>

        </Box>

      </Box>
    </>
  );
}
