import { Box } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default function Setting() {
  return (
    <>
      <Box className="main-container">
        <Header />
        <Box className="wrapper-page">
          <Sidebar />
          <Box className="dash-content"></Box>
        </Box>
      </Box>
    </>
  )
}
