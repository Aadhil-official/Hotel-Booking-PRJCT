import { TextField } from '@mui/material'
import React from 'react'

function AddHotelForm() {
    return (
        <div>
            <TextField
                type='text'
                label='Enter the hotel name'
                fullWidth
            />
        </div>
    )
}

export default AddHotelForm