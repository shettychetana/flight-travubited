




// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardContent,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Switch,
//   FormControlLabel,
//   Button,
//   Tabs,
//   Tab,
//   Box,
//   Grid,
//   ToggleButton,
//   ToggleButtonGroup,
//   Modal,
//   Typography,
//   Checkbox
// } from "@mui/material";

// const FlightSearch = () => {
//   const [tab, setTab] = useState(0);
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     date: "",
//     cabinClass: "ECONOMY",
//     adults: "1",
//     children: "0",
//     infants: "0",
//     directFlight: true,
//     connectingFlight: false,
//     fareType: "REGULAR",
//   });
//   const [openModal, setOpenModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleToggle = (name) => {
//     setFormData({ ...formData, [name]: !formData[name] });
//   };

//   const handleFareChange = (event) => {
//     setFormData({ ...formData, fareType: event.target.value });
//   };
//   const handlePassengers = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSubmit = async () => {
//     const apiUrl = "https://apitest.tripjack.com/fms/v1/air-search-all";
//     const apiKey = "81210652be6625-ffb6-4457-8d7b-3b87bfa351c3";

//     const requestBody = {
//       searchQuery: {
//         cabinClass: formData.cabinClass,
//         paxInfo: {
//           ADULT: formData.adults,
//           CHILD: formData.children,
//           INFANT: formData.infants,
//         },
//         routeInfos: [
//           {
//             fromCityOrAirport: { code: formData.from.toUpperCase() },
//             toCityOrAirport: { code: formData.to.toUpperCase() },
//             travelDate: formData.date,
//           },
//         ],
//         searchModifiers: {
//           isDirectFlight: formData.directFlight,
//           isConnectingFlight: formData.connectingFlight,
//           pft: formData.fareType,
//         },
//       },
//     };

//     try {
//       const response = await axios.post(apiUrl, requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//           apikey: apiKey,
//         },
//       });
//       console.log("API Response:", response.data);
//       alert("Flight search successful! Check console for results.");
//     } catch (error) {
//       console.error("API Error:", error);
//       alert("Error fetching flight data.");
//     }
//   };

//   return (
//     <div className="" style={{backgroundColor:"linear-gradient(0deg, #15457b, #051423)",width: "100%" }}>
//     <Card sx={{ maxWidth: 1200, margin: "auto", padding: 2, boxShadow: 3 ,mt: 2}}>
//       <CardContent>
//         <Tabs
//           value={tab}
//           onChange={(e, newValue) => setTab(newValue)}
//           variant="fullWidth"
//           scrollButtons
//           allowScrollButtonsMobile
//           centered
//         >
//           <Tab label="One Way" />
//           <Tab label="Round Trip" />
//           <Tab label="Multi Trip" />
//         </Tabs>

//         {tab === 0 && (
//           <Box mt={2}>
//             <Grid container spacing={2} alignItems="center" justifyContent="center" direction={{ xs: "column", sm: "row" }}>
//               <Grid item xs={12} sm={3}><TextField fullWidth label="From (e.g., DEL)" name="from" onChange={handleChange} /></Grid>
//               <Grid item xs={12} sm={3}><TextField fullWidth label="To (e.g., MAA)" name="to" onChange={handleChange} /></Grid>
//               <Grid item xs={12} sm={3}><TextField fullWidth type="date" name="date" onChange={handleChange} /></Grid>
//               <Box xs={12} sm={2}  display="flex" justifyContent="center">
//               <Button variant="outlined" onClick={() => setOpenModal(true)}>Select Passengers & Class</Button>
//             </Box>
//             </Grid>

            

//             <Box mt={2}>
//               <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
//                 <Grid item><FormControlLabel control={<Switch checked={formData.directFlight} onChange={() => handleToggle("directFlight")} />} label="Direct Flight" /></Grid>
//                 <Grid item><FormControlLabel control={<Switch checked={formData.connectingFlight} onChange={() => handleToggle("connectingFlight")} />} label="Connecting Flight" /></Grid>
//               </Grid>
//             </Box>

//             <Box mt={2}>
//               <Typography variant="h6">Select Fare Type</Typography>
//               <FormControlLabel control={<Checkbox checked={formData.fareType === "REGULAR"} onChange={handleFareChange} value="REGULAR" />} label="Regular Fares" />
//               <FormControlLabel control={<Checkbox checked={formData.fareType === "STUDENT"} onChange={handleFareChange} value="STUDENT" />} label="Student Fares" />
//               <FormControlLabel control={<Checkbox checked={formData.fareType === "SENIOR_CITIZEN"} onChange={handleFareChange} value="SENIOR_CITIZEN" />} label="Senior Citizen Fares" />
//             </Box>

