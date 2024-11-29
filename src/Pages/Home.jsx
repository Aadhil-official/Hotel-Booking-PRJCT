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

      <Grid className='wrongposh' container justifyContent="center">
        <Grid item xs={12}>
          <img
            className='homeimage'
            src={Hotelmain}
            alt="Slide 2"
          />
          <div className='divoverlap'></div>
          {/* <img
            style={{position:"absolute"}}
            className='homeimage'
            src={Hotelmain}
            alt="Slide 2"
          /> */}
        </Grid>
      </Grid><br />

      {isLargerThan700px && <Grid container position='absolute' textAlign='center' justifyContent='center' className='HotalNameHome'>
        {/* <Grid item xs={12} className='overlay' ></Grid> */}
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography variant='h4.5' sx={{ fontWeight: 600, color: '#B4EBD3' }}>
              {/* <i>
                <span className='a'>The </span>
                <span className='b'>Hotal </span>
                <span className='c'>Manager</span>
                <span className='a'>!</span>
                <span className='b'>.</span>
                <span className='c'>.</span>
              </i> */}
              We Find The Best Hotel For You
            </Typography><br />
            <Typography variant='body2' sx={{ color: '#B4EBD3' }}>
              {/* We are a team of experts who have been in the hotel industry for years. We know what
              makes a hotel great and we're here to help you find the perfect one for your needs. */}
              The place where you looking to relax..
            </Typography>
          </ThemeProvider>
        </Grid>

        <div className='backside'>
          <Grid container justifyContent="center" textAlign="center">
            <Box
              component="form"
              sx={{
                display: "flex", // Ensures items are in a single row
                justifyContent: "center",
                alignItems: "center",
                gap: 2, // Adds space between the fields
                '& .MuiTextField-root': { m: 1 }, // Ensures consistent margins
              }}
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
                  className="SearchField"
                // InputProps={{ className: 'SearchField' }}
                // sx={{ width: "200px" }} // Ensures consistent width
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  // id="end-date"
                  fullWidth
                  variant="outlined"
                  type='text'
                  label='Guests'
                  // type="date"
                  // value={enddate}
                  // onChange={(e) => setEnddate(e.target.value)}
                  className="SearchField"
                // InputProps={{ className: 'SearchField' }}
                // sx={{ width: "200px" }} // Ensures consistent width
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="search-hotel"
                  // label='Hotel Name'
                  variant="outlined"
                  type="text"
                  fullWidth
                  label="Location.."
                  className="SearchField"
                // InputProps={{ className: 'SearchField' }}
                // sx={{ width: "250px" }} // Wider width for text input
                />
              </Grid>

              <Grid item>
                <Button variant='contained' size='large' sx={{
                  backgroundColor: "#54ACAC", // Set the background color
                  borderRadius: "20px",
                  margin: "5px",
                  marginTop: '-5px',
                  marginLeft: '15px',
                  height: "60px",
                  width: "150px",
                  '&:hover': {
                    backgroundColor: "#459B9B" // Set hover effect color
                  }
                }}>
                  <Typography variant='body2' sx={{ color: "#482E21" }}>
                    Search
                  </Typography>
                </Button>
              </Grid>
            </Box>
          </Grid>
        </div>
      </Grid>}

      {!isLargerThan700px && !isLargerThan500px && <Grid container position='absolute' textAlign='center' justifyContent='center' className='HotalNameHome'>
        {/* <Grid item xs={12} className='overlay' ></Grid> */}

        <ThemeProvider theme={theme}>
          <Grid item xs={12}>
            <Typography variant='h4' sx={{ fontWeight: 600, color: '#B4EBD3' }}>
              {/* <i>
                <span className='a'>The </span>
                <span className='b'>Hotal </span>
                <span className='c'>Manager</span>
                <span className='a'>!</span>
                <span className='b'>.</span>
                <span className='c'>.</span>
              </i> */}
              We Find The Best Hotel For You
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: '0.75rem', color: '#B4EBD3' }}>
              {/* We are a team of experts who have been in the hotel industry for years. We know what
              makes a hotel great and we're here to help you find the perfect one for your needs. */}
              The place where you looking to relax..
            </Typography>
          </Grid>
        </ThemeProvider>

        <div className='backsides'>
          <Grid container justifyContent="center" textAlign="center">
            <Box
              component="form"
              sx={{
                // display: "flex", // Ensures items are in a single row
                justifyContent: "center",
                alignItems: "center",
                // gap: 2, // Adds space between the fields
                '& .MuiTextField-root': { m: 1 }, // Ensures consistent margins
              }}
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
                  className="SearchField"
                  // InputProps={{ className: 'SearchField' }}
                  sx={{ width: "250px" }} // Ensures consistent width
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="end-date"
                  fullWidth
                  variant="outlined"
                  type='text'
                  label='Guests'
                  // type="date"
                  // value={enddate}
                  // onChange={(e) => setEnddate(e.target.value)}
                  className="SearchField"
                  // InputProps={{ className: 'SearchField' }}
                  sx={{ width: "250px" }} // Ensures consistent width
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="search-hotel"
                  variant="outlined"
                  type="text"
                  fullWidth
                  label="Location.."
                  className="SearchField"
                  // InputProps={{ className: 'SearchField' }}
                  sx={{ width: "250px" }} // Wider width for text input
                />
              </Grid>

              {/* <Grid item xs={3}> */}
              <Button variant='contained' size='large' sx={{
                backgroundColor: "#54ACAC", // Set the background color
                borderRadius: "20px",
                // margin: "5px",
                marginTop: '-15px',
                // marginLeft: '10px',
                height: "60px",
                width: "250px",
                '&:hover': {
                  backgroundColor: "#459B9B" // Set hover effect color
                }
              }}>
                <Typography variant='body2' sx={{ color: "#482E21" }}>
                  Search
                </Typography>
              </Button>
              {/* </Grid> */}
            </Box>
          </Grid>
        </div>
      </Grid>}


      {!isLargerThan700px && isLargerThan500px && <Grid container position='absolute' textAlign='center' justifyContent='center' className='HotalNameHome'>
        {/* <Grid item xs={12} className='overlay' ></Grid> */}

        <ThemeProvider theme={theme}>
          <Grid item xs={12}>
            <Typography variant='h4' sx={{ fontWeight: 600, color: '#B4EBD3' }}>
              {/* <i>
                <span className='a'>The </span>
                <span className='b'>Hotal </span>
                <span className='c'>Manager</span>
                <span className='a'>!</span>
                <span className='b'>.</span>
                <span className='c'>.</span>
              </i> */}
              We Find The Best Hotel For You
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: '0.75rem', color: '#B4EBD3' }}>
              {/* We are a team of experts who have been in the hotel industry for years. We know what
              makes a hotel great and we're here to help you find the perfect one for your needs. */}
              The place where you looking to relax..
            </Typography>
          </Grid>
        </ThemeProvider>

        <div className='backsidess'>
          <Grid container justifyContent="center" textAlign="center">
            <Box
              component="form"
              sx={{
                display: "flex", // Ensures items are in a single row
                // justifyContent: "center",
                // alignItems: "center",
                // gap: 2, // Adds space between the fields
                '& .MuiTextField-root': { m: 1 }, // Ensures consistent margins
              }}
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
                  className="SearchFieldd"
                  // InputProps={{ className: 'SearchField' }}
                  sx={{ width: "250px" }} // Ensures consistent width
                />
                {/* </Grid>

              <Grid item xs={3}> */}
                <TextField
                  id="end-date"
                  fullWidth
                  variant="outlined"
                  type='text'
                  label='Guests'
                  // type="date"
                  // value={enddate}
                  // onChange={(e) => setEnddate(e.target.value)}
                  className="SearchFieldd"
                  // InputProps={{ className: 'SearchField' }}
                  sx={{ width: "250px" }} // Ensures consistent width
                />
              </Grid>
              <Grid item xs={6} >
                <TextField
                  id="search-hotel"
                  variant="outlined"
                  type="text"
                  fullWidth
                  label="Location.."
                  className="SearchFieldd"
                  // InputProps={{ className: 'SearchField' }}
                  sx={{ width: "250px" }} // Wider width for text input
                />
                {/* <Grid item xs={3}> */}
                <Button variant='contained' size='large' sx={{
                  backgroundColor: "#54ACAC", // Set the background color
                  borderRadius: "20px",
                  // margin: "5px",
                  marginTop: '-15px',
                  marginLeft: '10px',
                  height: "60px",
                  width: "250px",
                  '&:hover': {
                    backgroundColor: "#459B9B" // Set hover effect color
                  }
                }}>
                  <Typography variant='body2' sx={{ color: "#482E21" }}>
                    Search
                  </Typography>
                </Button>
                {/* </Grid> */}
                {/* </Grid>

              <Grid item xs={3}> */}
                {/* <TextField
                  id="search-hotel"
                  variant="outlined"
                  type="text"
                  fullWidth
                  label="Search Hotel.."
                  className="SearchField"
                  // InputProps={{ className: 'SearchField' }}
                  sx={{ width: "250px" }} // Wider width for text input
                /> */}
              </Grid>
            </Box>
          </Grid>
        </div>
      </Grid>}

    </div >
  )
}

export default Home