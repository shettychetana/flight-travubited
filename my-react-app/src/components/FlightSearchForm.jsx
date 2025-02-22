import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/FlightSearchForm.css'; // Import your custom CSS for additional styling

const FlightSearchForm = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        travelDate: '',
        returnDate: '',
        adults: 1,
        children: 0,
        infants: 0,
        tripType: 'ONE_WAY',
        cabinClass: 'ECONOMY',
        specialType: '',
        multiCity: [{ from: '', to: '', travelDate: '' }],
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMultiCityChange = (e, index) => {
        const { name, value } = e.target;
        const updatedMultiCity = [...formData.multiCity];
        updatedMultiCity[index] = { ...updatedMultiCity[index], [name]: value };
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

    const handleAddCity = () => {
        setFormData((prev) => ({
            ...prev,
            multiCity: [...prev.multiCity, { from: '', to: '', travelDate: '' }],
        }));
    };

    const handleRemoveCity = (index) => {
        const updatedMultiCity = formData.multiCity.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = {
            searchQuery: {
                cabinClass: formData.cabinClass,
                paxInfo: {
                    ADULT: formData.adults.toString(),
                    CHILD: formData.children.toString(),
                    INFANT: formData.infants.toString(),
                },
                routeInfos: formData.tripType === 'MULTI_CITY'
                    ? formData.multiCity.map((city) => ({
                        fromCityOrAirport: { code: city.from.trim() },
                        toCityOrAirport: { code: city.to.trim() },
                        travelDate: city.travelDate,
                    }))
                    : [
                        {
                            fromCityOrAirport: { code: formData.from.trim() },
                            toCityOrAirport: { code: formData.to.trim() },
                            travelDate: formData.travelDate,
                            returnDate: formData.returnDate,
                        },
                    ],
                searchModifiers: {
                    isDirectFlight: true,
                    isConnectingFlight: false,
                },
            },
        };

        try {
            const response = await fetch('https://apitest.tripjack.com/fms/v1/air-search-all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': '81210652be6625-ffb6-4457-8d7b-3b87bfa351c3',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            console.log('API Response:', data);

            navigate('/results', { state: { results: data.searchResult?.tripInfos?.ONWARD || [] } });
        } catch (error) {
            console.error('Error fetching flight data:', error);
        }
    };

    return (
        <div className="flight-search-container">
            <Container>
                <Form onSubmit={handleSubmit} className="flight-search-form">
                    <Row className="mb-3">
                        <Col xs={12} className="mb-2">
                            <div className="trip-type-radio-buttons d-flex ">
                                {['ONE_WAY', 'ROUND_TRIP', 'MULTI_CITY'].map((type) => (
                                    <div key={type} className="radio-button mx-2">
                                        <Form.Check
                                            type="radio"
                                            id={type}
                                            name="tripType"
                                            value={type}
                                            label={type.replace('_', ' ')}
                                            checked={formData.tripType === type}
                                            onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>

                    {/* Conditional Fields */}
                    {formData.tripType !== 'MULTI_CITY' && (
                        <Row className="mb-3" style={{display:"flex", justifyContent:"center",border:"1px solid #e7e7e7", borderRadius:"10px", padding:"10px"}}>
                            <Col xs={12} sm={4} className="mb-2">
                                <Form.Control
                                    type="text"
                                    name="from"
                                    value={formData.from}
                                    onChange={handleChange}
                                    placeholder="From (e.g., DEL)"
                                    required
                                />
                            </Col>
                            <Col xs={12} sm={4} className="mb-2">
                                <Form.Control
                                    type="text"
                                    name="to"
                                    value={formData.to}
                                    onChange={handleChange}
                                    placeholder="To (e.g., MAA)"
                                    required
                                />
                            </Col>
                            <Col xs={12} sm={4} className="mb-2">
                                <Form.Control
                                    type="date"
                                    name="travelDate"
                                    value={formData.travelDate}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            {formData.tripType === 'ROUND_TRIP' && (
                                <Col xs={12} sm={6}>
                                    <Form.Control
                                        type="date"
                                        name="returnDate"
                                        value={formData.returnDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            )}
                        </Row>
                    )}

                    {/* Multi-City Fields */}
                    {formData.tripType === 'MULTI_CITY' && (
                        <div className="multi-city-fields mb-3">
                            {formData.multiCity.map((city, index) => (
                                <Row key={index} className="mb-2">
                                    <Col xs={12} sm={4}>
                                        <Form.Control
                                            type="text"
                                            name="from"
                                            value={city.from}
                                            onChange={(e) => handleMultiCityChange(e, index)}
                                            placeholder="From (e.g., DEL)"
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} sm={4}>
                                        <Form.Control
                                            type="text"
                                            name="to"
                                            value={city.to}
                                            onChange={(e) => handleMultiCityChange(e, index)}
                                            placeholder="To (e.g., MAA)"
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} sm={4}>
                                        <Form.Control
                                            type="date"
                                            name="travelDate"
                                            value={city.travelDate}
                                            onChange={(e) => handleMultiCityChange(e, index)}
                                            required
                                        />
                                    </Col>
                                    {index > 0 && (
                                        <Col xs={12} className="text-center mt-2">
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleRemoveCity(index)}
                                            >
                                                Remove
                                            </Button>
                                        </Col>
                                    )}
                                </Row>
                            ))}
                            <Button variant="secondary" onClick={handleAddCity}>
                                Add Another City
                            </Button>
                        </div>
                    )}

                    {/* Passenger Counts */}
                    <Row className="mb-3">
                        <Col xs={12} sm={4}>
                            <Form.Group>
                                <Form.Label>Adults</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="adults"
                                    value={formData.adults}
                                    onChange={handleChange}
                                    min="1"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Form.Group>
                                <Form.Label>Children</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="children"
                                    value={formData.children}
                                    onChange={handleChange}
                                    min="0"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Form.Group>
                                <Form.Label>Infants</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="infants"
                                    value={formData.infants}
                                    onChange={handleChange}
                                    min="0"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button type="submit" variant="primary" className="w-100" style={{backgroundColor:"#FF7043"}}>
                        Search Flights
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default FlightSearchForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";

// const FlightSearchForm = () => {
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     travelDate: "",
//     returnDate: "",
//     adults: 1,
//     children: 0,
//     infants: 0,
//     tripType: "ONE_WAY",
//     cabinClass: "ECONOMY",
//     multiCity: [{ from: "", to: "", travelDate: "" }],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle Multi-City Input Change
//   const handleMultiCityChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedMultiCity = [...formData.multiCity];
//     updatedMultiCity[index] = { ...updatedMultiCity[index], [name]: value };
//     setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
//   };

//   // Add Multi-City Row
//   const handleAddCity = () => {
//     setFormData((prev) => ({
//       ...prev,
//       multiCity: [...prev.multiCity, { from: "", to: "", travelDate: "" }],
//     }));
//   };

//   // Remove Multi-City Row
//   const handleRemoveCity = (index) => {
//     const updatedMultiCity = formData.multiCity.filter((_, i) => i !== index);
//     setFormData((prev) => ({ ...prev, multiCity: updatedMultiCity }));
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     // Prepare API Request Body
//     const requestBody = {
//       searchQuery: {
//         cabinClass: formData.cabinClass,
//         paxInfo: {
//           ADULT: formData.adults.toString(),
//           CHILD: formData.children.toString(),
//           INFANT: formData.infants.toString(),
//         },
//         routeInfos:
//           formData.tripType === "MULTI_CITY"
//             ? formData.multiCity.map((city) => ({
//                 fromCityOrAirport: { code: city.from.trim() },
//                 toCityOrAirport: { code: city.to.trim() },
//                 travelDate: city.travelDate,
//               }))
//             : [
//                 {
//                   fromCityOrAirport: { code: formData.from.trim() },
//                   toCityOrAirport: { code: formData.to.trim() },
//                   travelDate: formData.travelDate,
//                   ...(formData.tripType === "ROUND_TRIP" && {
//                     returnDate: formData.returnDate,
//                   }),
//                 },
//               ],
//         searchModifiers: {
//           isDirectFlight: true,
//           isConnectingFlight: false,
//         },
//       },
//     };

//     try {
//       const response = await axios.post(
//         "https://apitest.tripjack.com/fms/v1/air-search-all",
//         requestBody,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             apikey: "81210652be6625-ffb6-4457-8d7b-3b87bfa351c3",
//           },
//         }
//       );

//       console.log("API Response:", response.data);
//       navigate("/results", { state: { results: response.data.searchResult?.tripInfos?.ONWARD || [] } });
//     } catch (error) {
//       setError("Failed to fetch flight data. Please try again.");
//       console.error("API Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <Form onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Col xs={12}>
//             <h4>Search Flights</h4>
//             <div className="trip-type-radio-buttons d-flex">
//               {["ONE_WAY", "ROUND_TRIP", "MULTI_CITY"].map((type) => (
//                 <Form.Check
//                   inline
//                   type="radio"
//                   id={type}
//                   name="tripType"
//                   value={type}
//                   label={type.replace("_", " ")}
//                   checked={formData.tripType === type}
//                   onChange={handleChange}
//                   key={type}
//                 />
//               ))}
//             </div>
//           </Col>
//         </Row>

//         {formData.tripType !== "MULTI_CITY" && (
//           <Row className="mb-3">
//             <Col xs={12} sm={4}>
//               <Form.Control type="text" name="from" value={formData.from} onChange={handleChange} placeholder="From (e.g., DEL)" required />
//             </Col>
//             <Col xs={12} sm={4}>
//               <Form.Control type="text" name="to" value={formData.to} onChange={handleChange} placeholder="To (e.g., BOM)" required />
//             </Col>
//             <Col xs={12} sm={4}>
//               <Form.Control type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
//             </Col>
//             {formData.tripType === "ROUND_TRIP" && (
//               <Col xs={12} sm={4}>
//                 <Form.Control type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
//               </Col>
//             )}
//           </Row>
//         )}

//         {formData.tripType === "MULTI_CITY" && (
//           <div>
//             {formData.multiCity.map((city, index) => (
//               <Row key={index} className="mb-2">
//                 <Col xs={12} sm={4}>
//                   <Form.Control type="text" name="from" value={city.from} onChange={(e) => handleMultiCityChange(e, index)} placeholder="From (e.g., DEL)" required />
//                 </Col>
//                 <Col xs={12} sm={4}>
//                   <Form.Control type="text" name="to" value={city.to} onChange={(e) => handleMultiCityChange(e, index)} placeholder="To (e.g., BOM)" required />
//                 </Col>
//                 <Col xs={12} sm={4}>
//                   <Form.Control type="date" name="travelDate" value={city.travelDate} onChange={(e) => handleMultiCityChange(e, index)} required />
//                 </Col>
//                 {index > 0 && (
//                   <Col xs={12} className="text-center">
//                     <Button variant="danger" size="sm" onClick={() => handleRemoveCity(index)}>Remove</Button>
//                   </Col>
//                 )}
//               </Row>
//             ))}
//             <Button variant="secondary" onClick={handleAddCity}>Add Another City</Button>
//           </div>
//         )}

//         <Button type="submit" variant="primary" className="w-100 mt-3" disabled={loading}>
//           {loading ? "Searching..." : "Search Flights"}
//         </Button>
//         {error && <p className="text-danger mt-2">{error}</p>}
//       </Form>
//     </Container>
//   );
// };

// export default FlightSearchForm;