//             <Box mt={2} display="flex" justifyContent="center">
//               <Button variant="contained" color="primary" onClick={handleSubmit}>Search Flights</Button>
//             </Box>
//           </Box>
//         )}

//         {tab === 1 && <Box mt={2}><h3>Round Trip Search Coming Soon!</h3></Box>}
//         {tab === 2 && <Box mt={2}><h3>Multi Trip Search Coming Soon!</h3></Box>}
//       </CardContent>
//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//          <Box sx={{ width: 400, margin: "auto", backgroundColor: "white", padding: 4, mt: 10, borderRadius: 2, boxShadow: 3 }}>
//            <Typography variant="h6">Select Passengers</Typography>
//           {['adults', 'children', 'infants'].map((type) => (
//              <Box key={type} mt={2}>
//                <Typography>{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
//               <ToggleButtonGroup
//                  value={formData[type]}
//                 exclusive
//                  onChange={(e, value) => handlePassengers(type, value)}
//                >
//                 {[...Array(9).keys()].map((num) => (
//                   <ToggleButton key={num} value={num.toString()}>{num}</ToggleButton>
//                  ))}
//                </ToggleButtonGroup>
//              </Box>
//            ))}

//            <Typography variant="h6" mt={2}>Select Class</Typography>
//            <FormControl fullWidth>
//              <InputLabel>Cabin Class</InputLabel>
//              <Select name="cabinClass" value={formData.cabinClass} onChange={handleChange}>
//                <MenuItem value="ECONOMY">Economy</MenuItem>
//               <MenuItem value="PREMIUM_ECONOMY">Premium Economy</MenuItem>
//                <MenuItem value="BUSINESS">Business</MenuItem>
//               <MenuItem value="FIRST">First Class</MenuItem>
//              </Select>
//            </FormControl>

//            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => setOpenModal(false)}>Done</Button>
//         </Box>
//        </Modal>
//     </Card>
//     </div>
//   );
// };

// // export default FlightSearch;



// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardContent,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Switch,
//   FormControlLabel,
//   Button,
//   Tabs,
//   Tab,
//   Box,
//   Grid,
//   ToggleButton,
//   ToggleButtonGroup,
//   Modal,
//   Typography,
//   Checkbox
// } from "@mui/material";

// const Formofsecond = () => {
//   const [tab, setTab] = useState(0);
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     date: "",
//     cabinClass: "ECONOMY",
//     adults: "1",
//     children: "0",
//     infants: "0",
//     directFlight: true,
//     connectingFlight: false,
//     fareType: "REGULAR",
//   });
//   const [openModal, setOpenModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleToggle = (name) => {
//     setFormData({ ...formData, [name]: !formData[name] });
//   };

//   const handleFareChange = (event) => {
//     setFormData({ ...formData, fareType: event.target.value });
//   };

//   const handlePassengers = (name, value) => {
//     if (value !== null) {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async () => {
//     const apiUrl = "https://apitest.tripjack.com/fms/v1/air-search-all";
//     const apiKey = "81210652be6625-ffb6-4457-8d7b-3b87bfa351c3";

//     const requestBody = {
//       searchQuery: {
//         cabinClass: formData.cabinClass,
//         paxInfo: {
//           ADULT: formData.adults,
//           CHILD: formData.children,
//           INFANT: formData.infants,
//         },
//         routeInfos: [
//           {
//             fromCityOrAirport: { code: formData.from.toUpperCase() },
//             toCityOrAirport: { code: formData.to.toUpperCase() },
//             travelDate: formData.date,
//           },
//         ],
//         searchModifiers: {
//           isDirectFlight: formData.directFlight,
//           isConnectingFlight: formData.connectingFlight,
//           pft: formData.fareType,
//         },
//       },
//     };

//     try {
//       const response = await axios.post(apiUrl, requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//           apikey: apiKey,
//         },
//       });
//       console.log("API Response:", response.data);
//       alert("Flight search successful! Check console for results.");
//     } catch (error) {
//       console.error("API Error:", error);
//       alert("Error fetching flight data.");
//     }
//   };

//   return (
//     <div style={{ width: "100%" ,backgroundcolor:"linear-gradient(0deg, #15457b, #051423)"}}>
//       <Card sx={{ maxWidth: 1200, margin: "auto", padding: 2, boxShadow: 3, mt: 2 }}>
//         <CardContent>
//           <Tabs 
//             value={tab}
//             onChange={(e, newValue) => setTab(newValue)}
//             variant="fullWidth"
//             centered
//           >
//             <Tab label="One Way" />
//             <Tab label="Round Trip" />
//             <Tab label="Multi Trip" />
//           </Tabs>

