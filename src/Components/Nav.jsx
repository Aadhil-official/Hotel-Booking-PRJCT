import { Avatar, Grid, Toolbar, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import '../Styles/Components/Nav.css'
import { NavLink } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';

function Nav() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Toolbar>
          <Grid container justifyContent='center' textAlign='center'>
            {/* <Grid item xs={3}></Grid> */}
            <Grid item xs={12} className='nav'>
              <Typography variant="h6" component="div" >
                <NavLink to="/" className='cont'>Home</NavLink>
              </Typography>
              <Grid item xs={1}></Grid>
              <Typography variant="h6" component="div" >
                <NavLink to="/bookroom" className='cont'>About</NavLink>
              </Typography>
              <Grid item xs={1}></Grid>
              <Typography variant="h6" component="div" >
                <NavLink to="/BrowseRooms" className='cont' >Contact</NavLink>
              </Typography>
              <Grid item sm={1} md={2.5}></Grid>
              <Typography variant="h6" component="div" >
                <Avatar className='avtr'></Avatar>
                <NavLink to="/" className='cont1' >Find my booking</NavLink>
              </Typography>
              <Grid item xs={0.5}></Grid>
              <Typography variant="h6" component="div" >
                <NavLink to="/" className='cont' >Account details</NavLink>
              </Typography>
            </Grid>
            {/* <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid> */}
          </Grid>
        </Toolbar>
      </ThemeProvider>
    </div>
  )
}

export default Nav