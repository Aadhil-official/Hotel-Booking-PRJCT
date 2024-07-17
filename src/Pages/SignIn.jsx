import { Box, createTheme, Grid, responsiveFontSizes, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

function SignIn() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold',color:'' }}>
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
                </Grid>

                <Grid item xs={12} sx={{ fontWeight: 'bold' }}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='body1' color='red'>
                            Forget password?
                        </Typography>
                        <Typography variant='body2'>
                            Reset the password
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignIn