// {/* <Card className="text-dark">
//       <Card.Body>
//         <Card.Title className="font-weight-bold">Flight Details</Card.Title>
//         <ListGroup variant="flush">
//           <ListGroup.Item>
//             <Row>
//               <Col>
//                 <p className="font-weight-bold">Time frame</p>
//                 <p>(From Scheduled flight departure)</p>
//               </Col>
//               <Col>
//                 <p className="font-weight-bold">Airline Fee + MMT Fee + Fare difference</p>
//                 <p>(Per passenger)</p>
//               </Col>
//             </Row>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <Row>
//               <Col>
//                 <p>0 hours to 4 hours*</p>
//               </Col>
//               <Col>
//                 <p>ADULT : <b>Non Changeable</b></p>
//               </Col>
//             </Row>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <Row>
//               <Col>
//                 <p>4 hours to 4 days*</p>
//               </Col>
//               <Col>
//                 <p>ADULT : <b>₹ 2,999 + ₹ 300 + Fare difference</b></p>
//               </Col>
//             </Row>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <Row>
//               <Col>
//                 <p>4 days to 365 days*</p>
//               </Col>
//               <Col>
//                 <p>ADULT : <b>₹ 2,250 + ₹ 300 + Fare difference</b></p>
//               </Col>
//             </Row>
//           </ListGroup.Item>
//         </ListGroup>
//         <p className="text-muted mt-3">*From the Time of Departure</p>
//       </Card.Body>
//     </Card> */}
//     // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { Row, Col, Card, Button, Form } from 'react-bootstrap';
// // import { FaFilter } from 'react-icons/fa'; // Import icon
// // import Slider from 'react-input-slider'; // Import range slider component
// // import Form1 from './Form1';
// // const FlightResults = () => {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const results = location.state?.results || [];
    
// //     const [filteredResults, setFilteredResults] = useState(results);
// //     const [filters, setFilters] = useState({
// //         minPrice: 0,
// //         maxPrice: 10000,
// //         airline: '',
// //         minDuration: 0,
// //         maxDuration: 600,
// //         departureTime: ''
// //     });

// //     // Determine the min and max price from API results
// //     useEffect(() => {
// //         if (results.length > 0) {
// //             const allPrices = results.map(flight => flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 0);
// //             const min = Math.min(...allPrices);
// //             const max = Math.max(...allPrices);

// //             // Initialize filter with dynamic values
// //             setFilters(prevFilters => ({
// //                 ...prevFilters,
// //                 minPrice: min,
// //                 maxPrice: max
// //             }));
// //         }
// //     }, [results]);

// //     const airlines = [...new Set(results.flatMap(flight =>
// //         flight.sI.map(segment => segment.fD.aI.code)
// //     ))];

// //     useEffect(() => {
// //         console.log("Filters Updated:", filters); // Debugging: Log the filters state
// //         filterFlights();
// //     }, [filters]);

// //     const filterFlights = () => {
// //         let filtered = results;

// //         console.log("Filtering flights with the following filters:", filters); // Debugging: Log filter criteria

// //         filtered = filtered.filter(flight => {
// //             const totalPrice = flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 0;
// //             return totalPrice >= filters.minPrice && totalPrice <= filters.maxPrice;
// //         });

// //         if (filters.airline) {
// //             filtered = filtered.filter(flight => flight.sI.some(segment => segment.fD.aI.code === filters.airline));
// //         }

// //         filtered = filtered.filter(flight => {
// //             return flight.sI.some(segment => segment.duration >= filters.minDuration && segment.duration <= filters.maxDuration);
// //         });

// //         if (filters.departureTime) {
// //             filtered = filtered.filter(flight => {
// //                 return flight.sI.some(segment => new Date(segment.dt).toLocaleTimeString().includes(filters.departureTime));
// //             });
// //         }

// //         setFilteredResults(filtered);
// //         console.log("Filtered Results:", filtered); // Debugging: Log filtered results
// //     };

// //     const handleBooking = (flight) => {
// //         navigate('/booking', { state: { flight } });
// //     };

// //     const handleFilterChange = (e) => {
// //         const { name, value } = e.target;
// //         setFilters(prevFilters => ({
// //             ...prevFilters,
// //             [name]: value
// //         }));
// //     };

// //     const handleSliderChange = (value) => {
// //         console.log("Slider Change - New Value:", value); // Debugging: Log slider value
// //         setFilters(prevFilters => ({
// //             ...prevFilters,
// //             minPrice: value.min,
// //             maxPrice: value.max
// //         }));
// //     };

// //     return (
// //         <div>
// //            <div style={{ backgroundImage: 'linear-gradient(0deg, #15457b, #051423)' }}>
// //   <Form1 />
// // </div>
// //             <div className="d-flex">
// //                 {/* Sidebar */}
// //                 <div className="sidebar" style={sidebarStyles}>
// //                     <h4 className="sidebar-title">
// //                         <FaFilter /> Filters
// //                     </h4>

// //                     {/* Price Range Filter */}
// //                     <Form.Group className="mb-3">
// //                         <Form.Label>Price Range (₹)</Form.Label>
// //                         <Slider
// //                             axis="x"
// //                             x={{ min: filters.minPrice, max: filters.maxPrice }}
// //                             xmin={0}
// //                             xmax={10000}
// //                             xstep={10}
// //                             onChange={handleSliderChange}
// //                             styles={{
// //                                 track: {
// //                                     backgroundColor: '#ddd',
// //                                     height: '6px',
// //                                 },
// //                                 active: {
// //                                     backgroundColor: '#007bff',
// //                                 },
// //                                 thumb: {
// //                                     backgroundColor: '#007bff',
// //                                     borderRadius: '50%',
// //                                     width: '20px',
// //                                     height: '20px',
// //                                 },
// //                             }}
// //                         />
// //                         <div className="d-flex justify-content-between mt-2">
// //                             <span>₹{filters.minPrice}</span>
// //                             <span>₹{filters.maxPrice}</span>
// //                         </div>
// //                     </Form.Group>

                                
// //                     {/* Airline Filter */}
// //                     <Form.Group className="mb-3">
// //                         <Form.Label>Airline</Form.Label>
// //                         <Form.Control
// //                             as="select"
// //                             name="airline"
// //                             value={filters.airline}
// //                             onChange={handleFilterChange}
// //                         >
// //                             <option value="">All Airlines</option>
// //                             {airlines.map((airlineCode, index) => {
// //                                 const airlineName = results
// //                                     .flatMap(flight => flight.sI)
// //                                     .find(segment => segment.fD.aI.code === airlineCode)?.fD.aI.name;
// //                                 return (
// //                                     <option key={index} value={airlineCode}>
// //                                         {airlineName} ({airlineCode})
// //                                     </option>
// //                                 );
// //                             })}
// //                         </Form.Control>
// //                     </Form.Group>
                    
                    
// //                 </div>

// //                 {/* Flight List */}
// //                 <div className="flight-list" style={{ flex: 1 }}>
// //                     <Row className="g-4">
// //                         {filteredResults.length > 0 ? (
// //                             filteredResults.map((flight, index) => (
// //                                 flight.sI.map((segment, segmentIndex) => (
// //                                     <Col key={`${index}-${segmentIndex}`} xs={12}>
// //                                         <Card>
// //                                             <Card.Body>
// //                                                 <Card.Title>{segment.fD.aI.name} ({segment.fD.aI.code})</Card.Title>
// //                                                 <Card.Title> Stop {segment.stops}  </Card.Title>
// //                                                 <Card.Title> Duration {segment.duration} </Card.Title>
                                                
// //                                                 <Card.Text><strong>Flight Number:</strong> {segment.fD.fN}</Card.Text>
// //                                                 <Card.Text><strong>Departure:</strong> {segment.da.city} ({segment.da.code})</Card.Text>
// //                                                 <Card.Text><strong>Arrival:</strong> {segment.aa.city} ({segment.aa.code})</Card.Text>
// //                                                 <Card.Text><strong>Price:</strong> ₹{flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 'N/A'}</Card.Text>
// //                                                 <Button variant="primary" onClick={() => handleBooking(flight)}>
// //                                                     Book Now
// //                                                 </Button>
// //                                             </Card.Body>
// //                                         </Card>
// //                                     </Col>
// //                                 ))
// //                             ))
// //                         ) : (
// //                             <p>No flights found.</p>
// //                         )}
// //                     </Row>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // const sidebarStyles = {
// //     width: '300px',
// //     padding: '20px',
// //     backgroundColor: '#f8f9fa',
// //     borderRadius: '10px',
// //     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
// //     height: '100vh',
// //     position: 'sticky',
// //     top: '0'
// // };

// // export default FlightResults;
// {/* <div class="col1" >
//     <div class="nested-grid">
//       <div class="nested-col1"><strong>Fare Summary</strong></div>
//       <div class="nested-col2">Nested Column 2</div>
//     </div>
//     <div class="nested-grid">
//       <div class="nested-col1">Fare Type</div>
//       <div class="nested-col2">Nested Column 2</div>
//     </div>
//     <div class="nested-grid">
//       <div class="nested-col1">Base Fare</div>
//       <div class="nested-col2">Nested Column 2</div>
//     </div>
//     <div class="nested-grid">
//       <div class="nested-col1">Taxes & Fees</div>
//       <div class="nested-col2">Nested Column 2</div>
//     </div>
//     <div class="nested-grid"  style={{borderTop: "1px solid grey"}}>
//       <div class="nested-col1">Total Amount</div>
//       <div class="nested-col2">Nested Column 2</div>
//     </div>
//   </div>
  

//   <div class="grid-item">Column 2</div> */}
// //   import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Container, Row, Col, Button, Form } from 'react-bootstrap';

// // const FlightSearchForm = () => {
// //     const [formData, setFormData] = useState({
// //         from: '',
// //         to: '',
// //         travelDate: '',
// //         returnDate: '',
// //         adults: 1,
// //         children: 0,
// //         infants: 0,
// //         tripType: 'ONE_WAY',
// //         cabinClass: 'ECONOMY',
// //         specialType: '',
// //         multiCity: [{ from: '', to: '', travelDate: '' }],
// //     });

// //     const navigate = useNavigate();

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData((prev) => ({ ...prev, [name]: value }));
// //     };

// //     const handleMultiCityChange = (e, index) => {
// //         const { name, value } = e.target;
// //         const updatedMultiCity = [...formData.multiCity];
// //         updatedMultiCity[index] = { ...updatedMultiCity[index], [name]: value };
// //         setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
// //     };

// //     const handleAddCity = () => {
// //         setFormData((prev) => ({
// //             ...prev,
// //             multiCity: [...prev.multiCity, { from: '', to: '', travelDate: '' }],
// //         }));
// //     };

// //     const handleRemoveCity = (index) => {
// //         const updatedMultiCity = formData.multiCity.filter((_, i) => i !== index);
// //         setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         const requestBody = {
// //             searchQuery: {
// //                 cabinClass: formData.cabinClass,
// //                 paxInfo: {
// //                     ADULT: formData.adults.toString(),
// //                     CHILD: formData.children.toString(),
// //                     INFANT: formData.infants.toString(),
// //                 },
// //                 routeInfos: formData.tripType === 'MULTI_CITY'
// //                     ? formData.multiCity.map((city) => ({
// //                         fromCityOrAirport: { code: city.from.trim() },
// //                         toCityOrAirport: { code: city.to.trim() },
// //                         travelDate: city.travelDate,
// //                     }))
// //                     : [
// //                         {
// //                             fromCityOrAirport: { code: formData.from.trim() },
// //                             toCityOrAirport: { code: formData.to.trim() },
// //                             travelDate: formData.travelDate,
// //                             returnDate: formData.returnDate,
// //                         },
// //                     ],
// //                 searchModifiers: {
// //                     isDirectFlight: true,
// //                     isConnectingFlight: false,
// //                 },
// //             },
// //         };

// //         try {
// //             const response = await fetch('https://tripjack.com/fms/v1/air-search-all', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'apikey': '610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172',
// //                 },
// //                 body: JSON.stringify(requestBody),
// //             });

// //             const data = await response.json();
// //             console.log('API Response:', data);

// //             navigate('/results', { state: { results: data.searchResult?.tripInfos?.ONWARD || [] } });
// //         } catch (error) {
// //             console.error('Error fetching flight data:', error);
// //         }
// //     };

// //     return (
// //         <div className="flight-search-container">
// //             <form onSubmit={handleSubmit} className="flight-search-form">
// //                 <Container>
// //                     <Row className="mb-4">
// //                         <Col md={6}>
// //                             <div className="trip-type-radio-buttons d-flex">
// //                                 {['ONE_WAY', 'ROUND_TRIP', 'MULTI_CITY'].map((type) => (
// //                                     <div key={type} className="radio-button">
// //                                         <input
// //                                             type="radio"
// //                                             id={type}
// //                                             name="tripType"
// //                                             value={type}
// //                                             checked={formData.tripType === type}
// //                                             onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
// //                                         />
// //                                         <label htmlFor={type}>{type.replace('_', ' ')}</label>
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         </Col>
// //                         <Col md={6}>
// //                             <div>Book International and Domestic Flights</div>
// //                         </Col>
// //                     </Row>
// //                 </Container>

// //                 {/* Fields for ONE WAY and ROUND TRIP */}
// //                 {formData.tripType !== 'MULTI_CITY' && (
// //                     <div className="form-row mb-4">
// //                         <input
// //                             type="text"
// //                             name="from"
// //                             value={formData.from}
// //                             onChange={handleChange}
// //                             placeholder="From (e.g., DEL)"
// //                             className="form-control"
// //                             required
// //                         />
// //                         <input
// //                             type="text"
// //                             name="to"
// //                             value={formData.to}
// //                             onChange={handleChange}
// //                             placeholder="To (e.g., MAA)"
// //                             className="form-control"
// //                             required
// //                         />
// //                         <input
// //                             type="date"
// //                             name="travelDate"
// //                             value={formData.travelDate}
// //                             onChange={handleChange}
// //                             className="form-control"
// //                             required
// //                         />
// //                         {formData.tripType === 'ROUND_TRIP' && (
// //                             <input
// //                                 type="date"
// //                                 name="returnDate"
// //                                 value={formData.returnDate}
// //                                 onChange={handleChange}
// //                                 className="form-control"
// //                                 required
// //                             />
// //                         )}
// //                     </div>
// //                 )}

// //                 {/* Multi-City Fields */}
// //                 {formData.tripType === 'MULTI_CITY' && (
// //                     <div className="multi-city-fields">
// //                         {formData.multiCity.map((city, index) => (
// //                             <div key={index} className="multi-city-row">
// //                                 <input
// //                                     type="text"
// //                                     name="from"
// //                                     value={city.from}
// //                                     onChange={(e) => handleMultiCityChange(e, index)}
// //                                     placeholder="From (e.g., DEL)"
// //                                     className="form-control"
// //                                     required
// //                                 />
// //                                 <input
// //                                     type="text"
// //                                     name="to"
// //                                     value={city.to}
// //                                     onChange={(e) => handleMultiCityChange(e, index)}
// //                                     placeholder="To (e.g., MAA)"
// //                                     className="form-control"
// //                                     required
// //                                 />
// //                                 <input
// //                                     type="date"
// //                                     name="travelDate"
// //                                     value={city.travelDate}
// //                                     onChange={(e) => handleMultiCityChange(e, index)}
// //                                     className="form-control"
// //                                     required
// //                                 />
// //                                 {index > 0 && (
// //                                     <Button variant="danger" onClick={() => handleRemoveCity(index)}>
// //                                         Remove City
// //                                     </Button>
// //                                 )}
// //                             </div>
// //                         ))}
// //                         <Button variant="secondary" onClick={handleAddCity}>
// //                             Add Another City
// //                         </Button>
// //                     </div>
// //                 )}

// //                 {/* Passenger Counts */}
// //                 <div className="passenger-counts mb-4">
// //                     <label>
// //                         Adults:
// //                         <input
// //                             type="number"
// //                             name="adults"
// //                             value={formData.adults}
// //                             onChange={handleChange}
// //                             min="1"
// //                             className="form-control"
// //                             required
// //                         />
// //                     </label>
// //                     <label>
// //                         Children:
// //                         <input
// //                             type="number"
// //                             name="children"
// //                             value={formData.children}
// //                             onChange={handleChange}
// //                             min="0"
// //                             className="form-control"
// //                         />
// //                     </label>
// //                     <label>
// //                         Infants:
// //                         <input
// //                             type="number"
// //                             name="infants"
// //                             value={formData.infants}
// //                             onChange={handleChange}
// //                             min="0"
// //                             className="form-control"
// //                         />
// //                     </label>
// //                 </div>

// //                 {/* Cabin Class Selection */}
// //                 <div className="cabin-class-selection mb-4">
// //                     <label>
// //                         Cabin Class:
// //                         <select
// //                             name="cabinClass"
// //                             value={formData.cabinClass}
// //                             onChange={handleChange}
// //                             className="form-control"
// //                         >
// //                             {['ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST'].map((classType) => (
// //                                 <option key={classType} value={classType}>
// //                                     {classType.replace('_', ' ')}
// //                                 </option>
// //                             ))}
// //                         </select>
// //                     </label>
// //                 </div>

// //                 <Button type="submit" variant="primary">Search Flights</Button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default FlightSearchForm;
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ReviewPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { priceId } = location.state || {}; // Get priceId
//   const [reviewDetails, setReviewDetails] = useState(null);

//   useEffect(() => {
//     const fetchReviewDetails = async () => {
//       try {
//         const response = await fetch("https://tripjack.com/fms/v1/review", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             apikey: "610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172",
//           },
//           body: JSON.stringify({ priceIds: [priceId] }),
//         });

//         const data = await response.json();
//         setReviewDetails(data);
//       } catch (error) {
//         console.error("Error fetching review details:", error);
//       }
//     };

//     if (priceId) fetchReviewDetails();
//   }, [priceId]);

//   if (!reviewDetails) return <div>Loading...</div>;

