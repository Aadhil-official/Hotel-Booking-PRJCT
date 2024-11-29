import { AppBar, Avatar, Button, Grid, Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material'
import React from 'react'
import '../Styles/Components/Nav.css'
import { Link, NavLink } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import Hotelmain from '../assets/pexels-pixabay-258154.jpg'

function Nav() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const isLargerThan700px = useMediaQuery('(min-width:880px)');

  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <Toolbar> */}
        <AppBar sx={{ backgroundColor: 'rgba(4, 84, 132, 0.3)' }}>

          {isLargerThan700px &&
            <>
              <Grid container sx={{ marginBottom: '-27.5px' }}>
                <Grid item xs={12} className='logoComp'>
                  <Typography variant='body2'>
                    <span className='inlogocamp'>The Hotel Manager</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginRight: "20px" }} textAlign='right'>
                  <Link to='/login'>
                    <Button variant='contained' size='medium' sx={{
                      backgroundColor: "#54ACAC", // Set the background color
                      borderRadius: "0",
                      marginRight: "5px",
                      '&:hover': {
                        backgroundColor: "#459B9B" // Set hover effect color
                      }
                    }}>
                      <Typography variant='body2' sx={{ color: "#482E21" }}>
                        Sign in
                      </Typography>
                    </Button>
                  </Link>

                  {/* <Link to='/role'>
                <Button variant='outlined' sx={{ padding: "2px 6px" }}>
                  <Typography variant='body2'>
                    Sign up
                  </Typography>
                </Button>
              </Link> */}
                </Grid>
              </Grid>

              <Grid container justifyContent='right' className='nav'>
                {/* <Grid item xs={3}></Grid> */}
                <Grid item xs={1.5} lg={1} xl={1} md={1} sm={1} justifyContent="center">
                  <Typography variant="body2" component="div" >
                    <NavLink to="/" className='cont'>Home</NavLink>
                  </Typography>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item lg={1.2} xl={1.2} md={1.2} sm={1.5} xs={2} justifyContent="center">
                  <Typography variant="body2" component="div" >
                    <NavLink to="/bookroom" className='cont'>About Us</NavLink>
                  </Typography>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item lg={1.2} xl={1.2} md={1.2} sm={1.8} xs={2.3} justifyContent="center">
                  <Typography variant="body2" component="div" >
                    <NavLink to="/BrowseRooms" className='cont' >Contact us</NavLink>
                  </Typography>
                </Grid>
                <Grid item xs={1} lg={1} xl={1} md={1} sm={1} justifyContent="center">
                  <Typography variant="body2" component="div" >
                    <NavLink to="/BrowseRooms" className='cont' >Help</NavLink>
                  </Typography>
                </Grid>
                {/* <Grid item sm={1} md={2.5}></Grid> */}
                {/* <Grid item xs={8} textAlign='right'></Grid> */}
              </Grid>
              {/* <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid> */}
              {/* </Grid> */}
              {/* </Toolbar> */}

            </>
          }

          {/* <Grid container justifyContent='left' textAlign='left' position="absolute">
            
          </Grid> */}

        </AppBar>

        {!isLargerThan700px &&
          <>
            <Grid container position='fixed' sx={{ marginBottom: '-70px', marginTop: '5px', zIndex: 100 }}>
              <Grid item xs={12} sx={{ marginRight: "20px" }} textAlign='right'>
                <br /><br />
                <Link to='/login'>
                  <Button variant='contained' size='medium' sx={{
                    backgroundColor: "#54ACAC", // Set the background color
                    // borderRadius: "0",
                    marginRight: "5px",
                    marginTop: "10px",
                    '&:hover': {
                      backgroundColor: "#459B9B" // Set hover effect color
                    }
                  }}>
                    <Typography sx={{ fontSize: '0.75rem !important', color: "#482E21" }}>
                      Sign in
                    </Typography>
                  </Button>
                </Link>

                {/* <Link to='/role'>
              <Button variant='contained' sx={{ padding: "2px 6px" }}>
                <Typography variant='body2' sx={{ fontSize: '0.75rem !important' }}>
                  Sign up
                </Typography>
              </Button>
            </Link> */}

              </Grid>
            </Grid>

            <AppBar sx={{ backgroundColor: 'rgba(4, 84, 132, 0.3)' }}>
              <Grid container className='nav1'>
                {/* <Grid item xs={3}></Grid> */}
                <Grid item xs={1} justifyContent='center' sx={{marginTop:"4px"}} textAlign='center'>
                  {/* <Typography variant='body2'> */}
                  <Avatar src={Hotelmain} sx={{ width: 40, height: 32.4 }}/>
                </Grid>
                {/* <div style={{position:'relative'}}> */}
                  <Grid item xs={1.5} lg={1} xl={1} md={1} sm={1} sx={{marginTop:'8px'}} textAlign='center' justifyContent="center">
                    <Typography sx={{ fontSize: '0.8rem' }} component="div" >
                      <NavLink to="/" className='cont'>Home</NavLink>
                    </Typography>
                  </Grid>
                  {/* <Grid item xs={1}></Grid> */}
                  <Grid item lg={1.2} xl={1.2} md={1.2} sm={2} xs={2} sx={{marginTop:'8px'}} textAlign='center' justifyContent="center">
                    <Typography sx={{ fontSize: '0.8rem' }} component="div" >
                      <NavLink to="/bookroom" className='cont'>About Us</NavLink>
                    </Typography>
                  </Grid>
                  {/* <Grid item xs={1}></Grid> */}
                  <Grid item lg={1.2} xl={1.2} md={1.2} sm={2} xs={2.3} sx={{marginTop:'8px'}} textAlign='center' justifyContent="center">
                    <Typography sx={{ fontSize: '0.8rem' }} component="div" >
                      <NavLink to="/BrowseRooms" className='cont' >Contact us</NavLink>
                    </Typography>
                  </Grid>
                  <Grid item xs={1} lg={1} xl={1} md={1} sm={2} sx={{marginTop:'8px'}} textAlign='center' justifyContent="center">
                    <Typography sx={{ fontSize: '0.8rem' }} component="div" >
                      <NavLink to="/BrowseRooms" className='cont' >Help</NavLink>
                    </Typography>
                  </Grid>
                {/* </div> */}
                {/* <Grid item sm={1} md={2.5}></Grid> */}
                {/* <Grid item xs={8} textAlign='right'></Grid> */}
              </Grid>
            </AppBar>
            {/* <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid> */}
            {/* </Grid> */}
            {/* </Toolbar> */}

          </>}

      </ThemeProvider>
    </div>
  )
}

export default Nav