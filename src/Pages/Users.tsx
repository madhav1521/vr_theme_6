import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { error, info, upload_icon, valid, warn } from "../Assets/Images/image";
import BasicTabs from "../Components/BasicTabs";
const currencies = [
  {
    value: 'USD',
    label: 'dollar',
  },
  {
    value: 'EUR',
    label: 'Euro',
  },
  {
    value: 'BTC',
    label: 'Bitcoin',
  },
  {
    value: 'Ruppee',
    label: 'Ruppee',
  },
];
export default function Users() {
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = React.useState(false);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleMouseDownPassword1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [showPassword2, setShowPassword2] = React.useState(false);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // const navigate = useNavigate();
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  return (
    <>
      <Box className="main-container">
        <Header />
        <Box className="dash-content">
          <Sidebar />
          <Box className="wrapper-content">
            <Grid container spacing={3}>
              {/* page-heading
              ------------------------------------------------------------------------------------------------------------------- */}
              <Grid item xs={12} >
                <Typography component="h3" variant='h4' className='page-title'>Users</Typography>
              </Grid>
              <Grid item xs={12} >
                <Card elevation={0} className="inner-content">
                  {/* One Column
                  ------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h3" variant='body1' className='inner-head'>One Column</Typography>

                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField label="Username" variant="standard" type="text" autoFocus className="" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="standard-select-currency-native"
                        select
                        label="Drop Down"
                        defaultValue="Euro"
                        SelectProps={{ native: true, }}
                        // helperText="Please select your currency"
                        variant="standard"
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={3}
                        defaultValue="Default Value"
                        variant="standard"
                        className="multiline-text"
                      />
                    </Grid>
                  </Grid>
                  {/* Two Column
                  ------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h3" variant='body1' className='inner-head'>Two Column</Typography>

                  <Grid container rowSpacing={4} columnSpacing={4}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Username" variant="standard" type="text" autoFocus className="" />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                      <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword1 ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword1}
                              >
                                {showPassword1 ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Name" variant="standard" type="text" className="" />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                      <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          className='error-text'
                          error
                          fullWidth
                          id="outlined-error-helper-text"
                          label="Designation"
                          defaultValue="Web Designer"
                          // helperText="Enter Valid data"
                          variant="standard"
                          autoComplete="email"
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Three Column
                  ------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h3" variant='body1' className='inner-head'>Three Column</Typography>

                  <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                      <TextField label="Focus" variant="standard" type="text" autoFocus className="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        disabled
                        label="Disabled"
                        defaultValue="John Doe"
                        variant="standard"
                        className="disable-text"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="standard-select-currency-native"
                        select
                        label="Drop Down"
                        defaultValue="Euro"
                        SelectProps={{ native: true, }}
                        // helperText="Please select your currency"
                        variant="standard"
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>

                  {/* Fourth Column
                  ------------------------------------------------------------------------------------------------------------------- */}

                  <Typography component="h3" variant='body1' className='inner-head'>Four Column</Typography>

                  <Grid container rowSpacing={4} columnSpacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField label="Username" variant="standard" type="text" autoFocus className="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword2 ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword2}
                              // edge='end'
                              >
                                {showPassword2 ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        id="standard-select-currency-native"
                        select
                        label="Drop Down"
                        defaultValue="Euro"
                        SelectProps={{ native: true, }}
                        // helperText="Please select your currency"
                        variant="standard"
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          className='error-text'
                          error
                          fullWidth
                          id="outlined-error-helper-text"
                          label="Designation"
                          defaultValue="Web Designer"
                          // helperText="Enter Valid data"
                          variant="standard"
                          autoComplete="email"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  {/* Design elements starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h4" variant="h5" className="inner-heading">
                    Other Design Elements
                  </Typography>
                  <Typography component="h4" variant="h6" className="card-head inner-head file-upload">
                    File Upload
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={2} className="upload-content">
                    <Button variant="outlined" component="label" className="upload-btn" >
                      <img src={upload_icon} alt="upload files" /> &nbsp; Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <Typography component="h4" variant="h6" className=" nis">
                      No item Selected
                    </Typography>
                  </Stack>
                  <Typography component="h4" variant="h5" className="card-head inner-head option-head" marginTop="31px">
                    Check Box
                  </Typography>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox color="primary" />
                      }
                      checked
                      label="&nbsp;Selected"
                    />&nbsp;&nbsp;&nbsp;
                    <FormControlLabel
                      control={
                        <Checkbox color="primary" />
                      }
                      label="&nbsp;Not yet Selected"
                    />
                  </Grid>
                  <Typography component="h4" variant="h5" className="card-head inner-head option-head" marginTop="38px">
                    Radio Button
                  </Typography>

                  <Grid item xs={12} >
                    <FormControl className="radio-check" >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="female" checked control={<Radio />} label="&nbsp;Selected" />&nbsp;&nbsp;&nbsp;
                        <FormControlLabel value="male" control={<Radio />} label="&nbsp;Not yet Selected" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  {/* Snackbar starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h4" variant="h5" className="card-head inner-head" marginTop="31px">
                    Snackbar
                  </Typography>
                  <Grid container rowSpacing={3} columnSpacing={4} className="validation-notes">
                    <Grid item xs={12} sm={6}>
                      <Box className="text-message text-danger">
                        <img src={error} alt="" />
                        <Typography component="h6" variant="body2" className=' error-ic'>This is an error Message</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box className="text-message text-info">
                        <img src={info} alt="" />
                        <Typography component="h6" variant="body2" className=' info-ic'>This is an information message!</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box className="text-message text-warn">
                        <img src={warn} alt="" />
                        <Typography component="h6" variant="body2" className=' warn-ic'>This is a warning message!</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box className="text-message text-success">
                        <img src={valid} alt="" />
                        <Typography component="h6" variant="body2" className=' valid-ic'>This is an Success message!</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Typography component="h4" variant="h5" className="card-head inner-head">
                    CTA
                  </Typography>
                  <Box className="prim-sec">
                    <Button type="submit" disableElevation variant="contained" className="primary-btn" onClick={() => { navigate("/"); }} >
                      Primary
                    </Button>
                    <Button className="secondary-btn" variant="outlined" onClick={() => { navigate("/"); }} >
                      Secondary
                    </Button>
                  </Box>
                  {/* Tabs starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h4" variant="h5" className="card-head inner-head">
                    Tabs
                  </Typography>
                  <BasicTabs />



                </Card>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
