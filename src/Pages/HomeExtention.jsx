import { Box, Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../Styles/Pages/HomeExten.css'
import homefront from '../assets/homefront.png'
import Hotelmain from '../assets/Hotelmain.jpg'
import locationwicon from '../assets/locationwicon.png'
import PopularPlaces from '../Components/PopularPlaces'

function HomeExtention() {
    const [enddate, setEnddate] = useState("");
    const [startdate, setStartdate] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const [address] = useState("77 Galle Rd, Colombo");
    const [phonenum] = useState("+94750213273");
    const contentRef = useRef(null);
    const [shouldShowButton, setShouldShowButton] = useState(false);
    const [aboutme] = useState("about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me");

    const isLargerThan700px = useMediaQuery('(min-width:1100px)');
    const isLargerThan500px = useMediaQuery('(min-width:800px)');

    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setStartdate(currentDate);
        setEnddate(currentDate);
    }, [])


    useLayoutEffect(() => {

        const handleResize = () => {
            setIsExpanded(false);
            if (contentRef.current) {
                const { scrollHeight, offsetHeight } = contentRef.current;

                console.log("shit :.-------------------------------........", scrollHeight, offsetHeight);
                setShouldShowButton(scrollHeight > offsetHeight);
            }
        };

        // Check the content height on mount
        handleResize();

        // Listen to window resize events
        window.addEventListener("resize", handleResize);

        // Clean up event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []); // Only run once on mount


    const toggleExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div>
            {isLargerThan700px && <><br /><br /><br /></>}

            {!isLargerThan700px && isLargerThan500px && <><br /><br /><br /><br /><br /></>}

            {!isLargerThan500px && <><br /><br /><br /><br /><br /><br /></>}

            <Grid container justifyContent='center' textAlign='left'>
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
                <div className={`relative w-full ${!isExpanded ? 'h-[400px]' : 'h-[438px]'}`}>

                    <img src={homefront} className={`absolute  w-full object-cover ${!isExpanded ? 'h-[400px]' : 'h-[438px]'}`} alt="image" />
                    <div className={`absolute w-full bg-[#482E21] opacity-60 ${!isExpanded ? 'h-[400px]' : 'h-[438px]'}`} ></div>

                    {isLargerThan700px &&
                        <div className={`${isExpanded ? '-mt-6' : '-mt-10'}`}>
                            <img src={Hotelmain} alt='HotelICon' className='absolute z-10 w-[400px] h-[400px]'
                                style={{
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
                    }

                </div>

                {isLargerThan700px &&
                    <div className='absolute mt-32 left-[55%]'>
                        <Grid item xs={12} sm={12} position='relative' >
                            <Typography variant='h6' className='[text-shadow:0px_0px_15px_#ffffff] text-[#B4EBD3] font-bold'>
                                Wild Coast Tented Lodge
                            </Typography><div className='h-1' />
                        </Grid>
                        <Grid item xs={12} sm={12} position='relative'>
                            {/* <Grid xs={4.5}> */}
                            <Typography
                                variant="body2"
                                className="text-[#ffffff] font-bold flex items-center space-x-2"
                            >
                                <img src={locationwicon} alt="location" width="18" height="10" />
                                <span>{address}</span>
                                <div className='w-[2px] h-4 bg-[#B4EBD3] m-1' />
                                <span>{phonenum}</span>
                            </Typography>
                            <div className="h-1" />

                            {/* </Grid> */}
                        </Grid>
                        <Grid item xs={12} sm={12} position='relative' >
                            {/* <Grid xs={4.5} className='flex-row'> */}
                            <Typography
                                variant="body2"
                                className={`text-[#ffffff] font-bold max-w-[100%] overflow-x-hidden
                                    ${isExpanded ? 'h-auto overflow-visible line-clamp-none' : 'h-[75px] overflow-hidden line-clamp-3'}`}
                                style={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    // overflow: 'hidden', // Ensure no overflow
                                    // textOverflow: 'ellipsis', // Handles text overflow
                                    // whiteSpace: 'normal', // Break lines when necessary
                                    // wordWrap: 'break-word', // Ensure words break properly
                                    maxWidth: '90%',
                                }}
                                ref={contentRef}
                            >
                                {aboutme}
                            </Typography>
                            {shouldShowButton && (
                                <button
                                    className={`text-[#ffffff] mt-2`}
                                    onClick={toggleExpanded}
                                >
                                    <Typography variant='body2'>
                                        {isExpanded ? 'See Less' : 'See More'}
                                    </Typography>
                                </button>
                            )}
                            {/* </Grid> */}
                        </Grid>
                        <Grid item xs={12} position='relative'>
                            <Button variant='contained' className={`right-[2px] !mt-5 !rounded-[40px] !bg-[#54ACAC] h-[50px] !text-[16px] !text-[#482E21] !normal-case w-[200px]`}>
                                Book Now
                            </Button>
                        </Grid>
                    </div>
                }

                {!isLargerThan700px &&
                    <div className='absolute mt-28'>
                        <Grid item xs={12} sm={12} position='relative' textAlign='center'>
                            <Typography variant='h6' className='[text-shadow:0px_0px_15px_#ffffff] text-[#B4EBD3] font-bold'>
                                Wild Coast Tented Lodge
                            </Typography><div className='h-1' />
                        </Grid>
                        <Grid item xs={12} sm={12} position='relative' justifyItems='center'>
                            <Typography
                                variant="body2"
                                className="text-[#ffffff] font-bold flex items-center space-x-2"
                            >
                                <img src={locationwicon} alt="location" width="18" height="10" />
                                <span>{address}</span>
                                <div className='w-[2px] h-4 bg-[#B4EBD3] m-1' />
                                <span>{phonenum}</span>
                            </Typography>
                            <div className="h-1" />
                        </Grid>

                        <Grid item xs={12} sm={12} justifyItems='center' position='relative'>
                            <Grid item xs={8}>
                                <Typography variant='body2'
                                    className={`text-[#ffffff] font-bold ${isExpanded ? 'h-auto overflow-visible line-clamp-none' : 'h-[75px] overflow-hidden line-clamp-3'} text-ellipsis`}
                                    style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                    }}
                                    ref={contentRef}
                                >
                                    about me about me about me about me about me about me about me about me about me about me about me about me
                                    about me about me about me about me about me about me about me about me about me about me
                                </Typography>
                                {shouldShowButton && (
                                    <>
                                        <button
                                            className={`text-[#ffffff] mt-2`}
                                            onClick={toggleExpanded}
                                        >
                                            <Typography variant='body2'>
                                                {isExpanded ? 'See Less' : 'See More'}
                                            </Typography>
                                        </button><br />
                                    </>
                                )}
                                <Button variant='contained' className={`!mt-5 !rounded-[40px] !bg-[#54ACAC] h-[50px] !text-[16px] !text-[#482E21] !normal-case w-[200px]`}>
                                    Book Now
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                }

            </Grid>


            <PopularPlaces />
        </div >
    )
}

export default HomeExtention