// import React, { useEffect, useState } from 'react'
// import { Nav } from '../Components/Index'
// import { Box, Button, createTheme, Grid, responsiveFontSizes, TextField, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
// import Hotelmain from '../assets/pexels-pixabay-258154.jpg'
// import '../Styles/Pages/Home.css'

// function Home() {
//   const [enddate, setEnddate] = useState("");
//   const [startdate, setStartdate] = useState("");

//   useEffect(() => {
//     const currentDate = new Date().toISOString().split('T')[0];
//     setStartdate(currentDate);
//     setEnddate(currentDate);
//   }, [])

//   let theme = createTheme();
//   theme = responsiveFontSizes(theme);

//   const isLargerThan700px = useMediaQuery('(min-width:1100px)');
  // const isLargerThan500px = useMediaQuery('(min-width:800px)');

  // return (
  //   <div>
  //     <Nav />

  //     <Grid className='relative mt-[-8px]' container justifyContent="center">
  //       <Grid item xs={12}>
  //         <img
  //           className='absolute w-full object-cover h-[88vh]'
  //           src={Hotelmain}
  //           alt="Slide 2"
  //         />
  //         <div className='w-full h-full absolute top-0 bg-[#482e21] opacity-40'></div>
  //       </Grid>
  //     </Grid><br />

  //     {isLargerThan700px && <Grid container position='absolute' textAlign='center' justifyContent='center' className='text-3xl top-[40%] text-shadow-[2px_2px_6px_rgba(255,255,255,0.4)]'>
  //       <Grid item xs={12}>
  //         <ThemeProvider theme={theme}>
  //           <Typography variant='h4.5' sx={{ fontWeight: 600, color: '#B4EBD3' }}>
  //             We Find The Best Hotel For You
  //           </Typography><br />
  //           <Typography variant='body2' sx={{ color: '#B4EBD3' }}>
  //             The place where you looking to relax..
  //           </Typography>
  //         </ThemeProvider>
  //       </Grid>

  //       <div className='mt-[180px] bg-white rounded-lg p-4 shadow-md'>
  //         <Grid container justifyContent="center" textAlign="center">
  //           <Box
  //             component="form"
  //             sx={{
  //               display: "flex", 
  //               justifyContent: "center",
  //               alignItems: "center",
  //               gap: 2, 
  //               '& .MuiTextField-root': { m: 1 }, 
  //             }}
  //             noValidate
  //             autoComplete="off"
  //           >
  //             <Grid item xs={3}>
  //               <TextField
  //                 id="start-date"
  //                 label='Check in'
  //                 variant="outlined"
  //                 type="date"
  //                 value={startdate}
  //                 fullWidth
  //                 onChange={(e) => setStartdate(e.target.value)}
  //                 className="SearchField"
  //               />
  //             </Grid>

  //             <Grid item xs={3}>
  //               <TextField
  //                 fullWidth
  //                 variant="outlined"
  //                 type='text'
  //                 label='Guests'
  //                 className="SearchField"
  //               />
  //             </Grid>
  //             <Grid item xs={3}>
  //               <TextField
  //                 id="search-hotel"
  //                 variant="outlined"
  //                 type="text"
  //                 fullWidth
  //                 label="Location.."
  //                 className="SearchField"
  //               />
  //             </Grid>

  //             <Grid item>
  //               <Button variant='contained' size='large' sx={{
  //                 backgroundColor: "#54ACAC", 
  //                 borderRadius: "20px",
  //                 margin: "5px",
  //                 marginTop: '-5px',
  //                 marginLeft: '15px',
  //                 height: "60px",
  //                 width: "150px",
  //                 '&:hover': {
  //                   backgroundColor: "#459B9B" 
  //                 }
  //               }}>
  //                 <Typography variant='body2' sx={{ color: "#482E21" }}>
  //                   Search
  //                 </Typography>
  //               </Button>
  //             </Grid>
  //           </Box>
  //         </Grid>
  //       </div>
  //     </Grid>}

  //     {/* Add other breakpoints similarly */}
  //   </div>
  // )
// }

// export default Home
