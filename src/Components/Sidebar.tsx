import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { dashboard, maintenance, offers, sales, setting, users } from '../Assets/Images/image'

export default function Sidebar() {
  return (
    <>
    <Box className="sidebar">
      <NavLink to={'/dashboard'} className="sidelinks" title="Dashboard">
        <img src={dashboard} alt="Dashboard image" className="default" />
        <Typography className="text-default">Dashboard</Typography>
      </NavLink>
      <NavLink to={'/users'} className="sidelinks" title="Users">
        <img src={users} alt="Users image" className="default" />
        <Typography className="text-default">Users</Typography>
      </NavLink>
      <NavLink to={'/maintenance'} className="sidelinks" title="Maintenance">
        <img src={maintenance} alt="Maintenance image" className="default" />
        <Typography className="text-default">Maintenance</Typography>
      </NavLink>
      <NavLink to={'/offer'} className="sidelinks" title="Offers">
        <img src={offers} alt="Offers image" className="default" />
        <Typography className="text-default">Offers</Typography>
      </NavLink>
      <NavLink to={'/sales'} className="sidelinks" title="Sales">
        <img src={sales} alt="Sales image" className="default" />
        <Typography className="text-default">Sales</Typography>
      </NavLink>
      <NavLink to={'/setting'} className="sidelinks" title="Setting">
        <img src={setting} alt="Setting image" className="default" />
        <Typography className="text-default">Setting</Typography>
      </NavLink>
      </Box>
    </>
  )
}
