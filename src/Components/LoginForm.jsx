import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { z } from 'zod';
import { success, error } from '../Utils/Toastify';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});


    const handleSubmit = () => {

        const formatedData = z.object({
            username: z.string().min(1, { message: 'Enter the username' }),
            password: z.string().min(1, { message: 'Enter the password' })
        })

        const loginData = {
            username: username,
            password: password
        }

        const isValid = formatedData.safeParse(loginData);
        if (isValid.success) {
            axios.post('/login')
                .then((response) => {
                    setUser(response.data);
                    success('Login successfully...!');
                })
                .catch(() => {
                    error('invelid username or password..!');
                    // const errorMessage = err.response?.data;
                    // if(errorMessage.include('invelid'))
                })
        } else {
            const errorMessages = isValid.error.issues.map(issue => issue.message).join(', ');
            error(errorMessages);
        }
    };

    return (
        <div>
            <Box
                type='form'
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: '97.4%',
                        '@media (max-width:700px)': {
                            width: '94.5%'
                        },
                        '@media (min-width:700px) and (max-width:900px)': {
                            width: '96%'
                        }
                    },
                    display: 'flex',
                    marginTop: '15px',
                    flexDirection: 'column'
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
                <br />
                <Button variant='contained' onClick={handleSubmit}>
                    Login
                </Button>
            </Box>
        </div >
    )
}

export default LoginForm;