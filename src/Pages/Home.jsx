import React from 'react'
import { Nav } from '../Components/Index'
import { createTheme, Grid, responsiveFontSizes, TextField, ThemeProvider, Typography } from '@mui/material'
import Hotelmain from '../assets/Hotelmain.jpg'
import '../Styles/Pages/Home.css'

function Home() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <Nav />

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <img
            className='homeimage'
            src={Hotelmain}
            alt="Slide 2"
          />
        </Grid>
      </Grid><br />

      <Grid container position='absolute' textAlign='center' justifyContent='center' className='HotalNameHome'>
        {/* <Grid item xs={12} className='overlay' ></Grid> */}
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant='h2' sx={{ fontWeight: 600 }}>
              <i>
                <span className='a'>The </span>
                <span className='b'>Hotal </span>
                <span className='c'>Manager</span>
                <span className='a'>!</span>
                <span className='b'>.</span>
                <span className='c'>.</span>
              </i>
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home