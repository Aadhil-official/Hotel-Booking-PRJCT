import { Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RoleForm() {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (selectedRole === 'admin') {
            navigate('/addHotel'); // Navigate to hotel registration for Admin
        } else if (selectedRole === 'user') {
            navigate('/login'); // Navigate to dashboard for User
        }
    };

    return (
        <div>
            <Box
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '15px',
                    '& .MuiFormControl-root': {
                        margin: 1,
                        width: '97.4%',
                        '@media (max-width:700px)': {
                            width: '94.5%',
                        },
                        '@media (min-width:700px) and (max-width:900px)': {
                            width: '96%',
                        },
                    },
                }}
            >
                <FormControl required>
                    <FormLabel>Select Role</FormLabel>
                    <RadioGroup
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                    >
                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                        <FormControlLabel value="user" control={<Radio />} label="User" />
                    </RadioGroup>
                </FormControl>

                <Button variant='contained' onClick={handleSubmit} disabled={!selectedRole}>
                    Next
                </Button>
            </Box>
        </div>
    );
}

export default RoleForm;