//   const tripInfo = reviewDetails.tripInfos?.[0];
//   const segments = tripInfo?.sI || []; // Flight segments (departure & return)
//   const fareDetails = reviewDetails.totalPriceInfo?.totalFareDetail?.fC;
//   const adultCount = reviewDetails.searchQuery?.paxInfo?.ADULT || 0;
//   const childCount = reviewDetails.searchQuery?.paxInfo?.CHILD || 0;
//   const infantCount = reviewDetails.searchQuery?.paxInfo?.INFANT || 0;
//   const totalPriceList = reviewDetails.tripInfos[0].totalPriceList;
//   const childTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.CHILD?.fC?.BF;
//   const adultTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.ADULT?.fC?.BF;
//   const infantTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.INFANT?.fC?.BF;
//   const totalFareDetail = reviewDetails.totalPriceInfo.totalFareDetail;
// const TAF = totalFareDetail.fC.TAF;
//   console.log("childTaf:", childTaf);
// console.log("Segments:", adultCount, childCount, infantCount);
// console.log("Segments:", infantTaf, childTaf,adultTaf);
// console.log("count:",adultCount, childCount, infantCount);
//   return (
//     <Container className="mt-4">
//       <Row>
//         {/* Flight Details Section */}
//         <Col md={8}>
//           <Card className="mb-4">
//             <Card.Header className="" style={{
//   background: "linear-gradient(90deg, #698fc1  0%, #d8f2ff 100%)"
// }}>           
//            <h5><i className="fas fa-plane"></i> Flight Detail</h5>
//             </Card.Header>
//             <Card.Body>
//               {segments.map((segment, index) => (
                
              
//                 // <div key={index} className="flight-segment">
//                 //   <div className="flight-time">
//                 //     <span className="time">{new Date(segment?.dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                 //     <div className="flight-path">
//                 //       <span>{segment?.da?.cityName} ({segment?.da?.code})</span>
//                 //       <div className="segment-divider"></div>
//                 //       <span>
//                 //         {Math.floor(segment?.duration / 60)}h {segment?.duration % 60}m
//                 //       </span>
//                 //       <div className="segment-divider"></div>
//                 //       <span>{segment?.aa?.cityName} ({segment?.aa?.code})</span>
//                 //     </div>
//                 //     <span className="time">{new Date(segment?.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                 //   </div>
//                 //   <div className="airline-info">
//                 //     <span>{segment?.fD?.aI?.name} - {segment?.fD?.fN} | {segment?.cabinClass}</span>
//                 //     <span className="ml-2 refundable-badge">
//                 //       {segment?.isRefundable ? "REFUNDABLE" : "NON-REFUNDABLE"}
//                 //     </span>
//                 //   </div>
//                 //   {index === 0 && segment?.layoverTime && (
//                 //     <div className="layover">
//                 //       <span className="layover-info">
//                 //         {Math.floor(segment.layoverTime / 60)}h {segment.layoverTime % 60}m Layover in {segment?.aa?.cityName} ({segment?.aa?.code})
//                 //       </span>
//                 //     </div>
//                 //   )}
//                 // </div>
//                 <div>
//                       <Container>
//                        {/* first row */}
//                       <Row>
//                       <Col md={12}><i className="fas fa-plane" style={{       
//                          marginRight:"10px",
//                          fontWeight:"900"
//                         }}></i>
//                        <strong>
//                         {segment?.da?.city}  →{" "}
//                         {segment?.aa?.city} {" "}
//                         {segment.dt.split('T')[0]} {" "}
                        
//                          {segment.dt.split('T')[1]}
//                       </strong>
//                         </Col>
//                       </Row>
//                       {/* second row */}
//                       <Row>
                      
                  
//                           <Col md={2}>
//                           <img
//                                                     src={`/AirlinesLogo/${segment.fD.aI.code}.png`}
//                                                     alt={segment.fD.aI.name}
//                                                     className="airline-logo"
//                                                 />
                          
                          
//                           </Col>
//                           <Col md={2}>
//                           <strong>{segment.fD.aI.name}</strong>
//                            <p
//                            style={{
//                             fontSize:"12px",
//                             color:"grey",
//                                }}>
//                            {segment.fD.aI.code} -
//                             {segment.fD.fN}<br/>
//                           {reviewDetails.searchQuery.cabinClass}

//                             </p>


//                         </Col>
                    
                      
                      
                      
//                         <Col md={3}>
//                                 <Row>
//                                   <Col md={12}>
//                                   <strong>{segment.dt.split('T')[1]}</strong>
//                                   </Col>
//                                 </Row>
//                                 <Row>
//                                   <Col md={12}>

//                                   {reviewDetails.searchQuery.routeInfos.fromCityOrAirport.city}
//                                   </Col>
//                                 </Row>
//                                 <Row>
//                                   <Col md={12}>...</Col>
//                                 </Row>
//                         </Col>
//                       <Col md={2}>Div 3</Col>
//                       <Col md={2}>Div 3</Col>
                     
//                       </Row>
//                      </Container>
//                 </div>
                


//               ))}
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Price Summary Section */}
//         <Col md={4}>
//         <Card>
//   <Card.Header className="" style={{
//     background: "linear-gradient(90deg, #698fc1  0%, #d8f2ff 100%)"
//   }}>
//     <h5>Price Summary</h5>
//   </Card.Header>
//   <Card.Body>
//     {adultCount > 0 && (
//       <div className="d-flex justify-content-between">
//         <span>Adult x {adultCount}</span>
//         <span>₹{adultTaf }</span>
//       </div>
//     )}
//     {childCount > 0 && (
//       <div className="d-flex justify-content-between">
//         <span>Child x {childCount}</span>
//         <span>₹{childTaf * childCount}</span>
//       </div>
//     )}
//     {infantCount > 0 && (
//       <div className="d-flex justify-content-between">
//         <span>Infant x {infantCount}</span>
//         <span>₹{infantTaf * infantCount}</span>
//       </div>
//     )}

   
//       <div className="d-flex justify-content-between">
//         <span>Total Taxes</span>
//         <span>₹{TAF}</span>
//       </div>
    
//     <hr />
//     <div className="d-flex justify-content-between font-weight-bold">
//       <span style={{ color: '#ff6748', fontWeight: 'bold' }}>Grand Total</span>
//       <span style={{ color: '#ff6748', fontWeight: 'bold' }}>
//         ₹
//         {(adultTaf || 0) * (adultCount || 0) +
//   (childTaf || 0) * (childCount || 0) +
//   (infantTaf || 0) * (infantCount || 0) +
//   (TAF || 0)}
//       </span>
//     </div>
//   </Card.Body>
// </Card>

//           {/* Offers and Promo Codes */}
//           <Card className="mt-3">
//             <Card.Header className="bg-light">
//               <h6>Offers and Promo Codes</h6>
//             </Card.Header>
//             <Card.Body>
//               <Form>
//                 <Form.Group controlId="promoCode">
//                   <Form.Control type="text" placeholder="Enter Coupon Code" />
//                 </Form.Group>
//                 <Button variant="primary" className="mt-2 w-100">Apply</Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Continue to Booking Button */}
//       <Row className="mt-4">
//         <Col className="text-center">
//           <Button
//             variant="success"
//             size="lg"
//             onClick={() => navigate("/book", { state: { bookingId: reviewDetails.bookingId } })}
//           >
//             Continue to Booking
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ReviewPage;














import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/ReviewPage.css';

const ReviewPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { priceId } = location.state || {}; // Get priceId
    const [reviewDetails, setReviewDetails] = useState(null);

    useEffect(() => {
        const fetchReviewDetails = async () => {
            try {
                const response = await fetch('https://tripjack.com/fms/v1/review', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        apikey: '610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172',
                    },
                    body: JSON.stringify({ priceIds: [priceId] }),
                });

                const data = await response.json();
                setReviewDetails(data);
            } catch (error) {
                console.error('Error fetching review details:', error);
            }
        };

        if (priceId) fetchReviewDetails();
    }, [priceId]);

    if (!reviewDetails) return <div>Loading...</div>;

    const tripInfo = reviewDetails.tripInfos?.[0];
    const segments = tripInfo?.sI || []; // Flight segments (departure & return)
    const fareDetails = reviewDetails.totalPriceInfo?.totalFareDetail?.fC;
    const fareRuleInfo = tripInfo?.totalPriceList?.[0]?.fareRuleInformation?.tfr?.NO_SHOW || [];

    return (
        <div className="review-page">
            <h2>Flight Details</h2>
            {segments.map((segment, index) => (
                <div key={index} className="flight-card">
                    <h3>{index === 0 ? "Departure" : "Return"} Flight</h3>
                    <p><strong>From:</strong> {segment.da.city} ({segment.da.code})</p>
                    <p><strong>To:</strong> {segment.aa.city} ({segment.aa.code})</p>
                    <p><strong>Time:</strong> {new Date(segment.dt).toLocaleString()} - {new Date(segment.at).toLocaleString()}</p>
                    <p><strong>Airline:</strong> {segment.fD.aI.name}</p>
                    <p><strong>Flight Number:</strong> {segment.fD.fN}</p>
                    <p><strong>Duration:</strong> {Math.floor(segment.duration / 60)}h {segment.duration % 60}m</p>
                </div>
            ))}
            <h2>Price Summary</h2>
            <div>
                <p><strong>Adult:</strong> ₹{fareDetails.ADULT.BF}</p>
                <p><strong>Child:</strong> ₹{fareDetails.CHILD.BF}</p>
                <p><strong>Infant:</strong> ₹{fareDetails.INFANT.BF}</p>
                <p><strong>Total Taxes:</strong> ₹{fareDetails.TAF}</p>
                <p><strong>Grand Total:</strong> ₹{fareDetails.TF}</p>
            </div>
            <h2>Fare Rules</h2>
            {fareRuleInfo.length > 0 ? (
                fareRuleInfo.map((rule, index) => (
                    <div key={index}>
                        <p><strong>Policy Info:</strong> {rule.policyInfo}</p>
                    </div>
                ))
            ) : (
                <p>No fare rules available.</p>
            )}
        </div>
    );
};

export default ReviewPage;
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../styles/ReviewPage.css';

// const ReviewPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { priceId } = location.state || {}; // Get priceId
//     const [reviewDetails, setReviewDetails] = useState(null);

//     useEffect(() => {
//         const fetchReviewDetails = async () => {
//             try {
//                 const response = await fetch('https://tripjack.com/fms/v1/review', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         apikey: '610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172',
//                     },
//                     body: JSON.stringify({ priceIds: [priceId] }),
//                 });

//                 const data = await response.json();
//                 console.log('Review Details:', data);
//                 setReviewDetails(data);
//             } catch (error) {
//                 console.error('Error fetching review details:', error);
//             }
//         };

