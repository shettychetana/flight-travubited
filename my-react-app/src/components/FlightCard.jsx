// import React from "react";
// import { Card, CardContent, Typography, Button, Grid, Divider } from "@mui/material";

// const FlightCard = ({ flight }) => {
//   const airlineCode = flight?.sI[0]?.fD?.aI?.code || "default";
//   const airlineName = flight?.sI[0]?.fD?.aI?.name || "Unknown Airline";
//   const departureTime = flight?.sI[0]?.dt || "N/A";
//   const arrivalTime = flight?.sI[0]?.at || "N/A";
//   const duration = flight?.sI[0]?.duration || "N/A";
//   const stops = flight?.sI[0]?.stops === 0 ? "Non-stop" : `${flight?.sI[0]?.stops} Stop(s)`;
//   const price = flight?.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || "N/A";

//   return (
//     <Card variant="outlined" sx={{ mb: 2, p: 2 }}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           {/* Airline Logo & Name */}
//           <Grid item xs={3} sx={{ textAlign: "center" }}>
//             <img
//               src={`/AirlinesLogo/${airlineCode}.png`}
//               alt={airlineName}
//               style={{ width: 50, height: "auto" }}
//             />
//             <Typography variant="h6">{airlineName}</Typography>
//           </Grid>

//           {/* Flight Details */}
//           <Grid item xs={6}>
//             <Typography>
//               <strong>{departureTime}</strong> - <strong>{arrivalTime}</strong>
//             </Typography>
//             <Typography color="textSecondary">{stops}</Typography>
//             <Typography color="textSecondary">arrival : {flight?.sI[0]?.aa.city}</Typography>
//             <Typography color="textSecondary">departure : {flight?.sI[0]?.da.city}</Typography>
//             <Typography color="textSecondary">{duration}</Typography>
//           </Grid>

//           {/* Price & Button */}
//           <Grid item xs={3} sx={{ textAlign: "right" }}>
//             <Typography variant="h6" color="error">₹{price}</Typography>
//             <Button variant="contained" sx={{ mt: 1, backgroundColor: "#FF6748" }}>
//               View Deals
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//       <Divider />
//     </Card>
//   );
// };

// export default FlightCard;
// import React from "react";
// import { Card, CardContent, Typography, Button, Grid, Divider, Box } from "@mui/material";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import FlightLandIcon from "@mui/icons-material/FlightLand";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LuggageIcon from "@mui/icons-material/Luggage";

// // Utility function to format time
// const formatTime = (dateTime) => {
//   const date = new Date(dateTime);
//   return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
// };

// const FlightCard = ({ flight }) => {
//   const airlineCode = flight?.sI[0]?.fD?.aI?.code || "default";
//   const airlineName = flight?.sI[0]?.fD?.aI?.name || "Unknown Airline";
//   const flightNumber = flight?.sI[0]?.fD?.fN || "N/A";
//   const departureTime = formatTime(flight?.sI[0]?.dt || "N/A");
//   const arrivalTime = formatTime(flight?.sI[0]?.at || "N/A");
//   const duration = flight?.sI[0]?.duration || "N/A";
//   const stops = flight?.sI[0]?.stops === 0 ? "Non-stop" : `${flight?.sI[0]?.stops} Stop(s)`;
//   const departureCity = flight?.sI[0]?.da?.city || "Unknown";
//   const arrivalCity = flight?.sI[0]?.aa?.city || "Unknown";
//   const baggage = flight?.totalPriceList?.[0]?.fd?.ADULT?.bI?.iB || "N/A";
//   const cabinBaggage = flight?.totalPriceList?.[0]?.fd?.ADULT?.bI?.cB || "N/A";
//   const price = flight?.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || "N/A";

//   return (
//     <Card variant="outlined" sx={{ mb: 2, p: 2, borderRadius: 3 }}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           {/* Airline Logo & Name */}
//           <Grid item xs={3} sx={{ textAlign: "center" }}>
//             <img
//               src={`/AirlinesLogo/${airlineCode}.png`}
//               alt={airlineName}
//               style={{ width: 50, height: "auto" }}
//             />
//             <Typography variant="h6">{airlineName}</Typography>
//             <Typography variant="body2" color="textSecondary">
//               {flightNumber}
//             </Typography>
//           </Grid>

