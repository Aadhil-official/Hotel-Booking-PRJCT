import React from 'react'
import { Nav, ReserveRoomForm } from '../Components/Index'
import { createTheme, Grid, ThemeProvider, useMediaQuery, useTheme } from '@mui/material'
import '../Styles/Pages/BookRoom.css'

const customtheme = createTheme();

function BookRoom() {

  // const theme = useTheme();
  const isSmaller = useMediaQuery('(max-width:700px)');

  return (
    <div>
      <ThemeProvider theme={customtheme}>
        <Nav />
        <br /><br /><br />
        {isSmaller &&
          <br />}
        <Grid container justifyContent='center'>
          {/* <Grid item xl={4.75} lg={4.65} md={4} xs={1} sm={3}></Grid> */}
          <Grid item xl={3.5} lg={4} md={6.2} xs={10} sm={9} className="box">
            <ReserveRoomForm />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

export default BookRoom