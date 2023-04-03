import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'

export default function Sales() {
  return (
    <>
      <Box className="main-container">
        <Header />
        <Box className="dash-content">
          <Sidebar />
          <Box className="wrapper-page"></Box>
        </Box>
      </Box>
    </>
  )
}
