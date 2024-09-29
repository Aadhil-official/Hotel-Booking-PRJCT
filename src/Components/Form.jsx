import React from 'react'
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';

function Form() {

    // cloudinary is for image transformation using cdn to back to client side

  return (
    <div>
        <Box
        height={200}
        width={200}
        my={1}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        >
          <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TextField
              type='text'
              id='name'
              label='Full Name'
              />
            </Grid>
          </Grid>
        </Box>
    </div>
  )
}

export default Form