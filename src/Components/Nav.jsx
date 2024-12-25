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
        <AppBar className='!bg-[rgba(4,84,132,0.3)]'>

          {isLargerThan700px &&
            <>
              <Grid container className='-mb-[27.5px]'>
                <Grid item xs={12} className='!ml-[20px] !mt-[5px] text-[#B4B4C4] absolute'>
                  <Typography variant='body2'>
                    <span className='inlogocamp [text-shadow:0px_0px_1px_#482E21]'>The Hotel Manager</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} className='!mr-5' textAlign='right'>
                  <Link to='/login'>
                    <Button variant='contained' size='medium' className='!bg-[#54ACAC] !rounded-[3px] !normal-case !mr-[5px]'>
                      <Typography variant='body2' className='text-[#482E21]'>
                        Sign In
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

              <Grid container justifyContent='right' className='-ml-[150px] mb-[5px] flex justify-between'>
                <Grid item xs={1.5} lg={1} xl={1} md={1} sm={1} justifyContent="center">
                  <Typography variant="body2" component="div" >
                    <NavLink to="/" className='text-[#B4EBD3] [text-shadow:0px_0px_10px_#482E21]'>Home</NavLink>
                  </Typography>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item lg={1.2} xl={1.2} md={1.2} sm={1.5} xs={2} justifyContent="center">
                  <Typography variant="body2" component="div" >
                    <NavLink to="/bookroom" className='text-[#B4EBD3] [text-shadow:0px_0px_10px_#482E21]'>About Us</NavLink>
                  </Typography>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item lg={1.2} xl={1.2} md={1.2} sm={1.8} xs={2.3} justifyContent="center">
                  <Typography variant="body2" component="div" >
                    <NavLink to="/BrowseRooms" className='text-[#B4EBD3] [text-shadow:0px_0px_10px_#482E21]' >Contact us</NavLink>
                  </Typography>
                </Grid>
                <Grid item xs={1} lg={1} xl={1} md={1} sm={1} justifyContent="center">
                  <Typography variant="body2" component="div" >
                    <NavLink to="/BrowseRooms" className='text-[#B4EBD3] [text-shadow:0px_0px_10px_#482E21]' >Help</NavLink>
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
            <Grid container position='fixed' className='!-mb-[70px] mt-[5px] z-10'>
              <Grid item xs={12} className='!mr-5' textAlign='right'>
                <br /><br />
                <Link to='/login'>
                  <Button variant='contained' size='medium' className='!bg-[#54ACAC] !mr-[5px] !mt-[10px]'>
                    <Typography className='!text-[0.75rem] text-[#482E21]'>
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

            <AppBar className='!bg-[rgba(4,84,132,0.3)]'>
              <Grid container className='flex justify-between'>
                <Grid item xs={1} justifyContent='center' className='!mt-1' textAlign='center'>
                  {/* <Typography variant='body2'> */}
                  <Avatar src={Hotelmain} className='!w-10 !h-[32.4px]' />
                </Grid>

                <Grid item xs={1.5} lg={1} xl={1} md={1} sm={1} className='!mt-2' textAlign='center' justifyContent="center" >
                  <Typography className='!text-[0.8rem]' component="div" >
                    <NavLink to="/" className='text-[#B4EBD3] [text-shadow:0px_0px_10px_#482E21]'>Home</NavLink>
                  </Typography>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item lg={1.2} xl={1.2} md={1.2} sm={2} xs={2} className='!mt-2' textAlign='center' justifyContent="center">
                  <Typography className='!text-[0.8rem]' component="div" >
                    <NavLink to="/bookroom" className='text-[#B4EBD3] [text-shadow:0px_0px_10px_#482E21]'>About Us</NavLink>
                  </Typography>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item lg={1.2} xl={1.2} md={1.2} sm={2} xs={2.3} className='!mt-2' textAlign='center' justifyContent="center">
                  <Typography className='!text-[0.8rem]' component="div" >
                    <NavLink to="/BrowseRooms" className='text-[#B4EBD3] [text-shadow:0px_0px_10px_#482E21]' >Contact us</NavLink>
                  </Typography>
                </Grid>
                <Grid item xs={1} lg={1} xl={1} md={1} sm={2} className='!mt-2' textAlign='center' justifyContent="center">
                  <Typography className='!text-[0.8rem]' component="div" >
                    <NavLink to="/BrowseRooms" className='text-[#B4EBD3] [text-shadow:0px_0px_10px_#482E21]' >Help</NavLink>
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