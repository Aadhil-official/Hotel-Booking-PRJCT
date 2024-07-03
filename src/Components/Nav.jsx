import { Grid, Toolbar, Typography, createTheme, responsiveFontSizes } from '@mui/material'
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
          <Grid container>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className='nav'>
              <Typography variant="h6" component="div" >
                <NavLink to="/" className='cont'>Home</NavLink>
              </Typography>
              <Typography variant="h6" component="div" >
                <NavLink to="/bookroom" className='cont'>About</NavLink>
              </Typography>
              <Typography variant="h6" component="div" >
                <NavLink to="/" className='cont' >Contact</NavLink>
              </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
          </Grid>
        </Toolbar>
      </ThemeProvider>
    </div>
  )
}

export default Nav