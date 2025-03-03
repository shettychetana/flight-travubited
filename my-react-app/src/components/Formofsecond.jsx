import React, { useState } from "react";
import axios from "axios";
import {
  Card,Autocomplete,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Tabs,
  Tab,
  Box,
  Grid,
  Typography,
  IconButton,
  Modal,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import airportData from "./airport_data.json";

const Formofsecond = () => {
  const [tab, setTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    routes: [{ from: "", to: "", travelDate: "" }],
    returnDate: "",
    cabinClass: "ECONOMY",
    adults: "1",
    children: "0",
    infants: "0",
    directFlight: false,
    connectingFlight: false,
    fareType: "REGULAR",
  });

  const handleTabChange = (newValue) => {
    setTab(newValue);
    if (newValue === 0) {
      setFormData({
        ...formData,
        routes: [formData.routes[0]],
        returnDate: ""
      });
    } else if (newValue === 1) {
      setFormData({
        ...formData,
        routes: [formData.routes[0]],
      });
    } else {
      setFormData({
        ...formData,
        routes: formData.routes.length > 1 ? formData.routes : [
          ...formData.routes,
          { from: "", to: "", travelDate: "" }
        ]
      });
    }
  };

  const handleChange2 = (index, e) => {
    const { name, value } = e.target;
    const updatedRoutes = [...formData.routes];
    updatedRoutes[index][name] = value;
    setFormData({ ...formData, routes: updatedRoutes });
  };
  const handleChange1 = (index, field, value) => {
    setFormData((prevState) => {
      const updatedRoutes = [...prevState.routes];
  
      // Ensure the correct structure for routeInfos
      if (!updatedRoutes[index]) {
        updatedRoutes[index] = { fromCityOrAirport: {}, toCityOrAirport: {}, travelDate: "" };
      }
  
      // Update the correct field
      if (field === "from") {
        updatedRoutes[index].fromCityOrAirport = { code: value };
      } else if (field === "to") {
        updatedRoutes[index].toCityOrAirport = { code: value };
      }
  
      return { ...prevState, routes: updatedRoutes };
    });
  };
  
  // const handleChange = (field, value) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [field]: value, // No need to access e.target
  //   }));
  // };
  
  const handleReturnDateChange = (e) => {
    setFormData({ ...formData, returnDate: e.target.value });
  };

  const handlePassengers = (name, value) => {
    if (value !== null) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFareChange = (e) => {
    setFormData({ ...formData, fareType: e.target.value });
  };

  const handleCabinClassChange = (e) => {
    setFormData({ ...formData, cabinClass: e.target.value });
  };

  const addRoute = () => {
    if (formData.routes.length < 6) {
      setFormData({
        ...formData,
        routes: [...formData.routes, { from: "", to: "", travelDate: "" }],
      });
    }
  };

  const removeRoute = (index) => {
    if (formData.routes.length > 1) {
      setFormData({
        ...formData,
        routes: formData.routes.filter((_, i) => i !== index),
      });
    }
  };

//   const handleSubmit = async () => {
//     const apiUrl = "https://apitest.tripjack.com/fms/v1/air-search-all";
//     const apiKey = "81210652be6625-ffb6-4457-8d7b-3b87bfa351c3";

//     let routeInfos = formData.routes.map((route) => ({
//       fromCityOrAirport: { code: route.from.toUpperCase() },
//       toCityOrAirport: { code: route.to.toUpperCase() },
//       travelDate: route.travelDate,
//     }));

//     if (tab === 1) {
//       routeInfos.push({
//         fromCityOrAirport: { code: formData.routes[0].to.toUpperCase() },
//         toCityOrAirport: { code: formData.routes[0].from.toUpperCase() },
//         travelDate: formData.returnDate,
//       });
//     }

//     const requestBody = {
//       searchQuery: {
//         cabinClass: formData.cabinClass,
//         paxInfo: {
//           ADULT: formData.adults,
//           CHILD: formData.children,
//           INFANT: formData.infants,
//         },
//         routeInfos,
//         searchModifiers: {
//           isDirectFlight: formData.directFlight,
//           isConnectingFlight: formData.connectingFlight,
//           pft: formData.fareType,
//         },
//       },
//     };
//  console.log("requestBody",requestBody);
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
const handleSubmit = async () => {
  setLoading(true); // Start loading
  const apiUrl = "https://apitest.tripjack.com/fms/v1/air-search-all";
  const apiKey = "81210652be6625-ffb6-4457-8d7b-3b87bfa351c3";

  console.log("Form Data Before Processing:", JSON.stringify(formData, null, 2));

  let routeInfos = formData.routes.map((route, index) => {
    console.log(`Processing Route ${index}:`, route);

    return {
      fromCityOrAirport: { code: route.fromCityOrAirport?.code?.toUpperCase() || "" },
      toCityOrAirport: { code: route.toCityOrAirport?.code?.toUpperCase() || "" },
      travelDate: route.travelDate ? new Date(route.travelDate).toISOString().split("T")[0] : "",
    };
  });

  // Handling return date for round trips
  if (tab === 1 && formData.routes.length > 0) {
    routeInfos.push({
      fromCityOrAirport: { code: formData.routes[0].toCityOrAirport?.code?.toUpperCase() || "" },
      toCityOrAirport: { code: formData.routes[0].fromCityOrAirport?.code?.toUpperCase() || "" },
      travelDate: formData.returnDate ? new Date(formData.returnDate).toISOString().split("T")[0] : "",
    });
  }

  // API request payload
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

  console.log("Final API Request Body:", JSON.stringify(requestBody, null, 2));

  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
      },
    });
    console.log("API Response:", response.data);
    alert("Flight search successful! Check console for results.");
    setLoading(false); // Stop loading
    navigate("/flight-list", { state: { flights: response.data } });
  } catch (error) {
    console.error("API Error:", error);
    alert("Error fetching flight data.");
    setLoading(false); 
  }
};

  return (
    <div style={{ width: "100%", backgroundColor: "#15457b" }}>
      <Card sx={{ maxWidth: 1200, margin: "auto", padding: 2, boxShadow: 3, mt: 2 }}>
        <CardContent>
          <Tabs value={tab} onChange={(e, newValue) => handleTabChange(newValue)} variant="fullWidth" centered>
            <Tab label="One Way" />
            <Tab label="Round Trip" />
            <Tab label="Multi City" />
          </Tabs>

          <Box mt={2}>
            {formData.routes.map((route, index) => (
              <Grid container spacing={2} key={index} alignItems="center">
                <Grid item xs={12} sm={3}>
                  {/* <TextField
                    fullWidth
                    label="From"
                    name="from"
                    value={route.from}
                    onChange={(e) => handleChange(index, e)}
                  /> */}
           <Autocomplete
  options={airportData}
  getOptionLabel={(option) => `${option.name} (${option.code})`}
  onChange={(event, value) => {
    handleChange1(index, "from", value?.code || "");
  }}
  renderInput={(params) => <TextField {...params} label="From" variant="outlined" fullWidth />}
/>




                </Grid>
                <Grid item xs={12} sm={3}>
                  {/* <TextField
                    fullWidth
                    label="To"
                    name="to"
                    value={route.to}
                    onChange={(e) => handleChange(index, e)}
                  /> */}
                  

                  <Autocomplete
  options={airportData}
  getOptionLabel={(option) => `${option.name} (${option.code})`}
  onChange={(event, value) => {
    handleChange1(index, "to", value?.code || "");
  }}
  renderInput={(params) => <TextField {...params} label="To" variant="outlined" fullWidth />}
/>



                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    type="date"
                    name="travelDate"
                    value={route.travelDate}
                    onChange={(e) => handleChange2(index, e)}
                  />
                </Grid>
                {tab === 2 && (
                  <Grid item xs={12} sm={3}>
                    {index > 0 && (
                      <IconButton onClick={() => removeRoute(index)} color="error">
                        <RemoveCircleOutline />
                      </IconButton>
                    )}
                    {index === formData.routes.length - 1 && formData.routes.length < 6 && (
                      <IconButton onClick={addRoute} color="primary">
                        <AddCircleOutline />
                      </IconButton>
                    )}
                  </Grid>
                )}
              </Grid>
            ))}

            <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  onClick={() => setOpenModal(true)}
                  label="Select Passengers & Class"
                  value={`${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants, ${formData.cabinClass}`}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              {tab === 1 && (
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Return Date"
                    value={formData.returnDate}
                    onChange={handleReturnDateChange}
                  />
                </Grid>
              )}
            </Grid>

            <Box mt={2} display="flex" gap={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.directFlight}
                    onChange={handleCheckboxChange}
                    name="directFlight"
                  />
                }
                label="Direct Flight"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.connectingFlight}
                    onChange={handleCheckboxChange}
                    name="connectingFlight"
                  />
                }
                label="Connecting Flight"
              />
            </Box>

            <Box mt={2}>
              <Typography variant="h6">Select Fare Type</Typography>
              <RadioGroup
                row
                value={formData.fareType}
                onChange={handleFareChange}
              >
                <FormControlLabel
                  value="REGULAR"
                  control={<Radio />}
                  label="Regular Fares"
                />
                <FormControlLabel
                  value="STUDENT"
                  control={<Radio />}
                  label="Student Fares"
                />
                <FormControlLabel
                  value="SENIOR_CITIZEN"
                  control={<Radio />}
                  label="Senior Citizen Fares"
                />
              </RadioGroup>
            </Box>
          </Box>

          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <Box sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "white",
              boxShadow: 24,
              p: 4,
              borderRadius: 2
            }}>
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
              <Box mt={2}>
                <Typography>Adults</Typography>
                <RadioGroup
                  row
                  value={formData.adults}
                  onChange={(e) => handlePassengers("adults", e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <FormControlLabel
                      key={num}
                      value={num.toString()}
                      control={<Radio />}
                      label={num}
                    />
                  ))}
                </RadioGroup>
              </Box>
              <Box mt={2}>
                <Typography>Children</Typography>
                <RadioGroup
                  row
                  value={formData.children}
                  onChange={(e) => handlePassengers("children", e.target.value)}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <FormControlLabel
                      key={num}
                      value={num.toString()}
                      control={<Radio />}
                      label={num}
                    />
                  ))}
                </RadioGroup>
              </Box>
              <Box mt={2}>
                <Typography>Infants</Typography>
                <RadioGroup
                  row
                  value={formData.infants}
                  onChange={(e) => handlePassengers("infants", e.target.value)}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <FormControlLabel
                      key={num}
                      value={num.toString()}
                      control={<Radio />}
                      label={num}
                    />
                  ))}
                </RadioGroup>
              </Box>
              <Box mt={3} display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" onClick={() => setOpenModal(false)}>
                  Done
                </Button>
              </Box>
            </Box>
          </Modal>

          <Box mt={3} display="flex" justifyContent="center">
            {/* <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{ backgroundColor: "#ff6748", color: "white" }}
            >
              Search Flights
            </Button> */}
            {loading ? (
  <Box display="flex" justifyContent="center" mt={3}>
    <CircularProgress />
  </Box>
) : (
  <Button variant="contained" color="primary" onClick={handleSubmit}>
    Search Flights
  </Button>
)}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Formofsecond;