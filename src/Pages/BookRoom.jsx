import React from 'react'
import { Nav, ReserveRoomForm} from '../Components/Index'
import { Grid } from '@mui/material'
import '../Styles/Pages/BookRoom.css'

function BookRoom() {
  return (
    <div>
        <Nav/>
        <br/><br/><br/>
        <Grid container justifyContent='center'>
        {/* <Grid item xl={4.75} lg={4.65} md={4} xs={1} sm={3}></Grid> */}
        <Grid item xl={3.5} lg={4} md={6.2} xs={10} sm={9} className="box">
            <ReserveRoomForm/>
        </Grid>
        </Grid>
    </div>
  )
}

export default BookRoom