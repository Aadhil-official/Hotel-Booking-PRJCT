import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLogin() {
    return (
        <div>
            <Typography variant="body2" component="div" >
                <Avatar className='avtr'></Avatar>
                <NavLink to="/" className='cont1' >Find my booking</NavLink>
            </Typography>
            <Grid item xs={0.5}></Grid>
            <Typography variant="body2" component="div" >
                <NavLink to="/" className='cont' >Account details</NavLink>
            </Typography>
        </div>
    )
}

export default NavLogin