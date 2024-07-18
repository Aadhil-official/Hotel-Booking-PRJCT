import { createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import AddHotelForm from '../Components/AddHotelForm';
import { Link } from 'react-router-dom';
import '../Styles/Pages/SignUp.css'

function SignupHotel() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div>
            <Grid container>
                <Grid item xs={12} textAlign='center'>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3'>
                            For New Hotel Booking
                        </Typography>
                    </ThemeProvider>
                </Grid>

                <Grid item xs={12} textAlign='center'>
                    <ThemeProvider theme={theme}>
                        <Typography variant='body1'>
                            Enter your hotel details
                        </Typography>
                    </ThemeProvider><br /><br />
                </Grid>

                <Grid item xs={12} textAlign='center'>
                    <Grid container justifyContent='center' textAlign='center'>
                        <Grid item xs={6} className='box'>
                            <AddHotelForm />
                        </Grid>
                    </Grid><br /><br />
                </Grid>

                <Grid item xs={6} textAlign='right'>
                    <ThemeProvider theme={theme}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                            For Home page?
                        </Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={6} textAlign='left'>
                    <Link to='/' className='textDec'>
                        <ThemeProvider theme={theme}>
                            <Typography variant='body1' color='red'>
                                Click here
                            </Typography>
                        </ThemeProvider>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignupHotel