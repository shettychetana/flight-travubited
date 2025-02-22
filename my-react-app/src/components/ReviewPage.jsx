import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FlightLoader from "./FlightLoader";
import goodtoknow from "../styles/goodtoknow.css";


const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { priceId } = location.state || {}; // Get priceId
  const [reviewDetails, setReviewDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchReviewDetails = async () => {
      try {
        setLoading(true);
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
      finally {
        setLoading(false); // Stop loading
      }
    };

    if (priceId) fetchReviewDetails();
  }, [priceId]);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        {/* <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> */}
        <FlightLoader/>
      </div>
    );
  }
  if (!reviewDetails) return <div><FlightLoader/>
  </div>;

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
const fareRuleInfo = tripInfo?.totalPriceList?.[0]?.fareRuleInformation?.tfr?.NO_SHOW || [];
  
const bI = totalPriceList[0].fd.ADULT.bI;

// Access the "iB" and "cB" properties within the "bI" object
const iB = bI.iB;
const cB = bI.cB;

console.log(bI); // Output: { iB: '15KG', cB: '7 Kg' }
console.log(iB); // Output: '15KG'
console.log(cB);
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
                        
                         {/* {segment.dt.split('T')[1]} */}
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
                    
                      
                      
                      
                        <Col md={3}>
                                <Row>
                                  <Col md={12}>
                                  <strong>{segment.dt.split('T')[1]}</strong>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={12} style={{
                            fontSize:"12px",
                            color:"grey",
                               }}>
                                 {segment?.da?.city} ({segment?.da?.code})
                                  </Col>
                                </Row>
                                <Row>
                                  <Col style={{
                            fontSize:"12px",
                            color:"grey",
                               }}>
                                  {segment.dt.split('T')[0]}
                                  </ Col>
                                </Row>
                                <Row>
                                  <Col md={12} style={{
                            fontSize:"12px",
                            color:"grey",
                               }}>{segment?.da?.terminal}</Col>
                                </Row>
                        </Col>
                      <Col md={2}>
                    <Row>
                                            {Math.floor(segment.duration / 60)}h {segment.duration % 60}m

                      
                    </Row> 
                    <Row> <i className="fas fa-plane" style={{ fontSize: "20px", marginRight: "10px",color:"grey"}}></i></Row> 
                    <Row style={{
                            fontSize:"12px",
                            color:"grey",
                               }}>  {segment.stops} stops</Row> 
                      </Col>
                      <Col md={3}>
                                <Row>
                                  <Col md={12}>
                                  <strong>{segment.at.split('T')[1]}</strong>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={12} style={{
                            fontSize:"12px",
                            color:"grey",
                               }}>
                                 {segment?.aa?.city} ({segment?.aa?.code})
                                  </Col>
                                </Row>
                                <Row>
                                  <Col style={{
                            fontSize:"12px",
                            color:"grey",
                               }}>
                                  {segment.at.split('T')[0]}
                                  </ Col>
                                </Row>
                                <Row>
                                  <Col md={12} style={{
                            fontSize:"12px",
                            color:"grey",
                               }}>{segment?.aa?.terminal}</Col>
                                </Row>
                        </Col>
                     
                      </Row>
                     </Container>
                </div>
                


              ))}
            </Card.Body>
          </Card>
        
      <Row>
        <Col>
          <Card className="good-to-know">
            <Card.Header className="good-to-know-header">
              <i className="fas fa-thumbs-up good-to-know-icon"></i>
              <strong> Good to Know</strong>
              <p className="good-to-know-subtitle">Information you should know</p>
            </Card.Header>
            <Card.Body>
              <ul className="good-to-know-list">
                <li>
                  {totalPriceList.fd?.ADULT?.bI?.iB} Kgs Checking Baggage per passenger   {totalPriceList.fd?.ADULT?.bI?.cB} Check-in Baggage included for your selected
                  flight on the sector <strong>Delhi to Mumbai</strong>
                </li>
                <li>
                  Airline Cancellation Fee is <strong>Rs 3150</strong> per passenger
                  for your selected flight on the sector <strong>Delhi to Mumbai</strong>
                </li>
                <li>Remember to web check-in before arriving at the airport</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
   
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