
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

// const FlightList = () => {
//   const location = useLocation();
//   const [flights, setFlights] = useState([]);

//   useEffect(() => {
//     console.log("Location State:", location.state); // Debugging

//     if (location.state?.flights?.searchResult?.tripInfos?.ONWARD) {
//       const onwardFlights = location.state?.flights.searchResult.tripInfos.ONWARD; // Extracting the array
//       setFlights(onwardFlights);
//     } else {
//       setFlights([]); // Fallback to an empty array
//     }
//   }, [location.state]);

//   if (!flights || flights.length === 0) {
//     return <Typography variant="h6">No flights available.</Typography>;
//   }

//   return (
//     <Grid container spacing={3} padding={3}>
//       {flights.map((flight, index) => (
//         <Grid item xs={12} md={8} key={index}>
//           <Card variant="outlined">
//             <CardContent>
//               <Grid container spacing={2}>
//                 {/* Flight Details (2fr) */}
//                 <Grid item xs={8}>
//                   <Typography variant="h6">
//                     {flight?.sI?.[0]?.fD?.aI?.name} ({flight?.sI?.[0]?.fD?.aI?.code})
//                   </Typography>
//                   <Typography>Flight Number: {flight?.sI?.[0]?.fD?.fN}</Typography>
//                   <Typography>Departure: {flight?.sI?.[0]?.dt}</Typography>
//                   <Typography>Arrival: {flight?.sI?.[0]?.at}</Typography>
//                   <Typography>Duration: {flight?.sI?.[0]?.duration} min</Typography>
//                   <Typography>Stops: {flight?.sI?.[0]?.stops}</Typography>
//                 </Grid>

//                 {/* Price and Book Button (1fr) */}
//                 <Grid item xs={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
//                   <Typography variant="h6" color="primary">
//                     ₹{flight?.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF}
//                   </Typography>
//                   <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                     Book Now
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default FlightList;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import moment from "moment"; // For date formatting

const FlightList = () => {
  const location = useLocation();
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    console.log("Location State:", location.state); // Debugging

    if (location.state?.flights?.searchResult?.tripInfos?.ONWARD) {
      const onwardFlights = location.state?.flights.searchResult.tripInfos.ONWARD;
      setFlights(onwardFlights);
    } else {
      setFlights([]);
    }
  }, [location.state]);

  return (
    <Grid container spacing={3} padding={3}>
      {/* Left Section: Filter (1fr) */}
      <Grid item xs={12} md={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Filter Options
            </Typography>
            {/* Add filter components here (e.g., Price, Stops, Airlines, etc.) */}
            <Typography>Price Range</Typography>
            <Typography>Stops</Typography>
            <Typography>Airlines</Typography>
            <Typography>Departure Time</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Right Section: Flight List (2fr) */}
      <Grid item xs={12} md={8}>
        {flights.length === 0 ? (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>
            No flights available.
          </Typography>
        ) : (
          flights.map((flight, index) => {
            const airlineName = flight?.sI?.[0]?.fD?.aI?.name || "Unknown Airline";
            const airlineCode = flight?.sI?.[0]?.fD?.aI?.code || "--";
            const flightNumber = flight?.sI?.[0]?.fD?.fN || "--";
            const departureTime = flight?.sI?.[0]?.dt
              ? moment(flight.sI[0].dt).format("DD MMM YYYY, hh:mm A")
              : "N/A";
            const arrivalTime = flight?.sI?.[0]?.at
              ? moment(flight.sI[0].at).format("DD MMM YYYY, hh:mm A")
              : "N/A";
            const duration = flight?.sI?.[0]?.duration || "N/A";
            const stops = flight?.sI?.[0]?.stops ?? "Direct";
            const price =
              flight?.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || "Price Not Available";

            return (
              <Card variant="outlined" sx={{ mb: 2 }} key={index}>
                <CardContent>
                  <Grid container spacing={2}>
                    {/* Flight Details (2fr) */}
                    <Grid item xs={8}>
                      <Typography variant="h6">
                        {airlineName} ({airlineCode})
                      </Typography>
                      <Typography>Flight Number: {flightNumber}</Typography>
                      <Typography>Departure: {departureTime}</Typography>
                      <Typography>Arrival: {arrivalTime}</Typography>
                      <Typography>Duration: {duration} min</Typography>
                      <Typography>Stops: {stops}</Typography>
                    </Grid>

                    {/* Price and Book Button (1fr) */}
                    <Grid
                      item
                      xs={4}
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="h6" color="primary">
                        ₹{price}
                      </Typography>
                      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Book Now
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          })
        )}
      </Grid>
    </Grid>
  );
};

export default FlightList;
