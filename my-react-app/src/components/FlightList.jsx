
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Slider,
//   ToggleButton,
//   ToggleButtonGroup,
// } from "@mui/material";
// import { WbSunny, NightsStay, Brightness5, Brightness6 } from "@mui/icons-material";
// import moment from "moment";
// import FlightCard from "../components/FlightCard";
// const timeSlots = [
//   { label: "00-06", start: "00:00", end: "06:00", icon: <Brightness5 /> },
//   { label: "06-12", start: "06:00", end: "12:00", icon: <WbSunny /> },
//   { label: "12-18", start: "12:00", end: "18:00", icon: <Brightness6 /> },
//   { label: "18-00", start: "18:00", end: "23:59", icon: <NightsStay /> },
// ];

// const FlightList = () => {
//   const location = useLocation();
//   const [flights, setFlights] = useState([]);
//   const [filteredFlights, setFilteredFlights] = useState([]);
//   const [selectedStops, setSelectedStops] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState([0, 10000]);
//   const [selectedDepartureTime, setSelectedDepartureTime] = useState([]);
//   const [selectedArrivalTime, setSelectedArrivalTime] = useState([]);
//   const [selectedAirline, setSelectedAirline] = useState("");
//   const [airlines, setAirlines] = useState([]);

//   useEffect(() => {
//     if (location.state?.flights?.searchResult?.tripInfos?.ONWARD) {
//       const onwardFlights = location.state.flights.searchResult.tripInfos.ONWARD;
//       setFlights(onwardFlights);
//       setFilteredFlights(onwardFlights);

//       const prices = onwardFlights.map(f => f.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || 0);
//       setSelectedPrice([Math.min(...prices), Math.max(...prices)]);

//       // Extract unique airlines
//       const airlineNames = [...new Set(onwardFlights.map(f => f?.sI?.[0]?.fD?.aI?.name || "Unknown Airline"))];
//       setAirlines(airlineNames);
//     }
//   }, [location.state]);

//   useEffect(() => {
//     let filtered = flights;

//     if (selectedStops !== "") {
//       filtered = filtered.filter(f => f.sI[0]?.stops == parseInt(selectedStops));
//     }

//     if (selectedAirline !== "") {
//       filtered = filtered.filter(f => f.sI[0]?.fD?.aI?.name === selectedAirline);
//     }

//     filtered = filtered.filter(f => {
//       const flightPrice = f.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || 0;
//       return flightPrice >= selectedPrice[0] && flightPrice <= selectedPrice[1];
//     });

//     if (selectedDepartureTime.length > 0) {
//       filtered = filtered.filter(f => {
//         const departureTime = moment(f.sI[0]?.dt).format("HH:mm");
//         return selectedDepartureTime.some(slot => {
//           const { start, end } = timeSlots.find(t => t.label === slot);
//           return departureTime >= start && departureTime <= end;
//         });
//       });
//     }

//     if (selectedArrivalTime.length > 0) {
//       filtered = filtered.filter(f => {
//         const arrivalTime = moment(f.sI[0]?.at).format("HH:mm");
//         return selectedArrivalTime.some(slot => {
//           const { start, end } = timeSlots.find(t => t.label === slot);
//           return arrivalTime >= start && arrivalTime <= end;
//         });
//       });
//     }

//     setFilteredFlights(filtered);
//   }, [selectedStops, selectedPrice, selectedDepartureTime, selectedArrivalTime, selectedAirline]);

//   return (
//     <Grid container spacing={3} padding={3}>
//       <Grid item xs={12} md={4}>
//         <Card variant="outlined">
//           <CardContent>
//             <Typography variant="h6" gutterBottom>Filter Options</Typography>

//             {/* Airline Filter */}
//             <FormControl fullWidth margin="normal">
//               <InputLabel>Airline</InputLabel>
//               <Select value={selectedAirline} onChange={(e) => setSelectedAirline(e.target.value)}>
//                 <MenuItem value="">All Airlines</MenuItem>
//                 {airlines.map((airline, index) => (
//                   <MenuItem key={index} value={airline}>{airline}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Stops Filter */}
//             <FormControl fullWidth margin="normal">
//               <InputLabel>Stops</InputLabel>
//               <Select value={selectedStops} onChange={(e) => setSelectedStops(e.target.value)}>
//                 <MenuItem value="">All</MenuItem>
//                 <MenuItem value="0">Direct</MenuItem>
//                 <MenuItem value="1">1 Stop</MenuItem>
//                 <MenuItem value="2">2 Stops</MenuItem>
//                 <MenuItem value="3">3+ Stops</MenuItem>
//               </Select>
//             </FormControl>

