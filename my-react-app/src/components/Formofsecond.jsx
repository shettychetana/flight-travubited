// import React, { useState } from "react";
// import { Box, Grid, Typography, Button, ToggleButton, ToggleButtonGroup, TextField, MenuItem } from "@mui/material";
// import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

// const Flightofsecond = () => {
//   const [tripType, setTripType] = useState("oneway");
//   const [specialFare, setSpecialFare] = useState("regular");

//   return (
//     <Box sx={{ width: "100%", p: 2, bgcolor: "#fff", borderRadius: 2, boxShadow: 3 }}>
      
//       {/* Trip Type Selection */}
//       <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//         {["One Way", "Round Trip", "Multi City"].map((type) => (
//           <Button
//             key={type}
//             variant={tripType === type.toLowerCase() ? "contained" : "outlined"}
//             onClick={() => setTripType(type.toLowerCase())}
//             sx={{ textTransform: "none" }}
//           >
//             {type}
//           </Button>
//         ))}
//       </Box>

//       {/* Main Flight Search Fields */}
//       <Grid container spacing={2} alignItems="center">
//         {/* From */}
//         <Grid item xs={12} sm={5.5}>
//           <TextField fullWidth label="From" defaultValue="Delhi (DEL)" />
//         </Grid>

//         {/* Swap Icon */}
//         <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
//           <SwapHorizIcon fontSize="large" />
//         </Grid>

//         {/* To */}
//         <Grid item xs={12} sm={5.5}>
//           <TextField fullWidth label="To" defaultValue="Bengaluru (BLR)" />
//         </Grid>

//         {/* Departure */}
//         <Grid item xs={6} sm={3}>
//           <TextField fullWidth type="date" label="Departure" defaultValue="2025-02-21" InputLabelProps={{ shrink: true }} />
//         </Grid>

//         {/* Return (Hidden for One Way) */}
//         {tripType !== "oneway" && (
//           <Grid item xs={6} sm={3}>
//             <TextField fullWidth type="date" label="Return" InputLabelProps={{ shrink: true }} />
//           </Grid>
//         )}

//         {/* Travellers & Class */}
//         <Grid item xs={6} sm={3}>
//           <TextField select fullWidth label="Travellers & Class" defaultValue="1">
//             <MenuItem value="1">1 Traveller - Economy</MenuItem>
//             <MenuItem value="2">2 Travellers - Business</MenuItem>
//           </TextField>
//         </Grid>
//       </Grid>

//       {/* Special Fare Selection */}
//       <Typography variant="subtitle1" sx={{ mt: 2 }}>
//         Select a special fare:
//       </Typography>
//       <ToggleButtonGroup value={specialFare} exclusive onChange={(e, value) => setSpecialFare(value)}>
//         {["Regular", "Student", "Senior Citizen", "Armed Forces", "Doctor & Nurses"].map((fare) => (
//           <ToggleButton key={fare} value={fare.toLowerCase()} sx={{ textTransform: "none" }}>
//             {fare}
//           </ToggleButton>
//         ))}
//       </ToggleButtonGroup>

//       {/* Search Button */}
//       <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
//         <Button variant="contained" size="large" sx={{ width: "50%" }}>
//           Search
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Flightofsecond;
// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Button,
//   ToggleButton,
//   ToggleButtonGroup,
//   TextField,
//   Tabs,
//   Tab,
//   IconButton,
// } from "@mui/material";
// import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// const MAX_CITIES = 6;

// const Formofsecond = () => {
//   const [tripType, setTripType] = useState(0);
//   const [specialFare, setSpecialFare] = useState("regular");

//   // Default State for One Way and Round Trip
//   const [singleTrip, setSingleTrip] = useState({
//     from: "Delhi (DEL)",
//     to: "Bengaluru (BLR)",
//     departure: "2025-02-21",
//     returnDate: "", // Only used for Round Trip
//   });

//   // Default State for Multi-City (can have multiple routes)
//   const [cities, setCities] = useState([
//     { from: "Delhi (DEL)", to: "Bengaluru (BLR)", date: "2025-02-21" },
//   ]);

//   // Handle Trip Type Switch
//   const handleTabChange = (event, newValue) => {
//     setTripType(newValue);

//     // Reset form values when switching
//     if (newValue === 0 || newValue === 1) {
//       setCities([{ from: "Delhi (DEL)", to: "Bengaluru (BLR)", date: "2025-02-21" }]); // Reset Multi-City
//     }
//   };

//   // Add new city route (max 6)
//   const handleAddCity = () => {
//     if (cities.length < MAX_CITIES) {
//       setCities([...cities, { from: "", to: "", date: "" }]);
//     }
//   };

//   // Remove a city route
//   const handleRemoveCity = (index) => {
//     const newCities = cities.filter((_, i) => i !== index);
//     setCities(newCities);
//   };

//   return (
//     <Box sx={{ width: "100%", p: 3, bgcolor: "#fff", borderRadius: 2, boxShadow: 3 }}>
      
//       {/* Tabs for One Way, Round Trip, Multi-City */}
//       <Tabs
//         value={tripType}
//         onChange={handleTabChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         <Tab label="One Way" />
//         <Tab label="Round Trip" />
//         <Tab label="Multi City" />
//       </Tabs>

//       {/* Search Fields */}
//       <Box sx={{ mt: 3 }}>
//         {/* One Way & Round Trip */}
//         {tripType !== 2 && (
//           <Grid container spacing={2} alignItems="center">
//             {/* From */}
//             <Grid item xs={12} sm={5}>
//               <TextField fullWidth label="From" value={singleTrip.from} />
//             </Grid>

//             {/* Swap Icon */}
//             <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
//               <SwapHorizIcon fontSize="large" />
//             </Grid>

//             {/* To */}
//             <Grid item xs={12} sm={5}>
//               <TextField fullWidth label="To" value={singleTrip.to} />
//             </Grid>

//             {/* Departure */}
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth type="date" label="Departure" value={singleTrip.departure} InputLabelProps={{ shrink: true }} />
//             </Grid>

//             {/* Return Date - Only for Round Trip */}
//             {tripType === 1 && (
//               <Grid item xs={12} sm={4}>
//                 <TextField fullWidth type="date" label="Return" value={singleTrip.returnDate} InputLabelProps={{ shrink: true }} />
//               </Grid>
//             )}
//           </Grid>
//         )}

//         {/* Multi-City */}
//         {tripType === 2 &&
//           cities.map((city, index) => (
//             <Grid container spacing={2} alignItems="center" key={index} sx={{ mb: 2 }}>
//               {/* From */}
//               <Grid item xs={12} sm={5}>
//                 <TextField fullWidth label="From" value={city.from} />
//               </Grid>

//               {/* Swap Icon */}
//               <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
//                 <SwapHorizIcon fontSize="large" />
//               </Grid>

//               {/* To */}
//               <Grid item xs={12} sm={5}>
//                 <TextField fullWidth label="To" value={city.to} />
//               </Grid>

//               {/* Departure */}
//               <Grid item xs={12} sm={4}>
//                 <TextField fullWidth type="date" label="Departure" value={city.date} InputLabelProps={{ shrink: true }} />
//               </Grid>

//               {/* Remove Button */}
//               {index > 0 && (
//                 <Grid item xs={12} sm={2}>
//                   <IconButton onClick={() => handleRemoveCity(index)} color="error">
//                     <RemoveIcon />
//                   </IconButton>
//                 </Grid>
//               )}
//             </Grid>
//           ))}

//         {/* Add City Button (Only for Multi-City) */}
//         {tripType === 2 && cities.length < MAX_CITIES && (
//           <Box sx={{ mb: 2 }}>
//             <Button variant="outlined" startIcon={<AddIcon />} onClick={handleAddCity}>
//               Add Another City
//             </Button>
//           </Box>
//         )}

//         {/* Special Fare Selection */}
//         <Typography variant="subtitle1" sx={{ mt: 2 }}>
//           Select a special fare:
//         </Typography>
//         <ToggleButtonGroup value={specialFare} exclusive onChange={(e, value) => setSpecialFare(value)}>
//           {["Regular", "Student", "Senior Citizen", "Armed Forces", "Doctor & Nurses"].map((fare) => (
//             <ToggleButton key={fare} value={fare.toLowerCase()} sx={{ textTransform: "none" }}>
//               {fare}
//             </ToggleButton>
//           ))}
//         </ToggleButtonGroup>

//         {/* Search Button */}
//         <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
//           <Button variant="contained" size="large" sx={{ width: "50%" }}>
//             Search
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Formofsecond;

// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Button,
//   ToggleButton,
//   ToggleButtonGroup,
//   TextField,
//   Tabs,
//   Tab,
//   IconButton,
//   useMediaQuery,
// } from "@mui/material";
// import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { useTheme } from "@mui/material/styles";

// const MAX_CITIES = 6;

// const Formofsecond = () => {
//   const [tripType, setTripType] = useState(0);
//   const [specialFare, setSpecialFare] = useState("regular");
//   const [singleTrip, setSingleTrip] = useState({
//     from: "Delhi (DEL)",
//     to: "Bengaluru (BLR)",
//     departure: "2025-02-21",
//     returnDate: "",
//   });

//   const [cities, setCities] = useState([
//     { from: "Delhi (DEL)", to: "Bengaluru (BLR)", date: "2025-02-21" },
//   ]);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const handleTabChange = (event, newValue) => {
//     setTripType(newValue);
//     if (newValue === 0 || newValue === 1) {
//       setCities([{ from: "Delhi (DEL)", to: "Bengaluru (BLR)", date: "2025-02-21" }]);
//     }
//   };

//   const handleAddCity = () => {
//     if (cities.length < MAX_CITIES) {
//       setCities([...cities, { from: "", to: "", date: "" }]);
//     }
//   };

//   const handleRemoveCity = (index) => {
//     setCities(cities.filter((_, i) => i !== index));
//   };

//   return (
//     <Box sx={{ width: "100%", p: 3, bgcolor: "#fff", borderRadius: 2, boxShadow: 3 }}>
//       <Tabs value={tripType} onChange={handleTabChange} indicatorColor="primary" textColor="primary" centered>
//         <Tab label="One Way" />
//         <Tab label="Round Trip" />
//         <Tab label="Multi City" />
//       </Tabs>

//       <Box sx={{ mt: 3 }}>
//         {/* One Way & Round Trip */}
//         {tripType !== 2 && (
//           <Grid container spacing={2} alignItems="center" sx={{ flexWrap: isMobile ? "wrap" : "nowrap" }}>
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="From" value={singleTrip.from} />
//             </Grid>
//             <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
//               {/* <SwapHorizIcon fontSize="large" /> */}
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="To" value={singleTrip.to} />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <TextField fullWidth type="date" label="Departure" value={singleTrip.departure} InputLabelProps={{ shrink: true }} />
//             </Grid>
//             {tripType === 1 && (
//               <Grid item xs={12} sm={3}>
//                 <TextField fullWidth type="date" label="Return" value={singleTrip.returnDate} InputLabelProps={{ shrink: true }} />
//               </Grid>
//             )}
//           </Grid>
//         )}

//         {/* Multi-City */}
//         {tripType === 2 &&
//           cities.map((city, index) => (
//             <Grid container spacing={2} alignItems="center" key={index} sx={{ flexWrap: isMobile ? "wrap" : "nowrap", mb: 2 }}>
//               <Grid item xs={12} sm={4}>
//                 <TextField fullWidth label="From" value={city.from} />
//               </Grid>
//               <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
//                 {/* <SwapHorizIcon fontSize="large" /> */}
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField fullWidth label="To" value={city.to} />
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <TextField fullWidth type="date" label="Departure" value={city.date} InputLabelProps={{ shrink: true }} />
//               </Grid>
//               {index > 0 && (
//                 <Grid item xs={12} sm={1}>
//                   <IconButton onClick={() => handleRemoveCity(index)} color="error">
//                     <RemoveIcon />
//                   </IconButton>
//                 </Grid>
//               )}
//             </Grid>
//           ))}

//         {tripType === 2 && cities.length < MAX_CITIES && (
//           <Box sx={{ mb: 2 }}>
//             <Button variant="outlined" startIcon={<AddIcon />} onClick={handleAddCity}>
//               Add Another City
//             </Button>
//           </Box>
//         )}

//         <Typography variant="subtitle1" sx={{ mt: 2 }}>
//           Select a special fare:
//         </Typography>
//         <ToggleButtonGroup value={specialFare} exclusive onChange={(e, value) => setSpecialFare(value)}>
//           {["Regular", "Student", "Senior Citizen", "Armed Forces", "Doctor & Nurses"].map((fare) => (
//             <ToggleButton key={fare} value={fare.toLowerCase()} sx={{ textTransform: "none" }}>
//               {fare}
//             </ToggleButton>
//           ))}
//         </ToggleButtonGroup>

//         <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
//           <Button variant="contained" size="large" sx={{ width: "50%" }}>
//             Search
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Formofsecond;
// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Button,
//   ToggleButton,
//   ToggleButtonGroup,
//   TextField,
//   Tabs,
//   Tab,
//   IconButton,
//   useMediaQuery,
// } from "@mui/material";
// import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { useTheme } from "@mui/material/styles";

// const MAX_CITIES = 6;

// const FlightSearch = () => {
//   const [tripType, setTripType] = useState(0);
//   const [specialFare, setSpecialFare] = useState("regular");
//   const [cities, setCities] = useState([
//     { from: "Delhi (DEL)", to: "Bengaluru (BLR)", date: "2025-02-21" },
//   ]);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   // Add new city (max 6)
//   const handleAddCity = () => {
//     if (cities.length < MAX_CITIES) {
//       setCities([...cities, { from: "", to: "", date: "" }]);
//     }
//   };

//   // Remove a city
//   const handleRemoveCity = (index) => {
//     const newCities = cities.filter((_, i) => i !== index);
//     setCities(newCities);
//   };

//   return (
//     <Box sx={{ width: "100%", p: 3, bgcolor: "#fff", borderRadius: 2, boxShadow: 3 }}>
//       {/* Tabs for One Way, Round Trip, Multi-City */}
//       <Tabs
//         value={tripType}
//         onChange={(e, newValue) => setTripType(newValue)}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         <Tab label="One Way" />
//         <Tab label="Round Trip" />
//         <Tab label="Multi City" />
//       </Tabs>

//       {/* Search Fields */}
//       <Box sx={{ mt: 3 }}>
//         {cities.map((city, index) => (
//           <Grid
//             container
//             spacing={2}
//             alignItems="center"
//             key={index}
//             sx={{
//               flexWrap: isMobile ? "wrap" : "nowrap",
//               justifyContent: "space-between",
//             }}
//           >
//             {/* From */}
//             <Grid item xs={12} sm={3}>
//               <TextField fullWidth label="From" value={city.from} />
//             </Grid>

//             {/* Swap Icon */}
//             <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
//               <SwapHorizIcon fontSize="large" />
//             </Grid>

//             {/* To */}
//             <Grid item xs={12} sm={3}>
//               <TextField fullWidth label="To" value={city.to} />
//             </Grid>

//             {/* Departure Date */}
//             <Grid item xs={12} sm={3}>
//               <TextField
//                 fullWidth
//                 type="date"
//                 label="Departure"
//                 value={city.date}
//                 InputLabelProps={{ shrink: true }}
//               />
//             </Grid>

//             {/* Remove Button */}
//             {index > 0 && (
//               <Grid item xs={12} sm={1}>
//                 <IconButton onClick={() => handleRemoveCity(index)} color="error">
//                   <RemoveIcon />
//                 </IconButton>
//               </Grid>
//             )}
//           </Grid>
//         ))}

//         {/* Add City Button (Only for Multi-City) */}
//         {tripType === 2 && cities.length < MAX_CITIES && (
//           <Box sx={{ mt: 2, mb: 2 }}>
//             <Button variant="outlined" startIcon={<AddIcon />} onClick={handleAddCity}>
//               Add Another City
//             </Button>
//           </Box>
//         )}

//         {/* Special Fare Selection */}
//         <Typography variant="subtitle1" sx={{ mt: 2 }}>
//           Select a special fare:
//         </Typography>
//         <ToggleButtonGroup
//           value={specialFare}
//           exclusive
//           onChange={(e, value) => setSpecialFare(value)}
//         >
//           {["Regular", "Student", "Senior Citizen", "Armed Forces", "Doctor & Nurses"].map(
//             (fare) => (
//               <ToggleButton key={fare} value={fare.toLowerCase()} sx={{ textTransform: "none" }}>
//                 {fare}
//               </ToggleButton>
//             )
//           )}
//         </ToggleButtonGroup>

//         {/* Search Button */}
//         <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
//           <Button variant="contained" size="large" sx={{ width: "50%" }}>
//             SEARCH
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default FlightSearch;
import React, { useState } from "react";
import {
  
  Grid,
  
  Button,
  
  
  TextField,
  Tabs,
  Tab,
  IconButton,
  
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material/styles";

import { Box, Typography, ToggleButton, ToggleButtonGroup, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MAX_CITIES = 6;

const Formofsecond = () => {
    
  const [tripType, setTripType] = useState(0); // 0 = One Way, 1 = Round Trip, 2 = Multi City
 

  const [cities, setCities] = useState([
    { from: "Delhi (DEL)", to: "Bengaluru (BLR)", departure: "2025-02-21", return: "" },
  ]);

  const theme = useTheme();


  const handleTabChange = (event, newValue) => {
    setTripType(newValue);
  
    // Reset cities when switching away from MultiCity
    if (newValue !== 2) {
      setCities([{ from: "Delhi (DEL)", to: "Bengaluru (BLR)", date: "2025-02-21" }]);
    }
  };
  const [specialFare, setSpecialFare] = useState("regular");
  const isMobile = useMediaQuery("(max-width:1024px)"); // Check if screen size is mobile

  const fareOptions = [
    { label: "Regular", value: "regular" },
    { label: "Student", value: "student" },
    { label: "Senior Citizen", value: "senior" },
    { label: "Armed Forces", value: "armed" },
    { label: "Doctor & Nurses", value: "doctor" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  
  // Add new city (only for Multi-City)
  const handleAddCity = () => {
    if (cities.length < MAX_CITIES) {
      setCities([...cities, { from: "", to: "", departure: "", return: "" }]);
    }
  };

  // Remove a city
  const handleRemoveCity = (index) => {
    const newCities = cities.filter((_, i) => i !== index);
    setCities(newCities);
  };

  // Update city details
  const handleCityChange = (index, field, value) => {
    const updatedCities = [...cities];
    updatedCities[index][field] = value;
    setCities(updatedCities);
  };

  return (
    <Box sx={{ width: "100%", p: 3, bgcolor: "#fff", borderRadius: 2, boxShadow: 3 }}>
      {/* Tabs for One Way, Round Trip, Multi-City */}
      <Tabs
  value={tripType}
  onChange={handleTabChange} // Call function to reset state
  sx={{
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "8px",
    backgroundColor: "#f8f8f8",
    padding: "5px",
    "& .MuiTab-root": {
      flex: 1,
      maxWidth: "unset",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    "& .Mui-selected": {
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "8px",
    },
  }}
>
  <Tab label="One Way" />
  <Tab label="RoundTrip" />
  <Tab label="MultiCity" />
</Tabs>


      {/* Search Fields */}
      <Box sx={{ mt: 3 }}>
        {cities.map((city, index) => (
          <Grid
            container
            spacing={2}
            alignItems="center"
            key={index}
            sx={{
              flexWrap: isMobile ? "wrap" : "nowrap",
              justifyContent: "space-between",
            }}
          >
            {/* From */}
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="From" value={city.from} onChange={(e) => handleCityChange(index, "from", e.target.value)} />
            </Grid>

            {/* Swap Icon */}
            <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
              <SwapHorizIcon fontSize="large" />
            </Grid>

            {/* To */}
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="To" value={city.to} onChange={(e) => handleCityChange(index, "to", e.target.value)} />
            </Grid>

            {/* Departure Date */}
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                type="date"
                label="Departure"
                value={city.departure}
                onChange={(e) => handleCityChange(index, "departure", e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Return Date (Only for Round Trip) */}
            {tripType === 1 && (
              <Grid item xs={12} sm={2}>
                <TextField
                  fullWidth
                  type="date"
                  label="Return"
                  value={city.return}
                  onChange={(e) => handleCityChange(index, "return", e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            )}

            {/* Remove Button (Only for Multi-City) */}
            {tripType === 2 && index > 0 && (
              <Grid item xs={12} sm={1}>
                <IconButton onClick={() => handleRemoveCity(index)} color="error">
                  <RemoveIcon />
                </IconButton>
              </Grid>
            )}
          </Grid>
        ))}

        {/* Add City Button (Only for Multi-City) */}
        {tripType === 2 && cities.length < MAX_CITIES && (
          <Box sx={{ mt: 2, mb: 2 }}>
            <Button variant="outlined" startIcon={<AddIcon />} onClick={handleAddCity}>
              Add Another City
            </Button>
          </Box>
        )}

        {/* Special Fare Selection */}
        <Box sx={{ mt: 3 }}>
  <Typography variant="subtitle1" sx={{ mb: 1 }}>
    Select a special fare:
  </Typography>

  {/* Desktop View (No Carousel) */}
  {!isMobile ? (
    <ToggleButtonGroup
      value={specialFare}
      exclusive
      onChange={(e, value) => setSpecialFare(value)}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {fareOptions.map((fare) => (
        <ToggleButton
          key={fare.value}
          value={fare.value}
          sx={{
            textTransform: "none",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px 20px",
            minWidth: "150px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "&.Mui-selected": {
              borderColor: "#007bff",
              backgroundColor: "#eaf4ff",
              color: "#007bff",
            },
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{fare.label}</Typography>
          <Typography sx={{ color: "#008080", fontSize: "14px" }}>
            Up to ₹600 off
          </Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  ) : (
    // Mobile View (Carousel)
    <Slider {...sliderSettings}>
      {fareOptions.map((fare) => (
        <ToggleButton
          key={fare.value}
          value={fare.value}
          sx={{
            textTransform: "none",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px 20px",
            width: "140px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "&.Mui-selected": {
              borderColor: "#007bff",
              backgroundColor: "#eaf4ff",
              color: "#007bff",
            },
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{fare.label}</Typography>
          <Typography sx={{ color: "#008080", fontSize: "14px" }}>
            Up to ₹600 off
          </Typography>
        </ToggleButton>
      ))}
    </Slider>
  )}
</Box>


        {/* Search Button */}
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="large" sx={{ width: "50%" }}>
            SEARCH
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Formofsecond;
