import { createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

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
                        <Typography variant='h3'>
                            Enter your hotel details
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignupHotel