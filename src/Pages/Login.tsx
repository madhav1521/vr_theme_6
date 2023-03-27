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
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { brand_logo, hero_image } from "../Assets/Images/image";

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
      <React.Fragment>
        <CssBaseline />

        <Grid container className="login-container">
          <Grid item xs={12} md={6}>
            <Box className="leftlogin">
              <Box ><img src={brand_logo} alt="logo" className="logo" /></Box>
              <Box className="login-img" ><img src={hero_image} alt="hero-image" className="hero-image" /></Box>
              <Typography component="h6" variant="body1" className="copyright">
               © 2021 Company. All Rights Reserved. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="login-right">
            <Typography variant="h1" component="h2" className="login-heading">
              Welcome Back!
            </Typography>
            <Typography variant="h5" component="h3" className="subheading">
              Login into your account
            </Typography>

            <Grid container className="login-name">
              <Grid item xs={11} sm={10} marginBottom="26px">
                <TextField label="Username" type="text" autoFocus />
              </Grid>
              <Grid item xs={11} sm={10} marginBottom="30px">
                <FormControl variant="standard">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Box className="btn-line">
              <Button
                type="submit"
                disableElevation
                variant="contained"
                className="login-btn"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <Typography variant="body1" component="span" className="login">
                  Login
                </Typography>
              </Button>
              <Link href="#" className="fp">
                Forgot Password?
              </Link>
            </Box>

            <Typography variant="body1" component="h6" className="reg-here">
              Are you a new Member? <Link href="#">Register here</Link>
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
}