//         if (priceId) fetchReviewDetails();
//     }, [priceId]);

//     if (!reviewDetails) return <div>Loading...</div>;

//     const tripInfo = reviewDetails.tripInfos?.[0];
//     const segments = tripInfo?.sI || []; // Flight segments (departure & return)
//     const fareDetails = reviewDetails.totalPriceInfo?.totalFareDetail?.fC;

//     return (
//         <div className="review-page">
          
//           <div class="container">
//   <div class="item1">First Div</div>
//   <div class="item2">Second Div</div>
// </div>













//             <div className="flight-details-container">
//                 {/* Departure Flight */}
//                 {segments[0] && (
//                     <div className="flight-card">
//                         <h2>Departure Flight</h2>
//                         <p><strong>From:</strong> {segments[0]?.da?.cityName} ({segments[0]?.da?.code})</p>
//                         <p><strong>To:</strong> {segments[0]?.aa?.cityName} ({segments[0]?.aa?.code})</p>
//                         <p>
//                             <strong>Time:</strong> {new Date(segments[0]?.dt).toLocaleString()} -{' '}
//                             {new Date(segments[0]?.at).toLocaleString()}
//                         </p>
//                         <p><strong>Airline:</strong> {segments[0]?.fD?.aI?.name}</p>
//                         <p><strong>Flight Number:</strong> {segments[0]?.fD?.fN}</p>
//                         <p><strong>Duration:</strong> {Math.floor(segments[0]?.duration / 60)}h {segments[0]?.duration % 60}m</p>
//                         <p><strong>Refundable:</strong> {tripInfo?.isRefundable ? 'REFUNDABLE' : 'NON-REFUNDABLE'}</p>
//                     </div>
//                 )}

//                 {/* Return Flight */}
//                 {segments[1] && (
//                     <div className="flight-card">
//                         <h2>Return Flight</h2>
//                         <p><strong>From:</strong> {segments[1]?.da?.cityName} ({segments[1]?.da?.code})</p>
//                         <p><strong>To:</strong> {segments[1]?.aa?.cityName} ({segments[1]?.aa?.code})</p>
//                         <p>
//                             <strong>Time:</strong> {new Date(segments[1]?.dt).toLocaleString()} -{' '}
//                             {new Date(segments[1]?.at).toLocaleString()}
//                         </p>
//                         <p><strong>Airline:</strong> {segments[1]?.fD?.aI?.name}</p>
//                         <p><strong>Flight Number:</strong> {segments[1]?.fD?.fN}</p>
//                         <p><strong>Duration:</strong> {Math.floor(segments[1]?.duration / 60)}h {segments[1]?.duration % 60}m</p>
//                         <p><strong>Refundable:</strong> {tripInfo?.isRefundable ? 'REFUNDABLE' : 'NON-REFUNDABLE'}</p>
//                     </div>
//                 )}
//             </div>

//             {/* Price Summary */}
//             <div className="price-summary">
//                 <h2>Price Summary</h2>
//                 <div className="price-row">
//                     <span>Adult x 1</span>
//                     <span>₹{fareDetails?.BF}</span>
//                 </div>
//                 <div className="price-row">
//                     <span>Total Taxes</span>
//                     <span>₹{fareDetails?.TAF}</span>
//                 </div>
//                 <div className="price-row">
//                     <span>Discount</span>
//                     <span>- ₹600</span>
//                 </div>
//                 <div className="price-row">
//                     <span>Convenience Fee</span>
//                     <span>₹500</span>
//                 </div>
//                 <div className="price-row total">
//                     <span>Grand Total</span>
//                     <span>₹{fareDetails?.TF}</span>
//                 </div>
//             </div>

//             <button
//                 className="continue-button"
//                 onClick={() => navigate('/book', { state: { bookingId: reviewDetails.bookingId } })}
//             >
//                 Continue to Booking
//             </button>
//         </div>
//     );
// };

// export default ReviewPage;
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ReviewPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { priceId } = location.state || {}; // Get priceId
//   const [reviewDetails, setReviewDetails] = useState(null);

//   useEffect(() => {
//     const fetchReviewDetails = async () => {
//       try {
//         const response = await fetch("https://tripjack.com/fms/v1/review", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             apikey: "610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172",
//           },
//           body: JSON.stringify({ priceIds: [priceId] }),
//         });

//         const data = await response.json();
//         setReviewDetails(data);
//       } catch (error) {
//         console.error("Error fetching review details:", error);
//       }
//     };

//     if (priceId) fetchReviewDetails();
//   }, [priceId]);

//   if (!reviewDetails) return <div>Loading...</div>;

