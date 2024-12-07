{/* <Card className="text-dark">
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
    </Card> */}
    // import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Row, Col, Card, Button, Form } from 'react-bootstrap';
// import { FaFilter } from 'react-icons/fa'; // Import icon
// import Slider from 'react-input-slider'; // Import range slider component
// import Form1 from './Form1';
// const FlightResults = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const results = location.state?.results || [];
    
//     const [filteredResults, setFilteredResults] = useState(results);
//     const [filters, setFilters] = useState({
//         minPrice: 0,
//         maxPrice: 10000,
//         airline: '',
//         minDuration: 0,
//         maxDuration: 600,
//         departureTime: ''
//     });

//     // Determine the min and max price from API results
//     useEffect(() => {
//         if (results.length > 0) {
//             const allPrices = results.map(flight => flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 0);
//             const min = Math.min(...allPrices);
//             const max = Math.max(...allPrices);

//             // Initialize filter with dynamic values
//             setFilters(prevFilters => ({
//                 ...prevFilters,
//                 minPrice: min,
//                 maxPrice: max
//             }));
//         }
//     }, [results]);

//     const airlines = [...new Set(results.flatMap(flight =>
//         flight.sI.map(segment => segment.fD.aI.code)
//     ))];

//     useEffect(() => {
//         console.log("Filters Updated:", filters); // Debugging: Log the filters state
//         filterFlights();
//     }, [filters]);

//     const filterFlights = () => {
//         let filtered = results;

//         console.log("Filtering flights with the following filters:", filters); // Debugging: Log filter criteria

//         filtered = filtered.filter(flight => {
//             const totalPrice = flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 0;
//             return totalPrice >= filters.minPrice && totalPrice <= filters.maxPrice;
//         });

//         if (filters.airline) {
//             filtered = filtered.filter(flight => flight.sI.some(segment => segment.fD.aI.code === filters.airline));
//         }

//         filtered = filtered.filter(flight => {
//             return flight.sI.some(segment => segment.duration >= filters.minDuration && segment.duration <= filters.maxDuration);
//         });

//         if (filters.departureTime) {
//             filtered = filtered.filter(flight => {
//                 return flight.sI.some(segment => new Date(segment.dt).toLocaleTimeString().includes(filters.departureTime));
//             });
//         }

//         setFilteredResults(filtered);
//         console.log("Filtered Results:", filtered); // Debugging: Log filtered results
//     };

//     const handleBooking = (flight) => {
//         navigate('/booking', { state: { flight } });
//     };

//     const handleFilterChange = (e) => {
//         const { name, value } = e.target;
//         setFilters(prevFilters => ({
//             ...prevFilters,
//             [name]: value
//         }));
//     };

//     const handleSliderChange = (value) => {
//         console.log("Slider Change - New Value:", value); // Debugging: Log slider value
//         setFilters(prevFilters => ({
//             ...prevFilters,
//             minPrice: value.min,
//             maxPrice: value.max
//         }));
//     };

//     return (
//         <div>
//            <div style={{ backgroundImage: 'linear-gradient(0deg, #15457b, #051423)' }}>
//   <Form1 />
// </div>
//             <div className="d-flex">
//                 {/* Sidebar */}
//                 <div className="sidebar" style={sidebarStyles}>
//                     <h4 className="sidebar-title">
//                         <FaFilter /> Filters
//                     </h4>

//                     {/* Price Range Filter */}
//                     <Form.Group className="mb-3">
//                         <Form.Label>Price Range (₹)</Form.Label>
//                         <Slider
//                             axis="x"
//                             x={{ min: filters.minPrice, max: filters.maxPrice }}
//                             xmin={0}
//                             xmax={10000}
//                             xstep={10}
//                             onChange={handleSliderChange}
//                             styles={{
//                                 track: {
//                                     backgroundColor: '#ddd',
//                                     height: '6px',
//                                 },
//                                 active: {
//                                     backgroundColor: '#007bff',
//                                 },
//                                 thumb: {
//                                     backgroundColor: '#007bff',
//                                     borderRadius: '50%',
//                                     width: '20px',
//                                     height: '20px',
//                                 },
//                             }}
//                         />
//                         <div className="d-flex justify-content-between mt-2">
//                             <span>₹{filters.minPrice}</span>
//                             <span>₹{filters.maxPrice}</span>
//                         </div>
//                     </Form.Group>

                                
//                     {/* Airline Filter */}
//                     <Form.Group className="mb-3">
//                         <Form.Label>Airline</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="airline"
//                             value={filters.airline}
//                             onChange={handleFilterChange}
//                         >
//                             <option value="">All Airlines</option>
//                             {airlines.map((airlineCode, index) => {
//                                 const airlineName = results
//                                     .flatMap(flight => flight.sI)
//                                     .find(segment => segment.fD.aI.code === airlineCode)?.fD.aI.name;
//                                 return (
//                                     <option key={index} value={airlineCode}>
//                                         {airlineName} ({airlineCode})
//                                     </option>
//                                 );
//                             })}
//                         </Form.Control>
//                     </Form.Group>
                    
                    
//                 </div>

//                 {/* Flight List */}
//                 <div className="flight-list" style={{ flex: 1 }}>
//                     <Row className="g-4">
//                         {filteredResults.length > 0 ? (
//                             filteredResults.map((flight, index) => (
//                                 flight.sI.map((segment, segmentIndex) => (
//                                     <Col key={`${index}-${segmentIndex}`} xs={12}>
//                                         <Card>
//                                             <Card.Body>
//                                                 <Card.Title>{segment.fD.aI.name} ({segment.fD.aI.code})</Card.Title>
//                                                 <Card.Title> Stop {segment.stops}  </Card.Title>
//                                                 <Card.Title> Duration {segment.duration} </Card.Title>
                                                
//                                                 <Card.Text><strong>Flight Number:</strong> {segment.fD.fN}</Card.Text>
//                                                 <Card.Text><strong>Departure:</strong> {segment.da.city} ({segment.da.code})</Card.Text>
//                                                 <Card.Text><strong>Arrival:</strong> {segment.aa.city} ({segment.aa.code})</Card.Text>
//                                                 <Card.Text><strong>Price:</strong> ₹{flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 'N/A'}</Card.Text>
//                                                 <Button variant="primary" onClick={() => handleBooking(flight)}>
//                                                     Book Now
//                                                 </Button>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))
//                             ))
//                         ) : (
//                             <p>No flights found.</p>
//                         )}
//                     </Row>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const sidebarStyles = {
//     width: '300px',
//     padding: '20px',
//     backgroundColor: '#f8f9fa',
//     borderRadius: '10px',
//     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//     height: '100vh',
//     position: 'sticky',
//     top: '0'
// };

// export default FlightResults;