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




import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { priceId } = location.state || {}; // Get priceId
  const [reviewDetails, setReviewDetails] = useState(null);

  useEffect(() => {
    const fetchReviewDetails = async () => {
      try {
        const response = await fetch("https://tripjack.com/fms/v1/review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: "610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172",
          },
          body: JSON.stringify({ priceIds: [priceId] }),
        });

        const data = await response.json();
        setReviewDetails(data);
      } catch (error) {
        console.error("Error fetching review details:", error);
      }
    };

    if (priceId) fetchReviewDetails();
  }, [priceId]);

  if (!reviewDetails) return <div>Loading...</div>;

  const tripInfo = reviewDetails.tripInfos?.[0];
  const segments = tripInfo?.sI || []; // Flight segments (departure & return)
  const fareDetails = reviewDetails.totalPriceInfo?.totalFareDetail?.fC;
  const adultCount = reviewDetails.searchQuery?.paxInfo?.ADULT || 0;
  const childCount = reviewDetails.searchQuery?.paxInfo?.CHILD || 0;
  const infantCount = reviewDetails.searchQuery?.paxInfo?.INFANT || 0;
  const totalPriceList = reviewDetails.tripInfos[0].totalPriceList;
  const childTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.CHILD?.fC?.BF;
  const adultTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.ADULT?.fC?.BF;
  const infantTaf = reviewDetails.tripInfos?.[0].totalPriceList?.[0].fd?.INFANT?.fC?.BF;
  const totalFareDetail = reviewDetails.totalPriceInfo.totalFareDetail;
const TAF = totalFareDetail.fC.TAF;
  console.log("childTaf:", childTaf);
console.log("Segments:", adultCount, childCount, infantCount);
console.log("Segments:", infantTaf, childTaf,adultTaf);
console.log("count:",adultCount, childCount, infantCount);
  return (
    <Container className="mt-4">
      <Row>
        {/* Flight Details Section */}
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="" style={{
  background: "linear-gradient(90deg, #698fc1  0%, #d8f2ff 100%)"
}}>           
           <h5><i className="fas fa-plane"></i> Flight Detail</h5>
            </Card.Header>
            <Card.Body>
              {segments.map((segment, index) => (
                
              
                // <div key={index} className="flight-segment">
                //   <div className="flight-time">
                //     <span className="time">{new Date(segment?.dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                //     <div className="flight-path">
                //       <span>{segment?.da?.cityName} ({segment?.da?.code})</span>
                //       <div className="segment-divider"></div>
                //       <span>
                //         {Math.floor(segment?.duration / 60)}h {segment?.duration % 60}m
                //       </span>
                //       <div className="segment-divider"></div>
                //       <span>{segment?.aa?.cityName} ({segment?.aa?.code})</span>
                //     </div>
                //     <span className="time">{new Date(segment?.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                //   </div>
                //   <div className="airline-info">
                //     <span>{segment?.fD?.aI?.name} - {segment?.fD?.fN} | {segment?.cabinClass}</span>
                //     <span className="ml-2 refundable-badge">
                //       {segment?.isRefundable ? "REFUNDABLE" : "NON-REFUNDABLE"}
                //     </span>
                //   </div>
                //   {index === 0 && segment?.layoverTime && (
                //     <div className="layover">
                //       <span className="layover-info">
                //         {Math.floor(segment.layoverTime / 60)}h {segment.layoverTime % 60}m Layover in {segment?.aa?.cityName} ({segment?.aa?.code})
                //       </span>
                //     </div>
                //   )}
                // </div>
                <div>
                      <Container>
                       {/* first row */}
                      <Row>
                      <Col md={12}><i className="fas fa-plane" style={{       
                         marginRight:"10px",
                         fontWeight:"900"
                        }}></i>
                       <strong>
                        {segment?.da?.city}  →{" "}
                        {segment?.aa?.city} {" "}
                        {segment.dt.split('T')[0]} {" "}
                        
                         {segment.dt.split('T')[1]}
                      </strong>
                        </Col>
                      </Row>
                      {/* second row */}
                      <Row>
                      
                  
                          <Col md={2}>
                          <img
                                                    src={`/AirlinesLogo/${segment.fD.aI.code}.png`}
                                                    alt={segment.fD.aI.name}
                                                    className="airline-logo"
                                                />
                          
                          
                          </Col>
                          <Col md={2}>
                          <strong>{segment.fD.aI.name}</strong>
                           <p
                           style={{
                            fontSize:"12px",
                            color:"grey",
                               }}>
                           {segment.fD.aI.code} -
                            {segment.fD.fN}<br/>
                          {reviewDetails.searchQuery.cabinClass}

                            </p>


                        </Col>
                    
                      
                      
                      
                      <Col md={4}>Div 2
                      
                      
                      
                      </Col>
                      <Col md={2}>Div 3</Col>
                      <Col md={2}>Div 3</Col>
                     
                      </Row>
                     </Container>
                </div>
                


              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Price Summary Section */}
        <Col md={4}>
        <Card>
  <Card.Header className="" style={{
    background: "linear-gradient(90deg, #698fc1  0%, #d8f2ff 100%)"
  }}>
    <h5>Price Summary</h5>
  </Card.Header>
  <Card.Body>
    {adultCount > 0 && (
      <div className="d-flex justify-content-between">
        <span>Adult x {adultCount}</span>
        <span>₹{adultTaf }</span>
      </div>
    )}
    {childCount > 0 && (
      <div className="d-flex justify-content-between">
        <span>Child x {childCount}</span>
        <span>₹{childTaf * childCount}</span>
      </div>
    )}
    {infantCount > 0 && (
      <div className="d-flex justify-content-between">
        <span>Infant x {infantCount}</span>
        <span>₹{infantTaf * infantCount}</span>
      </div>
    )}

   
      <div className="d-flex justify-content-between">
        <span>Total Taxes</span>
        <span>₹{TAF}</span>
      </div>
    
    <hr />
    <div className="d-flex justify-content-between font-weight-bold">
      <span style={{ color: '#ff6748', fontWeight: 'bold' }}>Grand Total</span>
      <span style={{ color: '#ff6748', fontWeight: 'bold' }}>
        ₹
        {(adultTaf || 0) * (adultCount || 0) +
  (childTaf || 0) * (childCount || 0) +
  (infantTaf || 0) * (infantCount || 0) +
  (TAF || 0)}
      </span>
    </div>
  </Card.Body>
</Card>

          {/* Offers and Promo Codes */}
          <Card className="mt-3">
            <Card.Header className="bg-light">
              <h6>Offers and Promo Codes</h6>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="promoCode">
                  <Form.Control type="text" placeholder="Enter Coupon Code" />
                </Form.Group>
                <Button variant="primary" className="mt-2 w-100">Apply</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Continue to Booking Button */}
      <Row className="mt-4">
        <Col className="text-center">
          <Button
            variant="success"
            size="lg"
            onClick={() => navigate("/book", { state: { bookingId: reviewDetails.bookingId } })}
          >
            Continue to Booking
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewPage;