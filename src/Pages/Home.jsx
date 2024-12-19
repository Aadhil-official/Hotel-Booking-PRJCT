import React, { useEffect, useState } from 'react'
import { Nav } from '../Components/Index'
import { Box, Button, createTheme, Grid, responsiveFontSizes, TextField, ThemeProvider, Typography, useMediaQuery } from '@mui/material'
import Hotelmain from '../assets/pexels-pixabay-258154.jpg'
import '../Styles/Pages/Home.css'

function Home() {
  const [enddate, setEnddate] = useState("");
  const [startdate, setStartdate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    setStartdate(currentDate);
    setEnddate(currentDate);
  }, [])

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const isLargerThan700px = useMediaQuery('(min-width:1100px)');
  const isLargerThan500px = useMediaQuery('(min-width:800px)');

  return (
    <div>
      <Nav />

      <Grid className='-mt-2 relative' container justifyContent="center">

        <Grid item xs={12}>
          <img
            className='w-full object-cover absolute h-[88vh]'
            src={Hotelmain}
            alt="Slide 2"
          />

          <div className='w-full object-cover h-[88vh] bg-[#482e21] opacity-40'></div>

        </Grid>
      </Grid><br />

      <Grid item className='mr-auto ml-auto w-full'>
        {isLargerThan700px &&
          <Grid container
            position='absolute'
            textAlign='center'
            justifyContent='center'
            className='w-full text-5xl top-[34vh] shadow-white-opaque'
          >
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <Typography variant='h4.5' className='font-semibold text-[#B4EBD3]'>
                  We Find The Best Hotel For You
                </Typography><br />
                <Typography variant='body2' className='text-[#B4EBD3]'>
                  {/* We are a team of experts who have been in the hotel industry for years. We know what
              makes a hotel great and we're here to help you find the perfect one for your needs. */}
                  The place where you looking to relax..
                </Typography>
              </ThemeProvider>
            </Grid>

            <div className='rounded-[15px] pt-[20px] pb-[20px] pr-[0px] pl-[0px] bg-white box-shadow-custom mt-[180px]'>

              <Grid container className='mt-auto mb-auto' justifyContent="center" textAlign="center">
                <Box
                  component="form"
                  className='flex justify-center align-middle gap-2'
                  noValidate
                  autoComplete="off"
                >

                  <Grid item xs={3}>
                    <TextField
                      id="start-date"
                      label='Check in'
                      variant="outlined"
                      type="date"
                      value={startdate}
                      fullWidth
                      onChange={(e) => setStartdate(e.target.value)}
                      className="SearchField w-[250px]"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type='text'
                      label='Guests'
                      className="SearchField w-[250px]"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="search-hotel"
                      variant="outlined"
                      type="text"
                      fullWidth
                      label="Location.."
                      className="SearchField w-[250px]"
                    />
                  </Grid>

                  <Grid item className='mt-auto mb-auto'>
                    <Button variant='contained' size='large'
                      className="!bg-[#54ACAC] !rounded-[20px] !-mt-[16px] !ml-[15px] !h-[60px] !w-[150px] hover:!bg-[#459B9B]"
                    >
                      <Typography variant='body2' className='mt-auto mb-auto text-[#482E21]'>
                        Search
                      </Typography>
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </div>
          </Grid>
        }

        {!isLargerThan700px && !isLargerThan500px &&
          <Grid container
            position='absolute'
            textAlign='center'
            justifyContent='center'
            className='w-full text-5xl top-[28vh] shadow-white-opaque'
          >
            {/* <Grid item xs={12} className='overlay' ></Grid> */}

            <ThemeProvider theme={theme}>
              <Grid item xs={12}>
                <Typography variant='h4' className='!font-semibold text-[#B4EBD3]'>

                  We Find The Best Hotel For You

                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className='!text-xs text-[#B4EBD3]'>

                  The place where you looking to relax..

                </Typography>
              </Grid>
            </ThemeProvider>

{/* 
margin-top: 140px;
    border-radius: 10px;
    /* width: 80%; */
    /* background-color: #74686856;
    padding: 15px;
    background-color: #ffffff;
    box-shadow: 4px 8px 10px 1px rgba(123, 188, 176, 0.5);
*/}

            <div className='mt-[140px] rounded-[10px] p-[15px] bg-white box-shadow-custom'>
              <Grid container justifyContent="center" textAlign="center">
                <Box
                  component="form"
                  className='[&_.MuiTextField-root]:!m-1'
                  noValidate
                  autoComplete="off"
                >

                  <Grid item xs={3}>
                    <TextField
                      id="start-date"
                      label='Check in'
                      variant="outlined"
                      type="date"
                      value={startdate}
                      fullWidth
                      onChange={(e) => setStartdate(e.target.value)}
                      className="SearchField !w-[250px]"
                    />

                  </Grid>

                  <Grid item xs={3}>
                    <TextField
                      id="end-date"
                      fullWidth
                      variant="outlined"
                      type='text'
                      label='Guests'
                      className="SearchField !w-[250px]"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <TextField
                      id="search-hotel"
                      variant="outlined"
                      type="text"
                      fullWidth
                      label="Location.."
                      className="SearchField !w-[250px]"
                    />
                  </Grid>

                  <Button variant='contained' size='large' 
                  className='!bg-[#54ACAC] !rounded-[20px] !-mt-[5px] h-[60px] w-[250px] hover:!bg-[#459B9B]'>
                    <Typography variant='body2' className='text-[#482E21]'>
                      Search
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </div>
          </Grid>
        }

        {!isLargerThan700px && isLargerThan500px &&
          <Grid container
            position='absolute'
            textAlign='center'
            justifyContent='center'
            className='w-full text-5xl top-[31vh] shadow-white-opaque'
          >

            <ThemeProvider theme={theme}>
              <Grid item xs={12}>
                <Typography variant='h4' className='!font-semibold text-[#B4EBD3]'>
                  We Find The Best Hotel For You
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className='!text-xs text-[#B4EBD3]'>
                  {/* We are a team of experts who have been in the hotel industry for years. We know what
              makes a hotel great and we're here to help you find the perfect one for your needs. */}
                  The place where you looking to relax..
                </Typography>
              </Grid>
            </ThemeProvider>

            <div className='mt-[177px] rounded-[10px] w-[68%] bg-white box-shadow-custom'>
              <Grid container justifyContent="center" textAlign="center">
                <Box
                  component="form"
                  className='flex m-4 [&_.MuiTextField-root]:m-1 gap-[1px]'
                  noValidate
                  autoComplete="off"
                >

                  <Grid item xs={6}>
                    <TextField
                      id="start-date"
                      label='Check in'
                      variant="outlined"
                      type="date"
                      value={startdate}
                      fullWidth
                      onChange={(e) => setStartdate(e.target.value)}
                      className="SearchField !w-[250px]"
                    />

                    <TextField
                      id="end-date"
                      fullWidth
                      variant="outlined"
                      type='text'
                      label='Guests'
                      className="SearchField !w-[250px]"
                    />
                  </Grid>
                  <Grid item xs={6} >
                    <TextField
                      id="search-hotel"
                      variant="outlined"
                      type="text"
                      fullWidth
                      label="Location.."
                      className="SearchField !w-[250px]"

                    />
                    {/* <Grid item xs={3}> */}
                    <Button variant='contained' size='large'
                    className='!bg-[#54ACAC] !rounded-[20px] !-mt-[10px] h-[60px] w-[250px] hover:!bg-[#459B9B]'>
                      <Typography variant='body2' className='text-[#482E21]'>
                        Search
                      </Typography>
                    </Button>
                    
                  </Grid>
                </Box>
              </Grid>
            </div>
          </Grid>}
      </Grid>
    </div >
  )
}

export default Home;