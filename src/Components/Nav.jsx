import { AppBar, Button, Grid, Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material'
import React from 'react'
import '../Styles/Components/Nav.css'
import { Link, NavLink } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';

function Nav() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const isLargerThan700px = useMediaQuery('(min-width:700px)');

  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <Toolbar> */}
        <AppBar sx={{ backgroundColor: 'rgb(255, 255, 255,0.3)' }}>

          {isLargerThan700px && <Grid container sx={{ marginBottom: '-27.5px' }}>
            <Grid item xs={12} sx={{ marginRight: "20px" }} textAlign='right'>
              <Link to='/login'>
                <Button variant='outlined' sx={{ marginRight: "5px", padding: "2px 6px" }}>
                  <Typography variant='body2'>
                    Sign in
                  </Typography>
                </Button>
              </Link>

              <Link to='/addHotel'>
                <Button variant='outlined' sx={{ padding: "2px 6px" }}>
                  <Typography variant='body2'>
                    Sign up
                  </Typography>
                </Button>
              </Link>

            </Grid>
          </Grid>}

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
            <Grid item xs={8} textAlign='right'></Grid>
          </Grid>
          {/* <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid> */}
          {/* </Grid> */}
          {/* </Toolbar> */}

        </AppBar>

        {!isLargerThan700px && <Grid container position='fixed' sx={{ marginBottom: '-70px', marginTop: '5px', zIndex: 100 }}>
          <Grid item xs={12} sx={{ marginRight: "20px" }} textAlign='right'>
            <br /><br />
            <Link to='/login'>
              <Button variant='contained' sx={{ marginRight: "5px", padding: "2px 6px" }}>
                <Typography variant='body2' sx={{ fontSize: '0.75rem !important' }}>
                  Sign in
                </Typography>
              </Button>
            </Link>

            <Link to='/addHotel'>
              <Button variant='contained' sx={{ padding: "2px 6px" }}>
                <Typography variant='body2' sx={{ fontSize: '0.75rem !important' }}>
                  Sign up
                </Typography>
              </Button>
            </Link>

          </Grid>
        </Grid>}

      </ThemeProvider>
    </div>
  )
}

export default Nav