//             {/* Price Filter */}
//             <Typography gutterBottom>Price Range (₹{selectedPrice[0]} - ₹{selectedPrice[1]})</Typography>
//             <Slider
//               value={selectedPrice}
//               onChange={(e, newValue) => setSelectedPrice(newValue)}
//               valueLabelDisplay="auto"
//               min={0}
//               max={10000}
//               step={100}
//             />

//             {/* Departure Time Filter */}
//             <Typography gutterBottom>Departure Time</Typography>
//             <ToggleButtonGroup
//               value={selectedDepartureTime}
//               onChange={(e, newTimes) => setSelectedDepartureTime(newTimes)}
//               aria-label="departure time"
//             >
//               {timeSlots.map(slot => (
//                 <ToggleButton key={slot.label} value={slot.label} sx={{ color: "#FF6748" }}>
//                   {slot.icon} {slot.label}
//                 </ToggleButton>
//               ))}
//             </ToggleButtonGroup>

//             {/* Arrival Time Filter */}
//             <Typography gutterBottom>Arrival Time</Typography>
//             <ToggleButtonGroup
//               value={selectedArrivalTime}
//               onChange={(e, newTimes) => setSelectedArrivalTime(newTimes)}
//               aria-label="arrival time"
//             >
//               {timeSlots.map(slot => (
//                 <ToggleButton key={slot.label} value={slot.label} sx={{ color: "#FF6748" }}>
//                   {slot.icon} {slot.label}
//                 </ToggleButton>
//               ))}
//             </ToggleButtonGroup>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Flight List */}
//       {/* <Grid item xs={12} md={8}>
//         {filteredFlights.length === 0 ? (
//           <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>
//             No flights available.
//           </Typography>
//         ) : (
//           filteredFlights.map((flight, index) => (
//             <Card variant="outlined" sx={{ mb: 2 }} key={index}>
//               <CardContent>
//                 <Typography variant="h6">{flight?.sI?.[0]?.fD?.aI?.name || "Unknown Airline"}</Typography>
//                 <Typography>Departure: {moment(flight.sI[0]?.dt).format("DD MMM YYYY, hh:mm A")}</Typography>
//                 <Typography>Arrival: {moment(flight.sI[0]?.at).format("DD MMM YYYY, hh:mm A")}</Typography>
//                 <Typography>Price: ₹{flight?.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || "N/A"}</Typography>
//                 <Button variant="contained" sx={{ mt: 2, backgroundColor: "#FF6748" }}>Book Now</Button>
//               </CardContent>
//             </Card>
//           ))
//         )
        
//         }
//       </Grid> */}
//       <Grid item xs={12} md={8}>
//   {filteredFlights.length === 0 ? (
//     <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>
//       No flights available.
//     </Typography>
//   ) : (
//     filteredFlights.map((flight, index) => <FlightCard key={index} flight={flight} />)
//   )}
// </Grid>

//     </Grid>
//   );
// };

// export default FlightList;









import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { WbSunny, NightsStay, Brightness5, Brightness6 } from "@mui/icons-material";
import moment from "moment";
import FlightCard from "../components/FlightCard";

const timeSlots = [
  { label: "00-06", start: "00:00", end: "06:00", icon: <Brightness5 /> },
  { label: "06-12", start: "06:00", end: "12:00", icon: <WbSunny /> },
  { label: "12-18", start: "12:00", end: "18:00", icon: <Brightness6 /> },
  { label: "18-00", start: "18:00", end: "23:59", icon: <NightsStay /> },
];

