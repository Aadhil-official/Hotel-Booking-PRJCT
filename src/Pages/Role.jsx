import { createTheme, Grid, responsiveFontSizes, Typography } from '@mui/material'
import React from 'react'
import { RoleForm, BfrLoginNav } from '../Components/Index';

function Role() {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <BfrLoginNav />
      <br /><br /><br />
      <Grid container textAlign='center' justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h3'>
            Select your role
          </Typography><br/><br/>
        </Grid>

        <Grid item xs={5} className='box'>
          <RoleForm />
        </Grid>

      </Grid>
    </div>
  )
}

export default Role