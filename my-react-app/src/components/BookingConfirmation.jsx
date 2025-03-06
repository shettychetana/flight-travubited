// import { useParams, useLocation } from "react-router-dom";
// import { Typography } from "@mui/material";

// const BookingConfirmation = () => {
//   const { bookingId } = useParams();
//   const location = useLocation();
//   const flightDetails = location.state?.flightDetails;
//   console.log("confirmation page ",flightDetails);

//   return (
//     <div>
//       <Typography variant="h4">Booking Confirmation</Typography>
//       <Typography variant="h6">Your Booking ID: {bookingId}</Typography>
//       <Typography variant="body1">
//         Airline: {flightDetails?.tripInfos[0]?.sI[0]?.fD?.aI?.name || "N/A"}
//       </Typography>
//     </div>
//   );
// };

// export default BookingConfirmation;
// import { useState } from "react";
// import { Card, CardContent, TextField, Checkbox, FormControlLabel, IconButton, Grid } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   FormControl,
//   Select,
//   MenuItem,
// } from "@mui/material";

// const BookingConfirmation = () => {
//   const [expanded, setExpanded] = useState(true);
//   const [passenger, setPassenger] = useState({
//     title: "",
//     firstName: "",
//     lastName: "",
//     saveDetails: false,
//   });


//   const handleChange = (e) => {
//     setPassenger({ ...passenger, [e.target.name]: e.target.value });
//   };

//   return (
//     <Card sx={{ maxWidth: 900, margin: "auto", mt: 3, p: 2 }}>
//       <CardContent>
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <Typography variant="h6">ADULT 1: (12+ yrs)</Typography>
//           <IconButton onClick={() => setExpanded(!expanded)}>
//             {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           </IconButton>
//         </div>

//         {expanded && (
//           <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
//             {/* Title Dropdown */}
//             <Grid item xs={2}>
//               <FormControl fullWidth>
//                 <Select name="title" value={passenger.title} onChange={handleChange} displayEmpty>
//                   <MenuItem value="">Title</MenuItem>
//                   <MenuItem value="Mr.">Mr.</MenuItem>
//                   <MenuItem value="Mrs.">Mrs.</MenuItem>
//                   <MenuItem value="Miss">Miss</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>

//             {/* First Name */}
//             <Grid item xs={4}>
//               <TextField label="First Name" name="firstName" value={passenger.firstName} onChange={handleChange} fullWidth />
//             </Grid>

//             {/* Last Name */}
//             <Grid item xs={4}>
//               <TextField label="Last Name *" name="lastName" value={passenger.lastName} onChange={handleChange} fullWidth required />
//             </Grid>

//             {/* Save Details Checkbox */}
//             <Grid item xs={2}>
//               <FormControlLabel
//                 control={<Checkbox checked={passenger.saveDetails} onChange={(e) => setPassenger({ ...passenger, saveDetails: e.target.checked })} />}
//                 label="Save"
//               />
//             </Grid>
//           </Grid>
//         )}
//       </CardContent>
//       <Accordion>
//       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//         <Typography variant="h6">
//           Add Baggage, Meal & Other Services to Your Travel
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography variant="subtitle1" gutterBottom>
//           <strong>Bengaluru → Delhi</strong> on March 6, 2025
//         </Typography>

//         <Typography variant="body2">ADULT 1</Typography>

//         <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
//           <Typography variant="body2">Baggage Information</Typography>
//           <Select defaultValue="add-baggage">
//             <MenuItem value="add-baggage">Add Baggage</MenuItem>
//             <MenuItem value="no-baggage">No Extra Baggage</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <Typography variant="body2">Select Meal</Typography>
//           <Select defaultValue="add-meal">
//             <MenuItem value="add-meal">Add Meal</MenuItem>
//             <MenuItem value="no-meal">No Meal</MenuItem>
//           </Select>
//         </FormControl>
//       </AccordionDetails>
//     </Accordion>
//     </Card>
//   );
// };

// export default BookingConfirmation;



import React from "react";
import { TextField, MenuItem, Checkbox, FormControlLabel, Button } from "@mui/material";

const PassengerDetails = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">ADULT 1: (12+ yrs)</h3>
      <div className="flex items-center gap-4 mt-2">
        <TextField select label="Title" size="small" className="w-1/6">
          <MenuItem value="Mr">Mr</MenuItem>
          <MenuItem value="Ms">Ms</MenuItem>
          <MenuItem value="Mrs">Mrs</MenuItem>
        </TextField>
        <TextField label="First Name" size="small" className="w-1/3" />
        <TextField label="Last Name" size="small" className="w-1/3" required />
      </div>
      <FormControlLabel control={<Checkbox />} label="Save Passenger Details" className="mt-2" />
    </div>
  );
};

const BaggageMealSelection = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white mt-4">
      <h3 className="text-lg font-semibold">Add Baggage, Meal & Other Services to Your Travel</h3>
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="font-semibold">Bengaluru → Mumbai</p>
          <p className="text-sm text-gray-600">on March 6, 2025</p>
        </div>
        <TextField select label="Baggage Information" size="small">
          <MenuItem value="Add Baggage">Add Baggage</MenuItem>
        </TextField>
        <TextField select label="Select Meal" size="small">
          <MenuItem value="Add Meal">Add Meal</MenuItem>
        </TextField>
      </div>
    </div>
  );
};

const SeatSelection = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white mt-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">Select Seats (Optional)</h3>
        <p className="font-semibold">Bengaluru → Mumbai</p>
        <p className="text-sm text-gray-600">on March 6, 2025</p>
      </div>
      <div>
        <p className="text-gray-500">No Seat Selected</p>
        <Button variant="contained" color="warning">Show Seat Map</Button>
      </div>
    </div>
  );
};

const BookingConfirmation = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <PassengerDetails />
      <BaggageMealSelection />
      <SeatSelection />
    </div>
  );
};

export default BookingConfirmation;
