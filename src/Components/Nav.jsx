import { AppBar, Avatar, Grid, Toolbar, Typography, createTheme, responsiveFontSizes } from '@mui/material'
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
        {/* <Toolbar> */}
        <AppBar className='makeblur' sx={{ backgroundColor: 'rgb(255, 255, 255,0.4)' }}>
          <Grid container justifyContent='center' className='nav'>
            {/* <Grid item xs={3}></Grid> */}
            {/* <Grid item xs={1}> */}
            <Typography variant="body2" component="div" >
              <NavLink to="/" className='cont'>Home</NavLink>
            </Typography>
            {/* </Grid> */}
            <Grid item xs={1}></Grid>
            <Typography variant="body2" component="div" >
              <NavLink to="/bookroom" className='cont'>About</NavLink>
            </Typography>
            <Grid item xs={1}></Grid>
            <Typography variant="body2" component="div" >
              <NavLink to="/BrowseRooms" className='cont' >Contact</NavLink>
            </Typography>
            {/* <Grid item sm={1} md={2.5}></Grid> */}
            <Grid item xs={8}></Grid>

          </Grid>
          {/* <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid> */}
          {/* </Grid> */}
          {/* </Toolbar> */}
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default Nav