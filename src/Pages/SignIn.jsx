import { Box, TextField } from '@mui/material'
import React from 'react'

function SignIn() {
    return (
        <div>
            <Box
                type='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '10%'
                }}
            >
                <TextField
                    type='text'
                    label='User Name'
                    variant='outlined'
                    fullWidth
                    required
                />

                <TextField
                    type='password'
                    label='Password'
                    variant='outlined'
                    fullWidth
                    required
                />
            </Box>
        </div>
    )
}

export default SignIn