//           {tab === 0 && (
//             <Box mt={2}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={3}><TextField fullWidth label="From" name="from" onChange={handleChange} /></Grid>
//                 <Grid item xs={12} sm={3}><TextField fullWidth label="To" name="to" onChange={handleChange} /></Grid>
//                 <Grid item xs={12} sm={3}><TextField fullWidth type="date" name="date" onChange={handleChange} /></Grid>
//                 <Grid item xs={12} sm={3}>
//                   <TextField
//                     fullWidth
//                     onClick={() => setOpenModal(true)}
//                     label="Select Passengers & Class"
//                     value={`${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants, ${formData.cabinClass}`}
//                     InputProps={{ readOnly: true }}
//                   />
//                 </Grid>
//               </Grid>

//               <Box mt={2}>
//                 <Grid container spacing={2}>
//                   <Grid item><FormControlLabel control={<Switch checked={formData.directFlight} onChange={() => handleToggle("directFlight")} />} label="Direct Flight" /></Grid>
//                   <Grid item><FormControlLabel control={<Switch checked={formData.connectingFlight} onChange={() => handleToggle("connectingFlight")} />} label="Connecting Flight" /></Grid>
//                 </Grid>
//               </Box>

//               <Box mt={2}>
//                 <Typography variant="h6">Select Fare Type</Typography>
//                 <FormControlLabel control={<Checkbox checked={formData.fareType === "REGULAR"} onChange={handleFareChange} value="REGULAR" />} label="Regular Fares" />
//                 <FormControlLabel control={<Checkbox checked={formData.fareType === "STUDENT"} onChange={handleFareChange} value="STUDENT" />} label="Student Fares" />
//                 <FormControlLabel control={<Checkbox checked={formData.fareType === "SENIOR_CITIZEN"} onChange={handleFareChange} value="SENIOR_CITIZEN" />} label="Senior Citizen Fares" />
//               </Box>

//               <Box mt={2} display="flex" justifyContent="center">
//                 <Button variant="contained" color="primary" onClick={handleSubmit} style={{ backgroundColor: "#ff6748", color: "white" }}>Search Flights</Button>
//               </Box>
//             </Box>
//           )}
//         </CardContent>
//       </Card>

//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         <Box sx={{ width: 400, margin: "auto", backgroundColor: "white", padding: 4, mt: 10, borderRadius: 2, boxShadow: 3 }}>
//           <Typography variant="h6">Select Passengers</Typography>
//           {['adults', 'children', 'infants'].map((type) => (
//             <Box key={type} mt={2}>
//               <Typography>{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
//               <ToggleButtonGroup
//                 value={formData[type]}
//                 exclusive
//                 onChange={(e, value) => handlePassengers(type, value)}
//               >
//                 {[...Array(9).keys()].map((num) => (
//                   <ToggleButton key={num} value={num.toString()}>{num}</ToggleButton>
//                 ))}
//               </ToggleButtonGroup>
//             </Box>
//           ))}
//           <Button variant="contained" style={{ backgroundColor: "#ff6748", color: "white" }} fullWidth sx={{ mt: 2 }} onClick={() => setOpenModal(false)}>Done</Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Formofsecond;









import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
  Button,
  Tabs,
  Tab,
  Box,
  Grid,
  Typography,
  Checkbox,
  ToggleButton,
  ToggleButtonGroup,
  Modal
} from "@mui/material";