//   const tripInfo = reviewDetails.tripInfos?.[0];
//   const segments = tripInfo?.sI || []; // Flight segments (departure & return)
//   const fareDetails = reviewDetails.totalPriceInfo?.totalFareDetail?.fC;
//   const adultCount = reviewDetails.searchQuery?.paxInfo?.ADULT || 0;
//   const childCount = reviewDetails.searchQuery?.paxInfo?.CHILD || 0;
//   const infantCount = reviewDetails.searchQuery?.paxInfo?.INFANT || 0;
//   const totalPriceList = reviewDetails.tripInfos[0].totalPriceList;
//   const childTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.CHILD?.fC?.BF;
//   const adultTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.ADULT?.fC?.BF;
//   const infantTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.INFANT?.fC?.BF;
//   const totalFareDetail = reviewDetails.totalPriceInfo.totalFareDetail;
// const TAF = totalFareDetail.fC.TAF;
//   console.log("childTaf:", childTaf);
// console.log("Segments:", adultCount, childCount, infantCount);
// console.log("Segments:", infantTaf, childTaf,adultTaf);
// console.log("count:",adultCount, childCount, infantCount);
//   return (
//     <Container className="mt-4">
//       <Row>
//         {/* Flight Details Section */}
//         <Col md={8}>
//           <Card className="mb-4">
//             <Card.Header className="" style={{
//   background: "linear-gradient(90deg, #698fc1  0%, #d8f2ff 100%)"
// }}>           
//            <h5><i className="fas fa-plane"></i> Flight Detail</h5>
//             </Card.Header>
//             <Card.Body>
//               {segments.map((segment, index) => (
//                 <div key={index} className="mb-4">
//                   <h6>{index === 0 ? "Departure" : "Return"} Flight</h6>
//                   <p><strong>From:</strong> {segment?.da?.cityName} ({segment?.da?.code})</p>
//                   <p><strong>To:</strong> {segment?.aa?.cityName} ({segment?.aa?.code})</p>
//                   <p><strong>Time:</strong> {new Date(segment?.dt).toLocaleString()} - {new Date(segment?.at).toLocaleString()}</p>
//                   <p><strong>Airline:</strong> {segment?.fD?.aI?.name}</p>
//                   <p><strong>Flight Number:</strong> {segment?.fD?.fN}</p>
//                   <p><strong>Duration:</strong> {Math.floor(segment?.duration / 60)}h {segment?.duration % 60}m</p>
//                   <p><strong>Refundable:</strong> {tripInfo?.isRefundable ? "REFUNDABLE" : "NON-REFUNDABLE"}</p>
//                   {index === 0 && segment?.layoverTime && (
//                     <p><strong>Layover:</strong> {Math.floor(segment.layoverTime / 60)}h {segment.layoverTime % 60}m</p>
//                   )}
//                   <hr />
//                 </div>
//               ))}
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Price Summary Section */}
//         <Col md={4}>
//         <Card>
//   <Card.Header className="" style={{
//     background: "linear-gradient(90deg, #698fc1  0%, #d8f2ff 100%)"
//   }}>
//     <h5>Price Summary</h5>
//   </Card.Header>
//   <Card.Body>
//     {adultCount > 0 && (
//       <div className="d-flex justify-content-between">
//         <span>Adult x {adultCount}</span>
//         <span>₹{adultTaf }</span>
//       </div>
//     )}
//     {childCount > 0 && (
//       <div className="d-flex justify-content-between">
//         <span>Child x {childCount}</span>
//         <span>₹{childTaf * childCount}</span>
//       </div>
//     )}
//     {infantCount > 0 && (
//       <div className="d-flex justify-content-between">
//         <span>Infant x {infantCount}</span>
//         <span>₹{infantTaf * infantCount}</span>
//       </div>
//     )}

   
//       <div className="d-flex justify-content-between">
//         <span>Total Taxes</span>
//         <span>₹{TAF}</span>
//       </div>
    
//     <hr />
//     <div className="d-flex justify-content-between font-weight-bold">
//       <span style={{ color: '#ff6748', fontWeight: 'bold' }}>Grand Total</span>
//       <span style={{ color: '#ff6748', fontWeight: 'bold' }}>
//         ₹
//         {adultTaf * adultCount + childTaf * childCount + infantTaf * infantCount + TAF}
//       </span>
//     </div>
//   </Card.Body>
// </Card>

//           {/* Offers and Promo Codes */}
//           <Card className="mt-3">
//             <Card.Header className="bg-light">
//               <h6>Offers and Promo Codes</h6>
//             </Card.Header>
//             <Card.Body>
//               <Form>
//                 <Form.Group controlId="promoCode">
//                   <Form.Control type="text" placeholder="Enter Coupon Code" />
//                 </Form.Group>
//                 <Button variant="primary" className="mt-2 w-100">Apply</Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Continue to Booking Button */}
//       <Row className="mt-4">
//         <Col className="text-center">
//           <Button
//             variant="success"
//             size="lg"
//             onClick={() => navigate("/book", { state: { bookingId: reviewDetails.bookingId } })}
//           >
//             Continue to Booking
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ReviewPage;