//           {/* Flight Details */}
//           <Grid item xs={6}>
//             <Box display="flex" alignItems="center">
//               <FlightTakeoffIcon color="primary" sx={{ mr: 1 }} />
//               <Typography>
//                 <strong>{departureTime}</strong> - {departureCity}
//               </Typography>
//             </Box>

//             <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
//               <FlightLandIcon color="secondary" sx={{ mr: 1 }} />
//               <Typography>
//                 <strong>{arrivalTime}</strong> - {arrivalCity}
//               </Typography>
//             </Box>

//             <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
//               <AccessTimeIcon color="disabled" sx={{ mr: 1 }} />
//               <Typography color="textSecondary">{duration} min • {stops}</Typography>
//             </Box>

//             <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
//               <LuggageIcon color="success" sx={{ mr: 1 }} />
//               <Typography color="textSecondary">
//                 {baggage} • Cabin: {cabinBaggage}
//               </Typography>
//             </Box>
//           </Grid>

//           {/* Price & Button */}
//           <Grid item xs={3} sx={{ textAlign: "right" }}>
//             <Typography variant="h6" color="error">
//               ₹{price}
//             </Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 mt: 1,
//                 backgroundColor: "#FF6748",
//                 "&:hover": { backgroundColor: "#d9553d" },
//               }}
//             >
//               View Deals
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//       <Divider />
//     </Card>
//   );
// };

// export default FlightCard;



// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
//   Button,
//   Divider,
//   Grid,
//   Box,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import {
//   FlightTakeoff,
//   FlightLand,
//   AccessTime,
//   Luggage,
// } from "@mui/icons-material";

// const formatTime = (dateTime) => {
//   const date = new Date(dateTime);
//   return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
// };

// const FlightCard = ({ flight }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [tabIndex, setTabIndex] = useState(0);

//   return (
//     <Card sx={{  mx: "auto", p: 2, boxShadow: 3, borderRadius: 2 }}>
//       <CardHeader
//         title={
//           <Typography variant="h6" fontWeight="bold">
//             {flight.fD?.aI?.name || "Unknown Airline"} ({flight.fD?.fN})
//           </Typography>
//         }
//         action={
//           <Typography variant="h6" color="error" fontWeight="bold">
//             ₹{flight.price || "-"}
//           </Typography>
//         }
//       />
//       <CardContent>
//         <Divider sx={{ mb: 2 }} />
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={5}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <FlightTakeoff color="primary" />
//               <Typography fontWeight="bold">
//                 {flight.sI[0].da.city} ({flight.sI[0].da.code}) - {formatTime(flight.dt)}
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={2} textAlign="center">
//             <AccessTime color="action" />
//             <Typography variant="body2" color="textSecondary">
//               {flight.duration} mins
//             </Typography>
//           </Grid>
//           <Grid item xs={5}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <FlightLand color="success" />
//               <Typography fontWeight="bold">
//                 {flight.sI[0].aa.city} ({flight.sI[0].aa.code}) - {formatTime(flight.at)}
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//         {flight.sI.length > 1 && (
//           <Typography color="textSecondary" sx={{ mt: 1, textAlign: "center" }}>
//             Layover: {flight.sI[0].layoverTime || "N/A"} at {flight.sI[0].aa.city}
//           </Typography>
//         )}
//       </CardContent>
//       <Divider />
//       <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#FF6748", "&:hover": { backgroundColor: "#d9553d" } }}
//         >
//           Book Now
//         </Button>
//         <Button onClick={() => setExpanded(!expanded)}>
//           {expanded ? "Hide Details" : "View More"}
//         </Button>
//       </CardContent>
//       {expanded && (
//         <CardContent>
//           <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)}>
//             <Tab label="Flight Details" />
//             <Tab label="Fare Details" />
//             <Tab label="Fare Rules" />
//             <Tab label="Baggage Information" />
//           </Tabs>
//           {tabIndex === 0 && (
//             <Box p={2}>
//               <Typography variant="subtitle1">Flight Details</Typography>
//               <Typography variant="body2">Layover: {flight.sI[0].layoverTime || "N/A"}</Typography>
//             </Box>
//           )}
//           {tabIndex === 1 && (
//             <Box p={2}>
//               <Typography variant="subtitle1">Fare Details</Typography>
//               <Typography variant="body2">Base Price: ₹{flight.basePrice}</Typography>
//               <Typography variant="body2">Taxes & Fees: ₹{flight.taxes}</Typography>
//               <Typography variant="body1" fontWeight="bold">Total: ₹{flight.price}</Typography>
//             </Box>
//           )}
//           {tabIndex === 2 && (
//             <Box p={2}>
//               <Typography variant="subtitle1">Fare Rules</Typography>
//               <Typography variant="body2">Cancellation Fee: ₹{flight.cancellationFee}</Typography>
//             </Box>
//           )}
//           {tabIndex === 3 && (
//             <Box p={2}>
//               <Typography variant="subtitle1">Baggage Information</Typography>
//               <Typography variant="body2">Check-in: {flight.baggage.checkIn} Kg</Typography>
//               <Typography variant="body2">Cabin: {flight.baggage.cabin} Kg</Typography>
//             </Box>
//           )}
//         </CardContent>
//       )}
//     </Card>
//   );
// };

