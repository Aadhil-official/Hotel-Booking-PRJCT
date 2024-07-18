import { createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { LoginForm } from '../Components/Index'

function SignIn() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div>
            <Grid container textAlign='center' justifyContent='center'>
                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold', color: '' }}>
                            Log in
                        </Typography>
                    </ThemeProvider>
                </Grid>

                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='body2'>
                            Enter username and password
                        </Typography>
                    </ThemeProvider>
                </Grid><br /><br />

                <Grid container textAlign='center' justifyContent='center'>
                    <Grid item xs={6} className='box'>
                        <LoginForm />
                    </Grid>
                </Grid>

                <Grid item xs={6} sx={{ fontWeight: 'bold' }} textAlign='right'>
                <br /><br />
                    <ThemeProvider theme={theme}>
                        <Typography variant='body1' color='red'>
                            Forget password?
                        </Typography>
                    </ThemeProvider>
                </Grid>

                <Grid item xs={6} sx={{ fontWeight: 'bolder' }} textAlign='left'>
                <br /><br />
                    <ThemeProvider theme={theme}>
                        <Typography variant='body1'>
                            Reset the password
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div >
    )
}

export default SignIn