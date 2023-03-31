import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Box, Grid, Paper, Typography, paperClasses } from '@mui/material'

export default function Dashboard() {
  return (
    <>
      <Box className="main-container">
        <Header />
        <Box className="dash-content">
          <Sidebar />
          <Box className="wrapper-page">
              <Grid container spacing={3}>
                <Grid item xs={12} >
                  <Typography component="h3" variant='h4' className='page-title'>Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} component={Paper}>
                  <Typography component="h3" variant='h4' className='page-title'>Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} component={Paper}>
                  <Typography component="h3" variant='h4' className='page-title'>Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} component={Paper}>
                  <Typography component="h3" variant='h4' className='page-title'>Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} component={Paper}>
                  <Typography component="h3" variant='h4' className='page-title'>Dashboard</Typography>
                </Grid>
              </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}
