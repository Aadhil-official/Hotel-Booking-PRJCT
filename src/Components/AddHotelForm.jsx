import { Input, TextField } from '@mui/material'
import React from 'react'

function AddHotelForm() {

    


    return (
        <div>
            <TextField
                type='text'
                label='Enter the hotel name'
                fullWidth
            />

            <TextField
                type='text'
                label='Enter about hotel'
                fullWidth
            />

            <Input
                type='file'
                accept='.jpg, .jpeg, .png, .gif'
            />

        </div>
    )
}

export default AddHotelForm