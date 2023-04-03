import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Box, Button, Card, Grid, Link, Menu, MenuItem, MenuProps, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, paperClasses, styled } from '@mui/material'
import { coin, dots, graph, key, map, pic_1, pic_2, pic_3, pic_4, product, wallet } from '../Assets/Images/image'
import { useNavigate } from 'react-router-dom';
import Slider from '@mui/material/Slider';

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

export default function Dashboard() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                <Typography component="h3" variant='h4' className='page-title'>Dashboard</Typography>
              </Grid>
              {/* card
              ------------------------------------------------------------------------------------------------------------------- */}
              <Grid item xs={12} sm={6} md={3} >
                <Card className='sticker chart-card' elevation={0}>
                  <Box className="left-card">
                    <Typography component="h6" variant="h5" className='nums'>6387 </Typography>
                    <Typography component="h6" variant="body1" className="stats">Property Sold</Typography>
                  </Box>
                  <Box className='right-card' >
                    <img src={product} alt="product-chart" />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} >
                <Card className='sticker wallet-card' elevation={0}>
                  <Box className="left-card">
                    <Typography component="h6" variant="h5" className='nums'>$9,712 </Typography>
                    <Typography component="h6" variant="body1" className="stats">Income</Typography>
                  </Box>
                  <Box className='right-card' >
                    <img src={wallet} alt="wallet" />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} >
                <Card className='sticker stack-card' elevation={0}>
                  <Box className="left-card">
                    <Typography component="h6" variant="h5" className='nums'>965 </Typography>
                    <Typography component="h6" variant="body1" className="stats">Expense</Typography>
                  </Box>
                  <Box className='right-card' >
                    <img src={coin} alt="coins" />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3} >
                <Card className='sticker key-card' elevation={0}>
                  <Box className="left-card">
                    <Typography component="h6" variant="h5" className='nums'>$8,723 </Typography>
                    <Typography component="h6" variant="body1" className="stats">Property Rented</Typography>
                  </Box>
                  <Box className='right-card' >
                    <img src={key} alt="key" />
                  </Box>
                </Card>
              </Grid>
              {/* graph
              ------------------------------------------------------------------------------------------------------------------- */}
              <Grid item xs={12} lg={7} >
                <Card className='report-cards' elevation={0}>
                  <Box className="card-heading">
                    <Typography component="h6" variant="h5" className='card-head'>Weekly Report </Typography>
                    <Box className='weeks'>
                      <Typography component="h6" variant="body1" className="current">This week</Typography>
                      <Typography component="h6" variant="body1" className="past">last week</Typography>
                    </Box>
                  </Box>
                  <Box className='graph-content' >
                    <img src={graph} alt="report-graph" className='graph-img img-fluid' />
                  </Box>
                </Card>
              </Grid>
              {/* transaction
              ------------------------------------------------------------------------------------------------------------------- */}
              <Grid item xs={12} lg={5} >
                <Card className='report-cards' elevation={0}>
                  <Box className="card-heading">
                    <Typography component="h6" variant="h5" className='card-head'>Transaction </Typography>
                    <Button className="views"  >View more</Button>
                  </Box>
                  <Box className='profile-box' >
                    <Box className='profile-content' >
                      <Box className='left-profile' >
                        <img src={pic_1} alt="key" className='profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component="h6" variant="body2" className="names">Devon Lane</Typography>
                          <Typography component="h6" variant="body2" className="dates">March 23, 2013</Typography>
                        </Box>
                      </Box>
                      <Box className='right-profile' >
                        <Typography component="h6" variant="h5" className="earnings success">+ $600</Typography>
                      </Box>
                    </Box>
                    <Box className='profile-content' >
                      <Box className='left-profile' >
                        <img src={pic_2} alt="key" className='profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component="h6" variant="body2" className="names">Bessie Cooper</Typography>
                          <Typography component="h6" variant="body2" className="dates">May 31, 2015</Typography>
                        </Box>
                      </Box>
                      <Box className='right-profile' >
                        <Typography component="h6" variant="h5" className="earnings failure">- $400</Typography>
                      </Box>
                    </Box>
                    <Box className='profile-content' >
                      <Box className='left-profile' >
                        <img src={pic_3} alt="key" className='profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component="h6" variant="body2" className="names">Guy Hawkins</Typography>
                          <Typography component="h6" variant="body2" className="dates">October 31, 2017</Typography>
                        </Box>
                      </Box>
                      <Box className='right-profile' >
                        <Typography component="h6" variant="h5" className="earnings success">+ $200</Typography>
                      </Box>
                    </Box>
                    <Box className='profile-content' >
                      <Box className='left-profile' >
                        <img src={pic_4} alt="key" className='profile-image img-fluid' />
                        <Box className='profile-stats' >
                          <Typography component="h6" variant="body2" className="names">Kathryn Murphy</Typography>
                          <Typography component="h6" variant="body2" className="dates">December 2, 2018</Typography>
                        </Box>
                      </Box>
                      <Box className='right-profile' >
                        <Typography component="h6" variant="h5" className="earnings success">+ $450</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
              {/* table
              ------------------------------------------------------------------------------------------------------------------- */}
              <Grid item xs={12} lg={7} >
                <Card className='report-cards' elevation={0}>
                  <Box className="card-heading">
                    <Typography component="h6" variant="h5" className='card-head'>Table </Typography>
                    <Button  className="views">View more</Button>
                  </Box>
                  <Box className="table-responsive">
                    <Table className='table ' >
                      <thead>
                        <th>Sku</th>
                        <th>Name	</th>
                        <th>Email</th>
                        <th>Action</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>50364</td>
                          <td>Floyd Miles</td>
                          <td>tparisian@gmail.com</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Jane Cooper</td>
                          <td>altenwerth.ansel@sawayn.com</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Esther Howard</td>
                          <td>rebeka.jacobi@carroll.org</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Jane Cooper</td>
                          <td>jeramy.bogan@gmail.com</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Leslie Alexander</td>
                          <td>jeramy.bogan@gmail.com</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Jane Cooper</td>
                          <td>trantow.crystal@zulauf.com</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Robert Fox</td>
                          <td>magdalen39@langosh.com</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Jane Cooper</td>
                          <td>roman.russel@nikolaus.biz</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Jacob Jones</td>
                          <td>rebeka.jacobi@carroll.org</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                        <tr>
                          <td>50364</td>
                          <td>Jane Cooper</td>
                          <td>tevin44@gmail.com</td>
                          <td>
                            <Button id="demo-customized-button"
                              aria-controls={open ? 'demo-customized-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              className="dots"><img src={dots} alt="dots" className='dots-menu' /></Button>
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
                                Edit Email
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                Referance number
                              </MenuItem>
                            </StyledMenu>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Box>
                </Card>
              </Grid>
              {/* map
              ------------------------------------------------------------------------------------------------------------------- */}
              <Grid item xs={12} lg={5} >
                <Card className='report-cards' elevation={0}>
                  <Box className="card-heading">
                    <Typography component="h6" variant="h5" className='card-head'>Sales by Locations </Typography>
                    <Button className="views" >View more</Button>
                  </Box>
                  <Box className='map-img' >
                    <img src={map} alt="map" className='img-fluid' />
                  </Box>
                  <Box className='map-stats' >
                    <Box className='country-stats' >
                      <Typography component="h6" variant="body1" className='country'>USA </Typography>
                      <Typography component="h6" variant="body1" className='country'>75% </Typography>
                    </Box>
                    <Box marginBottom="24px">
                      <Slider defaultValue={75} aria-label="Large" valueLabelDisplay="auto"  />
                    </Box>
                    <Box className='country-stats' >
                      <Typography component="h6" variant="body1" className='country'>India </Typography>
                      <Typography component="h6" variant="body1" className='country'>86% </Typography>
                    </Box>
                    <Box marginBottom="24px">
                      <Slider defaultValue={86} aria-label="Large" valueLabelDisplay="auto"  />
                    </Box>
                    <Box className='country-stats' >
                      <Typography component="h6" variant="body1" className='country'>Russia </Typography>
                      <Typography component="h6" variant="body1" className='country'>62% </Typography>
                    </Box>
                    <Box >
                      <Slider defaultValue={62} aria-label="Large" valueLabelDisplay="auto"  />
                    </Box>
                  </Box>
                </Card>
              </Grid>


            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}
