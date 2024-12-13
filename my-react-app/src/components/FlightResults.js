
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Form ,Tabs, ListGroup ,Tab} from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import Slider from 'react-input-slider';
import Form1 from './Form1';
import "../styles/Cardsection.css"

import { Box, Grid, Typography, Divider, Button } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import MealIcon from '@mui/icons-material/Restaurant';
import {  ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FlightResults = ({ segment, index }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const results = location.state?.results || [];
    const [activeColumn, setActiveColumn] = useState(null);
    const [filteredResults, setFilteredResults] = useState(results);
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 10000,
        airline: '',
        minDuration: 0,
        maxDuration: 600,
        departureRange: '',
        arrivalRange: '',
    });
    const [activeButton, setActiveButton] = useState("cheapest"); // Default active button
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [activeTab, setActiveTab] = useState("overview");
    
   
    const toggleDetails = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };
    const timeRanges = [
        { label: 'Before 6 AM', value: 'before6AM', start: 0, end: 6 },
        { label: '6 AM to 12 PM', value: '6AMto12PM', start: 6, end: 12 },
        { label: '12 PM to 6 PM', value: '12PMto6PM', start: 12, end: 18 },
        { label: 'After 6 PM', value: 'after6PM', start: 18, end: 24 },
    ];
    const handleColumnClick = (index) => {
        setActiveColumn(index);
    };
    const handleFlightSelection = (selectedFlight) => {
      // Extract priceId from the selected flight (from totalPriceList)
      const priceId = selectedFlight.totalPriceList?.[0]?.id; // Assuming you want the first option in totalPriceList
      console.log('Selected Flight priceId:', priceId); // Log for verification
  
      if (priceId) {
          // Navigate to the review page with the priceId
          navigate('/review', { state: { priceId } });
      } else {
          // Log error if priceId is not found
          console.error('No priceId found for the selected flight.');
      }
  };
  
  useEffect(() => {
    setFilteredResults(results);
}, [results]);
  
    useEffect(() => {
        if (results.length > 0) {
            const allPrices = results.map(flight => flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 0);
            const min = Math.min(...allPrices);
            const max = Math.max(...allPrices);

            setFilters(prevFilters => ({
                ...prevFilters,
                minPrice: min,
                maxPrice: max,
            }));
        }
    }, [results]);

    const airlines = [...new Set(results.flatMap(flight =>
        flight.sI.map(segment => segment.fD.aI.code)
    ))];

    useEffect(() => {
        filterFlights();
    }, [filters]);

    const filterFlights = () => {
        let filtered = results;

        filtered = filtered.filter((flight) => {
            const totalPrice = flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 0;
            return totalPrice >= filters.minPrice && totalPrice <= filters.maxPrice;
        });

        if (filters.airline) {
            filtered = filtered.filter((flight) =>
                flight.sI.some((segment) => segment.fD.aI.code === filters.airline)
            );
        }

        filtered = filtered.filter((flight) =>
            flight.sI.some(
                (segment) =>
                    segment.duration >= filters.minDuration &&
                    segment.duration <= filters.maxDuration
            )
        );

        if (filters.departureRange) {
            const range = timeRanges.find((range) => range.value === filters.departureRange);
            if (range) {
                filtered = filtered.filter((flight) =>
                    flight.sI.some((segment) => {
                        const hour = new Date(segment.dt).getHours();
                        return hour >= range.start && hour < range.end;
                    })
                );
            }
        }

        if (filters.arrivalRange) {
            const range = timeRanges.find((range) => range.value === filters.arrivalRange);
            if (range) {
                filtered = filtered.filter((flight) =>
                    flight.sI.some((segment) => {
                        const hour = new Date(segment.at).getHours();
                        return hour >= range.start && hour < range.end;
                    })
                );
            }
        }

        setFilteredResults(filtered);
    };

    const handleBooking = (flight) => {
        navigate('/booking', { state: { flight } });
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSliderChange = (value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            minPrice: value.min,
            maxPrice: value.max,
        }));
    };

    return (
        <div >
            <div style={{ backgroundImage: 'linear-gradient(0deg, #15457b, #051423)' }}>
                <Form1 />
            </div>
            <div className="d-flex"style={{ width: '99%'}}>
                <div className="sidebar" style={sidebarStyles}>
                    <h4 className="sidebar-title">
                        <FaFilter /> Filters
                    </h4>

                    <Form.Group className="mb-3">
                        <Form.Label>Price Range (₹)</Form.Label>
                        <Slider
                            axis="x"
                            x={{ min: filters.minPrice, max: filters.maxPrice }}
                            xmin={0}
                            xmax={10000}
                            xstep={10}
                            onChange={handleSliderChange}
                        />
                        <div className="d-flex justify-content-between mt-2">
                            <span>₹{filters.minPrice}</span>
                            <span>₹{filters.maxPrice}</span>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Airline</Form.Label>
                        <Form.Control
                            as="select"
                            name="airline"
                            value={filters.airline}
                            onChange={handleFilterChange}
                        >
                            <option value="">All Airlines</option>
                            {airlines.map((airlineCode, index) => {
                                const airlineName = results
                                    .flatMap(flight => flight.sI)
                                    .find(segment => segment.fD.aI.code === airlineCode)?.fD.aI.name;
                                return (
                                    <option key={index} value={airlineCode}>
                                        {airlineName} ({airlineCode})
                                    </option>
                                );
                            })}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>
        Departure From 
    </Form.Label>
                        <Form.Control
                            as="select"
                            name="departureRange"
                            value={filters.departureRange}
                            onChange={handleFilterChange}
                        >
                            <option value="">All</option>
                            {timeRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                    {range.label}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Arrival At</Form.Label>
                        <Form.Control
                            as="select"
                            name="arrivalRange"
                            value={filters.arrivalRange}
                            onChange={handleFilterChange}
                        >
                            <option value="">All</option>
                            {timeRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                    {range.label}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </div>

                            
                <div className="flight-list" style={{ flex: 1 }}>
                
                <div className="sort-container p-3">
      <ButtonGroup className="w-100 sort-options">
        {/* Cheapest Option */}
        <Button
          className={`cheapest ${activeButton === "cheapest" ? "active" : ""}`}
          onClick={() => handleButtonClick("cheapest")}
        >
          <div className="icon">&#8377;</div>
          <div>CHEAPEST</div>
          <small>&#8377; 10,821 | 02h 55m</small>
        </Button>

        {/* Nonstop First Option */}
        <Button
          className={`nonstop ${activeButton === "nonstop" ? "active" : ""}`}
          onClick={() => handleButtonClick("nonstop")}
        >
          <div className="icon">⚡</div>
          <div>NONSTOP FIRST</div>
          <small>&#8377; 10,821 | 02h 55m</small>
        </Button>

        {/* You May Prefer Option */}
        <Button
          className={`prefer ${activeButton === "prefer" ? "active" : ""}`}
          onClick={() => handleButtonClick("prefer")}
        >
          <div className="icon">⭐</div>
          <div>YOU MAY PREFER</div>
          <small>&#8377; 10,821 | 02h 55m</small>
        </Button>

        {/* Other Sort */}
        <Button
          className={`othersort ${activeButton === "othersort" ? "active" : ""}`}
          onClick={() => handleButtonClick("othersort")}
        >
          <div className="icon">☰</div>
          <div>Other Sort</div>
        </Button>
      </ButtonGroup>
    </div>
          


    <Row className="g-4">
            {filteredResults.length > 0 ? (
                filteredResults.map((flight, index) =>
                    flight.sI.map((segment, segmentIndex) => (
                        <Col key={`${index}-${segmentIndex}`} xs={12}>
                            <Card className="flight-card">
                                <Card.Body>
                                    <Row>
                                        {/* Airline Information */}
                                        <Col xs={3}>
                                            <div className="airline-info">
                                                <img
                                                    src={`/AirlinesLogo/${segment.fD.aI.code}.png`}
                                                    alt={segment.fD.aI.name}
                                                    className="airline-logo"
                                                />
                                                <div>
                                                    <strong>{segment.fD.aI.name}</strong>
                                                    <p>{segment.fD.fN}</p>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* Flight Details */}
                                        <Col xs={4}>
                                            <div className="flight-details">
                                                <div className="flight-time">
                                                    <strong>{segment.dt.split('T')[1]}</strong>
                                                    <p>{segment.da.city} ({segment.da.code})</p>
                                                </div>
                                                <div className="flight-duration">
                                                    <p>{Math.floor(segment.duration / 60)}h {segment.duration % 60}m</p>
                                                    <p>Non-stop</p>
                                                </div>
                                                <div className="flight-time">
                                                    <strong>{segment.at.split('T')[1]}</strong>
                                                    <p>{segment.aa.city} ({segment.aa.code})</p>
                                                </div>
                                            </div>
                                        </Col>

                                        {/* Price and Booking */}
                                        <Col xs={3} className="text-end">
                                            <div className="price-info">
                                                <strong>₹{flight.totalPriceList[0]?.fd.ADULT?.fC?.TF.toFixed(2)}</strong>
                                                <p>per adult</p>
                                            </div>
                                           
                                            
                                        </Col>
                                        {/* console.log({flight.totalPriceList[0]?.fd.ADULT?.fC?.TF.toFixed(2)}); */}
                                        <Col xs={2} className="text-end">
                                        <Button
  className="book-now-button"
  onClick={() => handleFlightSelection(flight)} // Passing the flight object to the handler
  variant="primary"
>
  Book Now
</Button>                             
      <a
            style={{ cursor: "pointer", color: "blue" }}
            variant="link"
            onClick={() => toggleDetails(index)}
          >
            {expandedIndex === index ? "Hide Details" : "View Flight Details"}
          </a>
                                        </Col>
                                    </Row>

                                    {expandedIndex === index && (
        <div className="flight-details-expanded mt-3">
          <Tabs
            id="flight-details-tabs"
            activeKey={activeTab}
            onSelect={(tab) => setActiveTab(tab)}
            className="mb-3"
          >
            {/* Tab 1: Overview */}
            <Tab eventKey="overview" title="Overview">
            <Box sx={{ padding: 3, border: "1px solid #ddd", borderRadius: "8px", background: "#f9f9f9" }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <FlightIcon sx={{ fontSize: 30, color: "#1976d2", marginRight: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {segment.id} ({segment.fD.aI.name}) - Flight {segment.fD.fN}
          
        </Typography>
      </Box>

      {/* Route and Flight Details */}
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={6}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Route:
          </Typography>
          <Typography variant="body2">{segment.departureAirport} ➝ {segment.arrivalAirport}</Typography>
          <Typography variant="body2">
            Departure: {segment.da.name} - {segment.da.terminal}
          </Typography>
          <Typography variant="body2">
            Arrival: {segment.aa.name} - {segment.aa.terminal}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Details:
          </Typography>
          <Typography variant="body2">Duration {Math.floor(segment.duration / 60)}h {segment.duration % 60}m</Typography>
          <Typography variant="body2">Stops: {segment.stops}</Typography>
          
          <Typography variant="body2">Layover: {segment.dt}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ marginBottom: 2 }} />

      
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Fare:
          </Typography>
          <Typography variant="body2">
            Total Price: ₹{flight.totalPriceList[0]?.fd.ADULT?.fC?.TF.toFixed(2)} 
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Baggage:
          </Typography>
          <Typography variant="body2">Checked: {segment.checkedBaggage}</Typography>
          <Typography variant="body2">Cabin: {segment.cabinBaggage}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 2 }} />

      {/* Meal and Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MealIcon sx={{ fontSize: 20, color: segment.fD.aI.isLcc ? "green" : "red", marginRight: 1 }} />
          <Typography variant="body2">{segment.fD.aI.isLcc ? "Free Meal Included" : "Paid Meal"}</Typography>
        </Box>
        <Box>
          
          <Button variant="contained" color="primary">
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
</Tab>








            {/* -------------------------------------------------------------------------------Tab 2: Baggage Info -------------------------------------------------------------------*/}
            <Tab eventKey="Fare Summary" title="Fare Summary" >
              
              <Row style={{borderTop:"1px solid grey ",borderLeft:"1px solid grey",borderRight:"1px solid grey",borderRadius:"5px",padding:"10px"}}>
        <Col>
          <h5>Fare Breakup</h5>
        </Col>
      </Row>

      {/* Row 2: Fare Details */}
      <Row style={{borderTop:"1px solid grey ",borderLeft:"1px solid grey",borderRight:"1px solid grey",borderRadius:"5px",padding:"10px"}}>
        <Col xs={6}>
          <div>Base Fare: ₹{flight.totalPriceList[0]?.fd.ADULT?.fC?.BF.toFixed(2)}</div>
        </Col>
        
      </Row>

      <Row style={{borderTop:"1px solid grey ",borderLeft:"1px solid grey",borderRight:"1px solid grey",borderRadius:"5px",padding:"10px"}}>
        <Col xs={6}>
        <div>Taxes and  Fees: ₹{flight.totalPriceList[0]?.fd.ADULT?.fC?.TAF}</div>
        </Col>
        {/* <Col xs={6}>
          <div><strong>Discount:</strong> ₹{segment.discount}</div>
        </Col> */}
      </Row>

      <Row style={{borderTop:"1px solid grey ",borderBottom:"1px solid grey ",borderLeft:"1px solid grey",borderRight:"1px solid grey",borderRadius:"5px",padding:"10px"}}>
        <Col xs={6}>
        <div><strong>Total Fare: ₹{flight.totalPriceList[0]?.fd.ADULT?.fC?.TF.toFixed(2)}</strong></div>
        </Col>
        {/* <Col xs={6}>
          <div><strong>Refundable:</strong> {segment.isRefundable ? 'Yes' : 'No'}</div>
        </Col> */}
      </Row>
            </Tab>

            {/* Tab 3: Stops */}
            <Tab eventKey="CANCELLATION" title="CANCELLATION ">
              {/* <h5>Stop Information</h5>
              <p>
                <strong>Number of Stops:</strong> {segment.stops}
              </p>
              {segment.so?.map((stop, idx) => (
                <p key={idx}>
                  <strong>Stop {idx + 1}:</strong> {stop.city} ({stop.code})
                </p>
              ))} */}
               <Card className="text-dark">
      <Card.Body>
        <Card.Title className="font-weight-bold">Flight Details</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col>
                <p className="font-weight-bold">Time frame</p>
                <p>(From Scheduled flight departure)</p>
              </Col>
              <Col>
                <p className="font-weight-bold">Airline Fee + MMT Fee</p>
                <p>(Per passenger)</p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p>0 hours to 4 hours*</p>
              </Col>
              <Col>
                <p>ADULT : <b>Non Refundable</b></p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p>4 hours to 4 days*</p>
              </Col>
              <Col>
                <p>ADULT : <b>₹ 4,279 + ₹ 300</b></p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p>4 days to 365 days*</p>
              </Col>
              <Col>
                <p>ADULT : <b>₹ 3,209 + ₹ 300</b></p>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        <p className="text-muted mt-3">*From the Time of Departure</p>
      </Card.Body>
    </Card>
            </Tab>

            {/* Tab 4: Additional Info */}
            <Tab eventKey="additional" title="Additional Info">
              <Card className="text-dark">
      <Card.Body>
        <Card.Title className="font-weight-bold">Flight Details</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col>
                <p className="font-weight-bold">Time frame</p>
                <p>(From Scheduled flight departure)</p>
              </Col>
              <Col>
                <p className="font-weight-bold">Airline Fee + MMT Fee + Fare difference</p>
                <p>(Per passenger)</p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p>0 hours to 4 hours*</p>
              </Col>
              <Col>
                <p>ADULT : <b>Non Changeable</b></p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p>4 hours to 4 days*</p>
              </Col>
              <Col>
                <p>ADULT : <b>₹ 2,999 + ₹ 300 + Fare difference</b></p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p>4 days to 365 days*</p>
              </Col>
              <Col>
                <p>ADULT : <b>₹ 2,250 + ₹ 300 + Fare difference</b></p>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        <p className="text-muted mt-3">*From the Time of Departure</p>
      </Card.Body>
    </Card>
            </Tab>
          </Tabs>
        </div>
      )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )
            ) : (
                <p>No flights found.</p>
            )}
        </Row>
                </div>
            </div>
        </div>
    );
};

const sidebarStyles = {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    height: '100vh',
    position: 'sticky',
    top: '0',
};

export default FlightResults;
