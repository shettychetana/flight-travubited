// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Typography, Box } from "@mui/material";

// const FlightItinerary = () => {
//   const location = useLocation();
//   const flightDetails = location.state?.flightDetails || {};

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Flight Itinerary
//       </Typography>
//       <pre>{JSON.stringify(flightDetails, null, 2)}</pre>
//     </Box>
//   );
// };

// export default FlightItinerary;
import React from "react";
import { useState } from "react";


import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {  Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Typography,Grid, Box, Paper,LinearProgress, Divider,Link, List,TextField, ListItem, ListItemText } from "@mui/material";
import { Add } from "@mui/icons-material";
import {  Button, Chip, Stack } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import LuggageIcon from "@mui/icons-material/Luggage";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { format,differenceInMinutes  } from "date-fns";
const FlightItinerary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const flightDetails = location.state?.flightDetails;
  console.log(flightDetails);
  const [open, setOpen] = useState(false);
  const airlineCode = flightDetails?.tripInfos[0].sI[0]?.fD?.aI?.code || "default";
  const airlineName = flightDetails?.tripInfos[0].sI[0]?.fD?.aI?.name || "Unknown Airline";
  const airlineNu = flightDetails?.tripInfos[0].sI[0]?.fD?.fN || "Unknown ";
  
  // Function to handle modal open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const handleBooking = () => {
    const bookingId = flightDetails?.bookingId || Math.floor(Math.random() * 1000000); // Generate a booking ID if not available
    navigate(`/booking-confirmation/${bookingId}`, { state: { flightDetails } });
  };
  // Extract refundable type values
  const refundableType = flightDetails.tripInfos[0].totalPriceList[0].fd;

  // Determine refundability status
  const getRefundStatus = (rT) => {
    switch (rT) {
      case 0:
        return { label: "NON-REFUNDABLE", color: "error" };
      case 1:
        return { label: "REFUNDABLE", color: "success" };
      case 2:
        return { label: "PARTIAL REFUNDABLE", color: "warning" };
      default:
        return { label: "UNKNOWN", color: "default" };
    }
  };

  // Get status for each passenger type
  const adultStatus = getRefundStatus(refundableType.ADULT.rT);
  const childStatus = getRefundStatus(refundableType.CHILD?.rT);
  const infantStatus = getRefundStatus(refundableType.INFANT?.rT);

  if (!flightDetails) {
    return <Typography variant="h6">No flight details available.</Typography>;
  }
  const segment = flightDetails.tripInfos[0].sI[0]; // First segment of the trip
  const departureTime = new Date(segment.dt);
  const arrivalTime = new Date(segment.at);
  const duration = differenceInMinutes(arrivalTime, departureTime); // Calculate duration

  const formattedDate = format(departureTime, "EEEE, MMM d yyyy HH:mm"); 
  const formattedTimedep = format(departureTime, "HH:mm");
  const formattedDatearrival = format(arrivalTime, "EEEE, MMM d yyyy HH:mm"); 
  const formattedDatearr= format(arrivalTime, " HH:mm"); 
  const tripInfo = flightDetails.tripInfos?.[0]?.sI?.[0]; // First segment of the trip
  const pricingInfo = flightDetails.totalPriceInfo?.totalFareDetail?.fC;
  const ssrInfo = flightDetails.tripInfos[0].sI[0].ssrInfo || {}; // Extract SSR details

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
        <Grid container spacing={2} >
      {/* First box - takes 75% of width */}
      <Grid item xs={12} sm={12} md={9}>
        <Paper sx={{ p: 3, textAlign: "center", bgcolor: "lightblue" }}>
        <Paper sx={{ p: 3, maxWidth: 1200, mx: "auto", borderRadius: 3, boxShadow: 3 }}>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
         {flightDetails.tripInfos[0].sI[0].da.city} → {flightDetails.tripInfos[0].sI[0].aa.city} 
        </Typography>
        
        {/* <Chip label="NON-REFUNDABLE" color="error" size="small" onClick={handleOpen} sx={{ cursor: "pointer" }} /> */}
        <Chip label={adultStatus.label} color={adultStatus.color} size="small" onClick={handleOpen} sx={{ cursor: "pointer" }} />

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Refund Policy</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <strong>Adult:</strong> {adultStatus.label} <br />
            <strong>Child:</strong> {childStatus?.label || "N/A"} <br />
            <strong>Infant:</strong> {infantStatus?.label || "N/A"} <br />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      </Stack>
      {/* <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Refund Policy</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            This fare is **non-refundable**. Cancellations are subject to full ticket loss.  
            Please check fare rules for further details.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog> */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" >
        {formattedDate} → {formattedDatearrival} 
         
        </Typography>
        
        
      </Stack>

    
    
      
      <Typography variant="subtitle1" color="text.secondary">
 {Math.floor(duration / 60)}h {duration % 60}m
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Flight Info */}
      <Box display="flex" alignItems="center" gap={2}>
      <img
              src={`/AirlinesLogo/${airlineCode}.png`}
              alt={airlineName}
              style={{ width: 20, height: "auto" }}
            />
        <Typography variant="body1">
          {airlineName} • {airlineCode} • {airlineNu} 
        </Typography>
      </Box>

      {/* Departure & Arrival */}
      <Box sx={{ mt: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <FlightTakeoffIcon color="primary" />
          <Box>
            <Typography variant="h6">{formattedTimedep}</Typography>
            <Typography variant="body2" color="text.secondary">
              {flightDetails.tripInfos[0].sI[0].da.city} 
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 1, ml: 4, borderLeft: "2px dashed gray", height: 30 }} >{flightDetails.tripInfos[0].sI[0].da.terminal}{flightDetails.tripInfos[0].sI[0].aa.terminal}</Divider>

        <Stack direction="row" spacing={2} alignItems="center">
          <FlightLandIcon color="success" />
          <Box>
            <Typography variant="h6">{formattedDatearr}</Typography>
            <Typography variant="body2" color="text.secondary">
            {flightDetails.tripInfos[0].sI[0].aa.city}
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Baggage Info */}
      <Paper sx={{ p: 2, mt: 3, borderRadius: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <LuggageIcon color="primary" />
          <Typography variant="body1">
            <strong>Cabin Baggage:</strong> {flightDetails.tripInfos[0].totalPriceList[0].fd.ADULT.bI.cB}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1 }}>
          <WorkOutlineIcon color="primary" />
          <Typography variant="body1">
            <strong>Check-In Baggage:</strong> {flightDetails.tripInfos[0].totalPriceList[0].fd.ADULT.bI.iB} / Adult
          </Typography>
        </Stack>
      </Paper>

      {/* Extra Baggage Section */}
      <Paper sx={{ p: 2, mt: 2, bgcolor: "#e3f2fd", borderRadius: 2 }}>
        <Typography variant="body2">
          Got excess baggage? Don't stress, buy extra check-in baggage allowance for {flightDetails.tripInfos[0].sI[0].da.city} - {flightDetails.tripInfos[0].sI[0].aa.city} at fab rates!
        </Typography>
        <Button variant="contained" sx={{ mt: 1,backgroundColor: "#FF6748" }} size="small">
          ADD BAGGAGE
        </Button>
      </Paper>
    </Paper>
        </Paper>
        <Paper sx={{ p: 3,mt:2, mx: "auto", borderRadius: 3, boxShadow: 3, bgcolor: "#f5f7fa" }}>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Cancellation & Date Change Policy
        </Typography>
        <Link href="#" underline="hover" color="primary" fontWeight="bold">
          View Policy
        </Link>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Airline & Route */}
      <Stack direction="row" alignItems="center" spacing={2}>
      <img
              src={`/AirlinesLogo/${airlineCode}.png`}
              alt={airlineName}
              style={{ width: 20, height: "auto" }}
            />
        <Typography variant="body1" fontWeight="bold">
        {flightDetails.tripInfos[0].sI[0].da.code} - {flightDetails.tripInfos[0].sI[0].aa.code} 
        </Typography>
      </Stack>

      {/* Cancellation Penalty */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Cancellation Penalty:
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="error">
          ₹ 3,239
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ mt: 1 }}>
          <LinearProgress variant="determinate" value={100} sx={{ height: 6, bgcolor: "error.light" }} />
        </Box>
      </Box>

      {/* Cancel Between Info */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" fontWeight="bold">
          Cancel Between (IST):
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography variant="body1" fontWeight="bold">
          Now
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          6 Mar <br /> 04:45
        </Typography>
      </Box>
    </Paper>
      </Grid>

      {/* Second box - takes 25% of width */}
      <Grid item xs={12} sm={12} md={3}>
        <Paper sx={{ textAlign: "center"}}>
        <Paper sx={{ p: 3,  borderRadius: 3, boxShadow: 3 }}>
      {/* Fare Summary */}
      <Typography variant="h6" fontWeight="bold">
        Fare Summary
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Base Fare */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Add fontSize="small" color="disabled" />
          <Typography variant="body2">Base Fare</Typography>
        </Stack>
        <Typography variant="body2">₹{flightDetails?.totalPriceInfo.totalFareDetail.fC.BF}</Typography>
      </Stack>

      {/* Taxes & Surcharges */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Add fontSize="small" color="disabled" />
          <Typography variant="body2">Taxes</Typography>
        </Stack>
        <Typography variant="body2">₹{flightDetails?.totalPriceInfo.totalFareDetail.fC.TAF}</Typography>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Total Amount */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Total Amount
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          ₹  { (flightDetails?.totalPriceInfo?.totalFareDetail?.fC?.BF || 0) + 
    (flightDetails?.totalPriceInfo?.totalFareDetail?.fC?.TAF || 0) }
        </Typography>
      </Stack>

      {/* Promo Code Section */}
      <Paper
        sx={{
          mt: 3,
          p: 2,
          bgcolor: "goldenrod",
          color: "white",
          display: "flex",
          alignItems: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          PROMO CODES
        </Typography>
      </Paper>

      <Box sx={{ mt: 2 }}>
        <TextField
          fullWidth
          placeholder="Enter promo code here"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
      </Box>

      {/* View All Coupons Link */}
      <Box sx={{ mt: 1, textAlign: "center" }}>
        <Link href="#" underline="hover" fontWeight="bold" color="#05073c">
          VIEW ALL COUPONS
        </Link>
      </Box>
        
          <Button variant="contained" sx={{ mt: 1, backgroundColor: "#FF6748" }} size="small" onClick={handleBooking}>
          Book Now
        </Button>
    </Paper>
        </Paper>
      </Grid>
    </Grid>















      <Typography variant="h4" gutterBottom>
        Flight Itinerary
      </Typography>

      {/* Flight Details */}
      <Paper sx={{ p: 3, mb: 2 }} elevation={3}>
        <Typography variant="h6">Flight Details</Typography>
        <Divider sx={{ my: 1 }} />
        <List>
          <ListItem>
            <ListItemText primary="Airline" secondary={tripInfo?.fD?.aI?.name || "N/A"} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Flight Number" secondary={tripInfo?.fD?.fN || "N/A"} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Departure Airport" secondary={tripInfo?.da?.name || "N/A"} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Arrival Airport" secondary={tripInfo?.aa?.name || "N/A"} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Departure Time" secondary={tripInfo?.dt || "N/A"} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Arrival Time" secondary={tripInfo?.at || "N/A"} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Duration" secondary={`${tripInfo?.duration} minutes`} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Stops" secondary={tripInfo?.stops === 0 ? "Non-stop" : `${tripInfo?.stops} Stop(s)`} />
          </ListItem>
        </List>
      </Paper>

      {/* Fare Details */}
      <Paper sx={{ p: 3, mb: 2 }} elevation={3}>
        <Typography variant="h6">Fare Details</Typography>
        <Divider sx={{ my: 1 }} />
        <List>
          <ListItem>
            <ListItemText primary="Base Fare" secondary={`₹${pricingInfo?.BF || "N/A"}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Taxes & Fees" secondary={`₹${pricingInfo?.TAF || "N/A"}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Total Fare" secondary={`₹${pricingInfo?.TF || "N/A"}`} />
          </ListItem>
        </List>
      </Paper>

      {/* SSR: Meal Selection */}
      {ssrInfo.MEAL?.length > 0 && (
        <Paper sx={{ p: 3, mb: 2 }} elevation={3}>
          <Typography variant="h6">Meal Options</Typography>
          <Divider sx={{ my: 1 }} />
          <List>
            {ssrInfo.MEAL.map((meal) => (
              <ListItem key={meal.code}>
                <ListItemText primary={meal.desc} secondary={`₹${meal.amount}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      {/* SSR: Baggage Options */}
      {ssrInfo.BAGGAGE?.length > 0 && (
        <Paper sx={{ p: 3 }} elevation={3}>
          <Typography variant="h6">Baggage Options</Typography>
          <Divider sx={{ my: 1 }} />
          <List>
            {ssrInfo.BAGGAGE.map((baggage) => (
              <ListItem key={baggage.code}>
                <ListItemText primary={baggage.desc} secondary={`₹${baggage.amount}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
     
    </Box>
  );
};

export default FlightItinerary;
