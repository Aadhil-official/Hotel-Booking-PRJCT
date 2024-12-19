import { Box, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../Styles/Pages/HomeExten.css'
import homefront from '../assets/homefront.png'
import Hotelmain from '../assets/Hotelmain.jpg'

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

    const isLargerThan700px = useMediaQuery('(min-width:1100px)');
    const isLargerThan500px = useMediaQuery('(min-width:800px)');

    return (
        <div>
            {isLargerThan700px && <><br /><br /><br /></>}

            {!isLargerThan700px && isLargerThan500px && <><br /><br /><br /><br /><br /></>}

            {!isLargerThan500px && <><br /><br /><br /><br /><br /><br /><br /><br /><br /></>}

            <Grid container justifyContent='center' textAlign='left'>
                {/* <Grid item xs={0.5}></Grid> */}
                <Grid item xs={11}>
                    <Typography variant='h4' className='text-[#482E21]'>
                        Hotel of the month
                    </Typography><br />
                </Grid>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={11}>
                    <Typography className='text-[#778088] !text-[14px] !-mt-6 !ml-[2.5px] !-mb-2'>
                        Ideal hotel for the best experience
                    </Typography><br />
                </Grid>
                <Grid item xs={0.5}></Grid>
                <div className="relative w-full h-72">

                    <img src={homefront} className="absolute inset-0 w-full h-72 object-cover" alt="image" />
                    <div className="absolute inset-0 w-full h-72 bg-[#482E21] opacity-60"></div>

                    <div className="relative w-full h-[400px] flex items-center justify-center">
                        {/* <img
                            src={Hotelmain}
                            alt="Top Image"
                            className="relative z-30 w-[300px] h-[300px] object-cover rounded-full"
                        /> */}

                        {/* <div
                            className="absolute z-20 w-[350px] h-[350px] bg-[#A1D4C9]"
                            style={{ clipPath: 'circle(50% at 50% 50%)' }}
                        ></div> */}

                        {/* <div
                            className="absolute z-10 w-[400px] h-[400px] bg-[#54ACAC] opacity-70"
                            style={{
                                clipPath: 'path("M232.5,150 Q300,0,367.5,150 Q435,300,300,367.5 Q165,435,232.5,300 Q300,165,232.5,150 Z")'
                            }}
                        ></div> */}
                        <div
                        className='w-[400px] h-[400px] bg-[#B4EBD3] left-1'
                            style={{
                                clipPath: 'path("M230,150 Q280,50,370,170 Q450,300,320,360 Q200,400,150,300 Q100,200,230,150 Z")',
                            }}
                        ></div>

                    </div>

                </div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },//, marginTop: '-50px'
                        textAlign: 'center',
                        // zIndex: '100',
                        // backgroundColor:'#ffffff'
                    }}
                    noValidate
                    autoComplete='off'
                >

                    <Grid item xs={12} textAlign='center'>
                        {/* <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type='date' */}
                        {/* // fullWidth
                            //     value={startdate}
                            //     onChange={(e) => { setStartdate(e.target.value) }}
                            //     className='SearchField'
                            //     InputProps={{
                            //         className: 'SearchField'
                            //     }}
                            // /> */}

                        {/* <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type='date' */}
                        {/* // fullWidth
                            //     value={enddate}
                            //     onChange={(e) => { setEnddate(e.target.value) }}
                            //     className='SearchField'
                            //     InputProps={{
                            //         className: 'SearchField'
                            //     }}
                            // /> */}
                        {/* </Grid>

                    <Grid item xs={6} textAlign='right'> */}
                        {/* <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type='text'
                                label="Searce Hotel.." */}
                        {/* // fullWidth
                                // value={filterhotel} */}
                        {/* onChange={(e) => { setEnddate(e.target.value) }}
                                className='SearchField'
                                InputProps={{
                                    className: 'SearchField'
                                }}
                            /> */}

                    </Grid>
                </Box>
                {/* </div> */}
            </Grid>
        </div>
    )
}

export default HomeExtention