const Formofsecond = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    cabinClass: "ECONOMY",
    adults: "1",
    children: "0",
    infants: "0",
    directFlight: true,
    connectingFlight: false,
    fareType: "REGULAR",
  });
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePassengers = (name, value) => {
    if (value !== null) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCabinClassChange = (event) => {
    setFormData({ ...formData, cabinClass: event.target.value });
  };

  const handleFareChange = (event) => {
    setFormData({ ...formData, fareType: event.target.value });
  };

  const handleToggle = (name) => {
    setFormData((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = async () => {
    const apiUrl = "https://apitest.tripjack.com/fms/v1/air-search-all";
    const apiKey = "81210652be6625-ffb6-4457-8d7b-3b87bfa351c3";

    const routeInfos = [
      {
        fromCityOrAirport: { code: formData.from.toUpperCase() },
        toCityOrAirport: { code: formData.to.toUpperCase() },
        travelDate: formData.departureDate,
      },
    ];

    if (tab === 1) {
      routeInfos.push({
        fromCityOrAirport: { code: formData.to.toUpperCase() },
        toCityOrAirport: { code: formData.from.toUpperCase() },
        travelDate: formData.returnDate,
      });
    }

    const requestBody = {
      searchQuery: {
        cabinClass: formData.cabinClass,
        paxInfo: {
          ADULT: formData.adults,
          CHILD: formData.children,
          INFANT: formData.infants,
        },
        routeInfos,
        searchModifiers: {
          isDirectFlight: formData.directFlight,
          isConnectingFlight: formData.connectingFlight,
          pft: formData.fareType,
        },
      },
    };

    try {
      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
          apikey: apiKey,
        },
      });
      console.log("API Response:", response.data);
      alert("Flight search successful! Check console for results.");
    } catch (error) {
      console.error("API Error:", error);
      alert("Error fetching flight data.");
    }
  };

  return (
    <div style={{ width: "100%", backgroundColor: "#15457b" }}>
      <Card sx={{ maxWidth: 1200, margin: "auto", padding: 2, boxShadow: 3, mt: 2 }}>
        <CardContent>
          <Tabs 
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            variant="fullWidth"
            centered
          >
            <Tab label="One Way" />
            <Tab label="Round Trip" />
            <Tab label="Multi Trip" />
          </Tabs>

          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}><TextField fullWidth label="From" name="from" onChange={handleChange} /></Grid>
              <Grid item xs={12} sm={3}><TextField fullWidth label="To" name="to" onChange={handleChange} /></Grid>
              <Grid item xs={12} sm={3}><TextField fullWidth type="date" name="departureDate" onChange={handleChange} /></Grid>
              {tab === 1 && <Grid item xs={12} sm={3}><TextField fullWidth type="date" name="returnDate" onChange={handleChange} /></Grid>}
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  onClick={() => setOpenModal(true)}
                  label="Select Passengers & Class"
                  value={`${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants, ${formData.cabinClass}`}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item><FormControlLabel control={<Switch checked={formData.directFlight} onChange={() => handleToggle("directFlight")} />} label="Direct Flight" /></Grid>
              <Grid item><FormControlLabel control={<Switch checked={formData.connectingFlight} onChange={() => handleToggle("connectingFlight")} />} label="Connecting Flight" /></Grid>
            </Grid>
          </Box>

          <Box mt={2}>
            <Typography variant="h6">Select Fare Type</Typography>
            <FormControlLabel control={<Checkbox checked={formData.fareType === "REGULAR"} onChange={handleFareChange} value="REGULAR" />} label="Regular Fares" />
            <FormControlLabel control={<Checkbox checked={formData.fareType === "STUDENT"} onChange={handleFareChange} value="STUDENT" />} label="Student Fares" />
            <FormControlLabel control={<Checkbox checked={formData.fareType === "SENIOR_CITIZEN"} onChange={handleFareChange} value="SENIOR_CITIZEN" />} label="Senior Citizen Fares" />
          </Box>

          <Box mt={2} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={handleSubmit} style={{ backgroundColor: "#ff6748", color: "white" }}>Search Flights</Button>
          </Box>
        </CardContent>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
  <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "white", boxShadow: 24, p: 4, borderRadius: 2 }}>
    <Typography variant="h6">Select Passengers & Class</Typography>
    
    <FormControl fullWidth sx={{ mt: 2 }}>
      <InputLabel>Cabin Class</InputLabel>
      <Select value={formData.cabinClass} onChange={handleCabinClassChange}>
        <MenuItem value="ECONOMY">Economy</MenuItem>
        <MenuItem value="PREMIUM_ECONOMY">Premium Economy</MenuItem>
        <MenuItem value="BUSINESS">Business</MenuItem>
        <MenuItem value="FIRST">First Class</MenuItem>
      </Select>
    </FormControl>

    <Box mt={2} display="flex" flexDirection="column" gap={2}>
      <ToggleButtonGroup value={formData.adults} exclusive onChange={(e, value) => handlePassengers("adults", value)}>
        {[...Array(10)].map((_, i) => (
          <ToggleButton key={i} value={i + 1}>{i + 1}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography>Children</Typography>
      <ToggleButtonGroup value={formData.children} exclusive onChange={(e, value) => handlePassengers("children", value)}>
        {[...Array(5)].map((_, i) => (
          <ToggleButton key={i} value={i}>{i}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography>Infants</Typography>
      <ToggleButtonGroup value={formData.infants} exclusive onChange={(e, value) => handlePassengers("infants", value)}>
        {[...Array(3)].map((_, i) => (
          <ToggleButton key={i} value={i}>{i}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>

    <Box mt={3} display="flex" justifyContent="flex-end">
      <Button variant="contained" color="primary" onClick={() => setOpenModal(false)}>Done</Button>
    </Box>
  </Box>
</Modal>
   
      </Card>
    </div>
  );
};

export default Formofsecond;

