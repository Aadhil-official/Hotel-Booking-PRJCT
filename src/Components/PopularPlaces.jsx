// import React, { useState } from 'react';
// import { Button, Grid, Typography, Box, IconButton } from '@mui/material';
// import { ArrowBack, ArrowForward } from '@mui/icons-material';

// function PopularPlaces() {
//   const [activeButton, setActiveButton] = useState("Nuwara Eliya"); // State to track the active button
//   const [startIndex, setStartIndex] = useState(0); // Track the start index of the visible buttons
//   const visibleButtonsCount = 10; // Number of buttons to display at a time

//   const districts = [
//     "Colombo",
//     "Kandy",
//     "Nuwara Eliya",
//     "Galle",
//     "Badulla",
//     "Anuradhapura",
//     "Matale",
//     "Batticaloa",
//     "Hambantota",
//     "Ampara",
//     "Monaragala",
//   ];

//   // Get the current visible buttons based on startIndex
//   const visibleDistricts = districts.slice(
//     startIndex,
//     startIndex + visibleButtonsCount
//   );

//   const handleButtonClick = (district) => {
//     setActiveButton(district); // Update active button
//   };

//   const handleNext = () => {
//     if (startIndex + visibleButtonsCount < districts.length) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <Box>
//       {/* Title */}
//       <Grid container spacing={2} justifyContent="center" alignItems="center">
//         <Grid item xs={12} textAlign="center">
//           <Typography variant="h6" className="text-[#482E21] font-bold !mt-10">
//             Popular Places
//           </Typography>
//           <Typography className="text-[#778088] !text-[14px] !-mt-1">
//             Select your district to see the popular places in that area
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* Buttons with one-by-one pagination */}
//       <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
//         {/* Previous Button */}
//         <IconButton onClick={handlePrevious} disabled={startIndex === 0}>
//           <ArrowBack />
//         </IconButton>

//         {/* Visible Buttons */}
//         <Box display="flex" gap={1}>
//           {visibleDistricts.map((area, index) => (
//             <Button
//               key={index}
//               variant="contained"
//               className={`!rounded-[40px] !text-[16px] !normal-case ${
//                 activeButton === area
//                   ? "!bg-[#54ACAC] !text-[#482E21]"
//                   : "!bg-[#E0E0E0] !text-[#778088]"
//               }`}
//               onClick={() => handleButtonClick(area)}
//             >
//               {area}
//             </Button>
//           ))}
//         </Box>

//         {/* Next Button */}
//         <IconButton
//           onClick={handleNext}
//           disabled={startIndex + visibleButtonsCount >= districts.length}
//         >
//           <ArrowForward />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

// export default PopularPlaces;



import React, { useState, useRef } from "react";
import { Button, Grid, Typography, Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function PopularPlaces() {
  const [activeButton, setActiveButton] = useState("Nuwara Eliya"); // State to track the active button
  const scrollContainerRef = useRef(null); // Ref for the scrollable container

  const districts = [
    "Colombo",
    "Kandy",
    "Nuwara Eliya",
    "Galle",
    "Badulla",
    "Anuradhapura",
    "Matale",
    "Batticaloa",
    "Hambantota",
    "Ampara",
    "Monaragala",
  ];

  const handleButtonClick = (district) => {
    setActiveButton(district); // Update the active button
  };

  const scrollHorizontally = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 150; // Adjust this value to control the scroll step
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box>
      {/* Title */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h6" className="text-[#482E21] font-bold !mt-10">
            Popular Places
          </Typography>
          <Typography className="text-[#778088] !text-[14px] !-mt-1">
            Select your district to see the popular places in that area
          </Typography>
        </Grid>
      </Grid>

      {/* Buttons with horizontal scroll */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        {/* Previous Scroll Button */}

        {/* Scrollable Container */}
        <Box
          ref={scrollContainerRef}
          display="flex"
          gap={1}
          overflow="auto"
          whiteSpace="nowrap"
          className="scroll-container"
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
            width: "100%",
            marginRight:'-30px'
          }}
        >
          {districts.map((area, index) => (
            <Button
              key={index}
              variant="contained"
              className={`!text-[#482E21] !rounded-[40px] !text-[16px] !normal-case !mb-5 !ml-1 !min-w-[140px]
                ${activeButton === area
                  ? "!bg-[#54ACAC]"
                  : "!bg-[#E0E0E0]"
                }`}
              onClick={() => handleButtonClick(area)}
            >
              {area}
            </Button>
          ))}
        </Box>

        <IconButton onClick={() => scrollHorizontally("left")}>
          <ArrowBack className="absolute mt-20 bg-[#54ACAC] right-8 !w-8 !h-8 rounded-[40px] p-2" />
        </IconButton>

        {/* Next Scroll Button */}
        <IconButton onClick={() => scrollHorizontally("right")}>
          <ArrowForward className="absolute mt-20 bg-[#54ACAC] right-2 !w-8 !h-8 rounded-[40px] p-2" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default PopularPlaces;