// export default FlightCard;
// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
//   Button,
//   Divider,
//   Grid,
//   Box,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import {
//   FlightTakeoff,
//   FlightLand,
//   AccessTime,
//   Luggage,
// } from "@mui/icons-material";

// const formatDateTime = (dateTime) => {
//   const date = new Date(dateTime);
//   return `${date.toLocaleDateString("en-US")} ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}`;
// };

// const FlightCard = ({ flight }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [tabIndex, setTabIndex] = useState(0);
//   const airlineCode = flight?.sI[0]?.fD?.aI?.code || "default";
//   const airlineName = flight?.sI[0]?.fD?.aI?.name || "Unknown Airline";
//     const departureTime = flight?.sI[0]?.dt || "N/A";
//     const arrivalTime = flight?.sI[0]?.at || "N/A";
//     const duration = flight?.sI[0]?.duration || "N/A";
//     const stops = flight?.sI[0]?.stops === 0 ? "Non-stop" : `${flight?.sI[0]?.stops} Stop(s)`;
//     const price = flight?.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || "N/A";
//   return (
//     <Card sx={{  mx: "auto", p: 2, boxShadow: 3, borderRadius: 2 }}>
//       <CardHeader
//         title={
//         //   <Box display="flex" alignItems="center" gap={1}>
//         //     <img src={flight.fD?.aI?.logo || "default-logo.png"} alt="Airline Logo" width={40} height={40} />
//         //     <Typography variant="h6" fontWeight="bold">
//         //       {flight.fD?.aI?.name || "Unknown Airline"} ({flight.fD?.fN})
//         //     </Typography>
//         //   </Box>
//                   <Grid item xs={3} sx={{ textAlign: "center" }}>
//             <img
//               src={`/AirlinesLogo/${airlineCode}.png`}
//               alt={airlineName}
//               style={{ width: 50, height: "auto" }}
//             />
//             <Typography variant="h6">{airlineName}</Typography>
//           </Grid>
//         }
//         action={
//           <Typography variant="h6" color="error" fontWeight="bold">
//             {price}
//           </Typography>
//         }
//       />
//       <CardContent>
//         <Divider sx={{ mb: 2 }} />
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={5}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <FlightTakeoff color="primary" />
//               <Typography fontWeight="bold">
//                 {flight.sI[0].da.city} ({flight.sI[0].da.code}) -  {departureTime}
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={2} textAlign="center">
//             <AccessTime color="action" />
//             <Typography variant="body2" color="textSecondary">
//               {flight.duration} mins
//             </Typography>
//           </Grid>
//           <Grid item xs={5}>
//             <Box display="flex" alignItems="center" gap={1}>
//               <FlightLand color="success" />
//               <Typography fontWeight="bold">
//                 {flight.sI[0].aa.city} ({flight.sI[0].aa.code}) - {arrivalTime}
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//         {flight.sI.length > 1 && (
//           <Typography color="textSecondary" sx={{ mt: 1, textAlign: "center" }}>
//             Layover: {flight.sI[0].layoverTime || "N/A"} at {flight.sI[0].aa.city}
//           </Typography>
//         )}
//       </CardContent>
//       <Divider />
//       <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#FF6748", "&:hover": { backgroundColor: "#d9553d" } }}
//         >
//           Book Now
//         </Button>
//         <Button onClick={() => setExpanded(!expanded)}>
//           {expanded ? "Hide Details" : "View More"}
//         </Button>
//       </CardContent>
//       {expanded && (
//         <CardContent>
//           <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)}>
//             <Tab label="Flight Details" />
//             <Tab label="Fare Details" />
//             <Tab label="Fare Rules" />
//             <Tab label="Baggage Information" />
//           </Tabs>
//           {tabIndex === 0 && (
//             <Box p={2}>
//               <Typography variant="subtitle1">Flight Details</Typography>
//               <Typography variant="body2">Layover: {flight.sI[0].layoverTime || "N/A"}</Typography>
//             </Box>
//           )}
//           {tabIndex === 1 && (
//             <Box p={2}>
//               <Typography variant="subtitle1">Fare Details</Typography>
//               <Typography variant="body2">Base Price: ₹{flight.basePrice}</Typography>
//               <Typography variant="body2">Taxes & Fees: ₹{flight.taxes}</Typography>
//               <Typography variant="body1" fontWeight="bold">Total: ₹{flight.price}</Typography>
//             </Box>
//           )}
//           {tabIndex === 2 && (
//             <Box p={2}>
//               <Typography variant="subtitle1">Fare Rules</Typography>
//               <Typography variant="body2">Cancellation Fee: ₹{flight.cancellationFee}</Typography>
//             </Box>
//           )}
//           {tabIndex === 3 && (
//             <Box p={2}>
//               <Typography variant="subtitle1">Baggage Information</Typography>
//               <Typography variant="body2">Check-in: {flight.baggage.checkIn} Kg</Typography>
//               <Typography variant="body2">Cabin: {flight.baggage.cabin} Kg</Typography>
//             </Box>
//           )}
//         </CardContent>
//       )}
//     </Card>
//   );
// };

// export default FlightCard;

// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   Button,
//   Divider,
//   Box,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from "@mui/material";
// import {
//   FlightTakeoff,
//   FlightLand,
//   AccessTime,
// } from "@mui/icons-material";

// const FlightCard = ({ flight }) => {
//   const [selectedFare, setSelectedFare] = useState(0);

//   const airlineCode = flight?.sI[0]?.fD?.aI?.code || "default";
//   const airlineName = flight?.sI[0]?.fD?.aI?.name || "Unknown Airline";
//   const departureTime = flight?.sI[0]?.dt || "N/A";
//   const arrivalTime = flight?.sI[0]?.at || "N/A";
//   const duration = flight?.sI[0]?.duration || "N/A";
//   const stops = flight?.sI[0]?.stops === 0 ? "Non-stop" : `${flight?.sI[0]?.stops} Stop(s)`;
//   const fares = flight?.totalPriceList || [];

//   return (
//     <Card sx={{ mx: "auto", p: 2, boxShadow: 3, borderRadius: 2 }}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item xs={2} sx={{ textAlign: "center" }}>
//             <img
//               src={`/AirlinesLogo/${airlineCode}.png`}
//               alt={airlineName}
//               style={{ width: 50, height: "auto" }}
//             />
//             <Typography variant="subtitle1" fontWeight="bold">{airlineName}</Typography>
//           </Grid>
//           <Grid item xs={3}>
//             <Typography variant="body1" fontWeight="bold">{departureTime}</Typography>
//             <Typography variant="body2" color="textSecondary">{flight.sI[0].da.city} ({flight.sI[0].da.code})</Typography>
//           </Grid>
//           <Grid item xs={2} sx={{ textAlign: "center" }}>
//             <AccessTime color="action" />
//             <Typography variant="body2" color="textSecondary">{duration}</Typography>
//             <Typography variant="body2" color="textSecondary">{stops}</Typography>
//           </Grid>
//           <Grid item xs={3}>
//             <Typography variant="body1" fontWeight="bold">{arrivalTime}</Typography>
//             <Typography variant="body2" color="textSecondary">{flight.sI[0].aa.city} ({flight.sI[0].aa.code})</Typography>
//           </Grid>
//           <Grid item xs={2}>
//             <Button variant="contained" sx={{ backgroundColor: "#FF6748", "&:hover": { backgroundColor: "#d9553d" } }}>BOOK</Button>
//           </Grid>
//         </Grid>
//         <Divider sx={{ my: 2 }} />
//         <RadioGroup value={selectedFare} onChange={(e) => setSelectedFare(parseInt(e.target.value))}>
//           {fares.map((fare, index) => (
//             <Box key={index} display="flex" alignItems="center" justifyContent="space-between" sx={{ py: 1 }}>
//               <FormControlLabel
//                 value={index}
//                 control={<Radio color="primary" />}
//                 label={
//                   <Typography variant="body1" fontWeight={index === selectedFare ? "bold" : "normal"}>₹{fare.fd.ADULT.fC.NF}</Typography>
//                 }
//               />
//               <Typography variant="body2" color="textSecondary">{fare.fareType} - {fare.refundability}</Typography>
//             </Box>
//           ))}
//         </RadioGroup>
//       </CardContent>
//     </Card>
//   );
// };

