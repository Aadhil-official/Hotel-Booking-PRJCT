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

                    <div className="-mt-14">
                        <img src={Hotelmain} alt='HotelICon' className='absolute z-10 w-[400px] h-[400px]'
                            style={{
                                // clipPath: 'path("M230,150 Q280,50,370,170 Q450,300,320,360 Q200,400,150,300 Q100,200,230,150 Z")',
                                clipPath: 'path("M230,150 Q280,50,350,170 Q450,300,320,360 Q200,400,150,300 Q90,150,230,150 Z")',
                            }}
                        />
                        <div
                            className='w-[400px] h-[400px] bg-[#B4EBD3] -rotate-[40deg] absolute  mt-14 -ml-6'
                            style={{
                                clipPath: 'path("M230,150 Q280,50,350,170 Q450,300,320,360 Q200,400,150,300 Q90,150,230,150 Z")',
                            }}
                        ></div>
                        <div
                            className='w-[400px] h-[400px] bg-[#54ACAC] rotate-[20deg] absolute ml-1 -mt-2'
                            style={{
                                clipPath: 'path("M230,150 Q280,50,350,170 Q450,300,320,360 Q200,400,150,300 Q90,150,230,150 Z")',
                            }}
                        ></div>
                    </div>
                    <Typography variant='h6' className='text-[#B4EBD3] font-bold mt-10'>
                        Wild Coast Tented Lodge
                    </Typography>

                </div>
                {/* <Grid item xs={12} textAlign='right'>
                    <Typography variant='h6' className='text-[#B4EBD3] font-bold absolute'>
                        Wild Coast Tented Lodge
                    </Typography>
                </Grid> */}
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