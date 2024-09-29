import { AppBar, Button, Grid, Typography, createTheme, responsiveFontSizes, useMediaQuery } from '@mui/material'
import React from 'react'
import '../Styles/Components/Nav.css'
import { Link, NavLink } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
// import HomeIcon from '@mui/icons-material/Home';

function BfrLoginNav() {

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

                            <Link to='/role'>
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
                        <Grid item xs={12} textAlign='left' sx={{ marginLeft: '10px' }}>
                            <Typography variant="body2" component="div" >
                                <NavLink to="/" className='cont'>
                                <img src="" alt="" />
                                    {/* <HomeIcon color='action' fontSize='large' sx={{ width: '40px', height: '40px', margin: '5px', marginLeft: '20px' }} alt='Back' /> */}
                                </NavLink>
                            </Typography>
                        </Grid>
                    </Grid>

                </AppBar>

                {!isLargerThan700px && <Grid container position='fixed' sx={{ marginBottom: '-70px', marginTop: '5px', zIndex: 100 }}>
                    <Grid item xs={12} sx={{ marginRight: "20px" }} textAlign='right'>
                        <br /><br />

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

export default BfrLoginNav