// export default FlightCard;
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Divider,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import {
  FlightTakeoff,
  FlightLand,
  AccessTime,
} from "@mui/icons-material";

const FlightCard = ({ flight }) => {
  const [selectedFare, setSelectedFare] = useState(0);

  const airlineCode = flight?.sI[0]?.fD?.aI?.code || "default";
  const airlineName = flight?.sI[0]?.fD?.aI?.name || "Unknown Airline";
  const departureTime = flight?.sI[0]?.dt || "N/A";
  const arrivalTime = flight?.sI[0]?.at || "N/A";
  const duration = flight?.sI[0]?.duration || "N/A";
  const stops = flight?.sI[0]?.stops === 0 ? "Non-stop" : `${flight?.sI[0]?.stops} Stop(s)`;
  const fares = flight?.totalPriceList || [];

  return (
    <Card sx={{ mx: "auto", p: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <img
              src={`/AirlinesLogo/${airlineCode}.png`}
              alt={airlineName}
              style={{ width: 50, height: "auto" }}
            />
            <Typography variant="subtitle1" fontWeight="bold">{airlineName}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" fontWeight="bold">{departureTime}</Typography>
            <Typography variant="body2" color="textSecondary">{flight.sI[0].da.city} ({flight.sI[0].da.code})</Typography>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <AccessTime color="action" />
            <Typography variant="body2" color="textSecondary">{duration}</Typography>
            <Typography variant="body2" color="textSecondary">{stops}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" fontWeight="bold">{arrivalTime}</Typography>
            <Typography variant="body2" color="textSecondary">{flight.sI[0].aa.city} ({flight.sI[0].aa.code})</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" sx={{ backgroundColor: "#FF6748", "&:hover": { backgroundColor: "#d9553d" } }}>BOOK</Button>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <RadioGroup value={selectedFare} onChange={(e) => setSelectedFare(parseInt(e.target.value))}>
          {fares.map((fare, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="space-between" sx={{ py: 1 }}>
              <FormControlLabel
                value={index}
                control={<Radio color="primary" />}
                label={
                  <Typography variant="body1" fontWeight={index === selectedFare ? "bold" : "normal"}>₹{fare.fd.ADULT.fC.TF}  
                 
                  </Typography>
                  
                }
              />
              
              <Typography variant="body2" color="textSecondary">{fare.fareIdentifier} </Typography>
              <Typography variant="body2" color="textSecondary">{fare.fd.ADULT.tjFlexFareBenefit}</Typography>
            </Box>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
