





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
//   FormControlLabel
// } from "@mui/material";
// import { AccessTime } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

// const FlightCard = ({ flight }) => {
//   const [selectedFare, setSelectedFare] = useState(0);
//   const navigate = useNavigate();

//   const airlineCode = flight?.sI[0]?.fD?.aI?.code || "default";
//   const airlineName = flight?.sI[0]?.fD?.aI?.name || "Unknown Airline";
//   const departureTime = flight?.sI[0]?.dt || "N/A";
//   const arrivalTime = flight?.sI[0]?.at || "N/A";
//   const duration = flight?.sI[0]?.duration || "N/A";
//   const stops = flight?.sI[0]?.stops === 0 ? "Non-stop" : `${flight?.sI[0]?.stops} Stop(s)`;
//   const fares = flight?.totalPriceList || [];

//   const handleBookFlight = async () => {
//     const selectedFareId = fares[selectedFare]?.id;

//     if (!selectedFareId) {
//       alert("Please select a fare option.");
//       return;
//     }

//     try {
//       const response = await fetch("https://apitest.tripjack.com/fms/v1/review", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "apikey": "81210652be6625-ffb6-4457-8d7b-3b87bfa351c3"
//         },
//         body: JSON.stringify({ priceIds: [selectedFareId] })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         navigate("/flight-itinerary", { state: { flightDetails: data } });
//       } else {
//         alert("Error fetching flight details: " + (data.message || "Unknown error"));
//       }
//     } catch (error) {
//       alert("Network error: " + error.message);
//     }
//   };

//   return (
//     <Card sx={{ mx: "auto", p: 2, boxShadow: 3, borderRadius: 2 }}>
//       <CardContent>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item xs={2} sx={{ textAlign: "center" }}>
//             <img
//               src={`/AirlinesLogo/${airlineCode}.png`}
//               alt={airlineName}
//               style={{ width: 30, height: "auto" }}
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
//             <Button
//               variant="contained"
//               sx={{ backgroundColor: "#FF6748", "&:hover": { backgroundColor: "#d9553d" } }}
//               onClick={handleBookFlight}
//             >
//               BOOK
//             </Button>
//           </Grid>
//         </Grid>
//         <Divider sx={{ my: 2 }} />

//         <RadioGroup value={selectedFare} onChange={(e) => setSelectedFare(parseInt(e.target.value))}>
//           {fares.map((fare, index) => (
//             <Box key={index} display="flex" alignItems="center" justifyContent="space-between" sx={{ py: 1 }}>
//               <FormControlLabel
//                 value={index}
//                 control={<Radio color="primary" />}
//                 label={<Typography variant="body1" fontWeight={index === selectedFare ? "bold" : "normal"}>₹{fare.fd.ADULT.fC.TF}</Typography>}
//               />
//               <Typography variant="body2" color="textSecondary">{fare.fareIdentifier} </Typography>
//               {/* <Typography variant="body2" color="textSecondary">{fare.fd.ADULT.tjFlexFareBenefit}</Typography> */}
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
  FormControlLabel
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const FlightCard = ({ flight }) => {
  const [selectedFare, setSelectedFare] = useState(0);
  const navigate = useNavigate();

  const fares = flight?.totalPriceList || [];

  const handleBookFlight = async () => {
    const selectedFareId = fares[selectedFare]?.id;

    if (!selectedFareId) {
      alert("Please select a fare option.");
      return;
    }

    try {
      const response = await fetch("https://apitest.tripjack.com/fms/v1/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "81210652be6625-ffb6-4457-8d7b-3b87bfa351c3"
        },
        body: JSON.stringify({ priceIds: [selectedFareId] })
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/flight-itinerary", { state: { flightDetails: data } });
      } else {
        alert("Error fetching flight details: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <Card sx={{ mx: "auto", p: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          {/* Iterate over multiple segments */}
          {flight.sI.map((segment, index) => (
            <Grid container alignItems="center" key={index} spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <img
                  src={`/AirlinesLogo/${segment.fD.aI.code}.png`}
                  alt={segment.fD.aI.name}
                  style={{ width: 30, height: "auto" }}
                />
                <Typography variant="subtitle1" fontWeight="bold">{segment.fD.aI.name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontWeight="bold">{segment.dt}</Typography>
                <Typography variant="body2" color="textSecondary">{segment.da.city} ({segment.da.code})</Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <AccessTime color="action" />
                <Typography variant="body2" color="textSecondary">{segment.duration} min</Typography>
                <Typography variant="body2" color="textSecondary">{segment.stops === 0 ? "Non-stop" : `${segment.stops} Stop(s)`}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontWeight="bold">{segment.at}</Typography>
                <Typography variant="body2" color="textSecondary">{segment.aa.city} ({segment.aa.code})</Typography>
              </Grid>

              {/* Show layover time if this is not the last segment */}
              {index < flight.sI.length - 1 && (
                <Grid item xs={12} sx={{ textAlign: "center", mt: 1 }}>
                  <Typography variant="body2" color="textSecondary" sx={{ fontStyle: "italic" }}>
                    Layover at {segment.aa.city} ({segment.aa.code}) - {flight.sI[index + 1].layover} min
                  </Typography>
                </Grid>
              )}
            </Grid>
          ))}

          <Grid item xs={2}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FF6748", "&:hover": { backgroundColor: "#d9553d" } }}
              onClick={handleBookFlight}
            >
              BOOK
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <RadioGroup value={selectedFare} onChange={(e) => setSelectedFare(parseInt(e.target.value))}>
          {fares.map((fare, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="space-between" sx={{ py: 1 }}>
              <FormControlLabel
                value={index}
                control={<Radio color="primary" />}
                label={<Typography variant="body1" fontWeight={index === selectedFare ? "bold" : "normal"}>₹{fare.fd.ADULT.fC.TF}</Typography>}
              />
              <Typography variant="body2" color="textSecondary">{fare.fareIdentifier} </Typography>
            </Box>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