const FlightList = () => {
  const location = useLocation();
  const [flights, setFlights] = useState({});
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedStops, setSelectedStops] = useState("");
  const [selectedPrice, setSelectedPrice] = useState([0, 10000]);
  const [selectedDepartureTime, setSelectedDepartureTime] = useState([]);
  const [selectedArrivalTime, setSelectedArrivalTime] = useState([]);
  const [selectedAirline, setSelectedAirline] = useState("");
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    if (location.state?.flights?.searchResult?.tripInfos) {
      const tripInfos = location.state.flights.searchResult.tripInfos;
      setFlights(tripInfos);
      
      // Extract the first available flight list for default filtering
      const firstKey = Object.keys(tripInfos)[0];
      setFilteredFlights(tripInfos[firstKey] || []);

      // Extract airline names
      const allFlights = Object.values(tripInfos).flat();
      const airlineNames = [...new Set(allFlights.map(f => f?.sI?.[0]?.fD?.aI?.name || "Unknown Airline"))];
      setAirlines(airlineNames);

      // Set default price range
      const prices = allFlights.map(f => f.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || 0);
      setSelectedPrice([Math.min(...prices), Math.max(...prices)]);
    }
  }, [location.state]);

  useEffect(() => {
    let currentFlights = flights[Object.keys(flights)[selectedTab]] || [];

    let filtered = currentFlights;

    if (selectedStops !== "") {
      filtered = filtered.filter(f => f.sI[0]?.stops === parseInt(selectedStops));
    }

    if (selectedAirline !== "") {
      filtered = filtered.filter(f => f.sI[0]?.fD?.aI?.name === selectedAirline);
    }

    filtered = filtered.filter(f => {
      const flightPrice = f.totalPriceList?.[0]?.fd?.ADULT?.fC?.NF || 0;
      return flightPrice >= selectedPrice[0] && flightPrice <= selectedPrice[1];
    });

    if (selectedDepartureTime.length > 0) {
      filtered = filtered.filter(f => {
        const departureTime = moment(f.sI[0]?.dt).format("HH:mm");
        return selectedDepartureTime.some(slot => {
          const { start, end } = timeSlots.find(t => t.label === slot);
          return departureTime >= start && departureTime <= end;
        });
      });
    }

    if (selectedArrivalTime.length > 0) {
      filtered = filtered.filter(f => {
        const arrivalTime = moment(f.sI[0]?.at).format("HH:mm");
        return selectedArrivalTime.some(slot => {
          const { start, end } = timeSlots.find(t => t.label === slot);
          return arrivalTime >= start && arrivalTime <= end;
        });
      });
    }

    setFilteredFlights(filtered);
  }, [selectedTab, selectedStops, selectedPrice, selectedDepartureTime, selectedArrivalTime, selectedAirline]);

  const flightTabs = Object.keys(flights).map((key, index) => ({
    key: key,
    label: key === "ONWARD" ? "Onward" : key === "RETURN" ? "Return" : key === "COMBO" ? "Combo" : `Route ${index + 1}`,
  }));

  return (
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)} centered>
          {flightTabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Grid>

      {/* Filters */}
      <Grid item xs={12} md={4}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>Filter Options</Typography>

            {/* Airline Filter */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Airline</InputLabel>
              <Select value={selectedAirline} onChange={(e) => setSelectedAirline(e.target.value)}>
                <MenuItem value="">All Airlines</MenuItem>
                {airlines.map((airline, index) => (
                  <MenuItem key={index} value={airline}>{airline}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Stops Filter */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Stops</InputLabel>
              <Select value={selectedStops} onChange={(e) => setSelectedStops(e.target.value)}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="0">Direct</MenuItem>
                <MenuItem value="1">1 Stop</MenuItem>
                <MenuItem value="2">2 Stops</MenuItem>
                <MenuItem value="3">3+ Stops</MenuItem>
              </Select>
            </FormControl>

            {/* Price Filter */}
            <Typography gutterBottom>Price Range (₹{selectedPrice[0]} - ₹{selectedPrice[1]})</Typography>
            <Slider
              value={selectedPrice}
              onChange={(e, newValue) => setSelectedPrice(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={10000}
              step={100}
            />

            {/* Departure Time Filter */}
            <Typography gutterBottom>Departure Time</Typography>
            <ToggleButtonGroup
              value={selectedDepartureTime}
              onChange={(e, newTimes) => setSelectedDepartureTime(newTimes)}
              aria-label="departure time"
            >
              {timeSlots.map(slot => (
                <ToggleButton key={slot.label} value={slot.label} sx={{ color: "#FF6748" }}>
                  {slot.icon} {slot.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            {/* Arrival Time Filter */}
            <Typography gutterBottom>Arrival Time</Typography>
            <ToggleButtonGroup
              value={selectedArrivalTime}
              onChange={(e, newTimes) => setSelectedArrivalTime(newTimes)}
              aria-label="arrival time"
            >
              {timeSlots.map(slot => (
                <ToggleButton key={slot.label} value={slot.label} sx={{ color: "#FF6748" }}>
                  {slot.icon} {slot.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </CardContent>
        </Card>
      </Grid>

      {/* Flight List */}
      <Grid item xs={12} md={8}>
        {filteredFlights.length === 0 ? (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>No flights available.</Typography>
        ) : (
          filteredFlights.map((flight, index) => <FlightCard key={index} flight={flight} />)
        )}
      </Grid>
    </Grid>
  );
};

export default FlightList;
