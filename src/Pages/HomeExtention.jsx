import { Box, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function HomeExtention() {
    const [enddate, setEnddate] = useState("");
    const [startdate, setStartdate] = useState("");

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setStartdate(currentDate);
        setEnddate(currentDate);
    }, [])

    function filterhotel() {
        console.log('filterhotel');
    }

    return (
        <div>

            <Grid container justifyContent='center' textAlign='center'>
                <Grid item xs={12}>
                    <Typography variant='h4' className='HomeTitle'>
                        <i>
                            Welcome to the Hotel Manager!.
                        </i>
                    </Typography><br />
                </Grid>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, marginTop: '20px' },
                        textAlign: 'center',
                    }}
                    noValidate
                    autoComplete='off'
                >

                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            type='date'
                            // fullWidth
                            value={startdate}
                            onChange={(e) => { setStartdate(e.target.value) }}
                            className='SearchField'
                            InputProps={{
                                className: 'SearchField'
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            type='date'
                            // fullWidth
                            value={enddate}
                            onChange={(e) => { setEnddate(e.target.value) }}
                            className='SearchField'
                            InputProps={{
                                className: 'SearchField'
                            }}
                        />
                        <NoBreackSpace/>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            type='text'
                            label="Searce Hotel.."
                            // fullWidth
                            // value={filterhotel}
                            onChange={(e) => { setEnddate(e.target.value) }}
                            className='SearchField'
                            InputProps={{
                                className: 'SearchField'
                            }}
                        />

                    </Grid>
                </Box>

            </Grid>
        </div>
    )
}

export default HomeExtention