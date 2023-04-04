import { Box, Button, Link, Menu, MenuItem, MenuProps, SelectChangeEvent, Typography, styled } from '@mui/material'
import React from 'react'
import { brand_icon, colored_logo, dropdown_arrow, message, notification, profile, searchicon, toggle } from '../Assets/Images/image'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavigate } from 'react-router-dom';


const StyledMenu = styled((props: MenuProps) => (

  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
}));

export default function Header() {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [alignment, setAlignment] = React.useState<string | null>('left');
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [status, setStatus] = React.useState(true)
  const [search, setSearch] = React.useState(true)
  function togglebtn() {
    document.body.classList.toggle('setStatus')
    // searchbar();
  };
  function searchbar() {
    document.body.classList.toggle('setSearch')
  };

  return (
    <>
      <div className='overlaysearch' onClick={searchbar}></div>
      <div className='overlay' onClick={togglebtn}></div>
      <Box className="header">

        {/*   leftnav section
              --------------------------------------------------------------------------------------------------------------------------- */}
        <Box className="leftnav">
          <Button variant='outlined' className='toggle-btn' onClick={togglebtn} >
            <img src={toggle} alt="toggle-button" />
          </Button>
          <Link ><img src={brand_icon} alt="logo" className='cmp-icon' onClick={() => { navigate("/"); }} /></Link>
          <img src={colored_logo} alt="logo" className='cmp-logo' onClick={() => { navigate("/"); }} />
        </Box>

        {/*   rightnav section
              --------------------------------------------------------------------------------------------------------------------------- */}
        <Box className="rightnav">
          <Button className="search-btn" onClick={searchbar}>
            <img src={searchicon} alt="search-icon" />
          </Button>
          <div className="search-input">
            <input type="search" className="form-control" placeholder="Search" ></input>
          </div>
          <Button onClick={searchbar} className="btn-close-search"><CloseRoundedIcon color="primary" /></Button>

          <Button variant='outlined' className='chat-btn'>
            <img src={message} alt="chat-button" />
          </Button>
          <Button id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={handleClick}
            variant='outlined'
            className=' bell-btn'>
            <img src={notification} alt="notification-button" />
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="menu-list"
          >
            <MenuItem onClick={handleClose} disableRipple>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Help
            </MenuItem>

            <MenuItem onClick={() => { navigate('/'); }} disableRipple>
              Logout
            </MenuItem>
          </StyledMenu>

          {/*   menu profile
                --------------------------------------------------------------------------------------------------------------------------- */}
          <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            className="menu"
          >

            <img alt="" src={profile} className="profile-pic" />
            <Typography component="h5" variant="body1" className="profile-name">
              John Doe
            </Typography>
            <img src={dropdown_arrow} alt="arrow" className='profile-arrow' />

          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="menu-list"
          >
            
            <MenuItem onClick={handleClose} disableRipple>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Help
            </MenuItem>

            <MenuItem onClick={() => { navigate('/'); }} disableRipple>
              Logout
            </MenuItem>
          </StyledMenu>
        </Box>
      </Box>
    </>
  )
}
