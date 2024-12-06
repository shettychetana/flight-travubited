<Container>
<Row>

 <Container fluid>
<Row>
{/* First Column */}
<Col
md={3}
style={{
 border: '1px solid #ccc',
 borderRadius: '10px',
 padding: '10px',
 borderBottom: activeColumn === 0 ? '2px solid #FF6748' : 'none', // Change color as needed
}}
onClick={() => handleColumnClick(0)}
>
<Row style={{ gap: 0 }}>
<Col md={6}>
<div className="box">
<i
 className="fa fa-inr"
 aria-hidden="true"
 style={{
     border: '1px solid black',
     borderRadius: '10px',
     padding: '10px',
     backgroundColor: '#f99a86',
 }}
></i>
</div>
</Col>
<Col md={6}>
<Col md={6}>
<div className="box">Cheapest</div>
</Col>
<Col md={6}>
<div className="box">
 ₹{results.length > 0 ? Math.min(...results.map(flight => flight.totalPriceList[0]?.fd.ADULT?.fC?.TF || 0)) : 0}
</div>
</Col>
</Col>
</Row>
</Col>

{/* Second Column */}
<Col
md={3}
style={{
 borderBottom: activeColumn === 1 ? '2px solid #FF6748' : 'none',
}}
onClick={() => handleColumnClick(1)}
>
<Row>
 <Col md={6}>
     <div className="box">Column 2 - Sub Column 1</div>
 </Col>
 <Col md={6}>
     <div className="box">Column 2 - Sub Column 2</div>
 </Col>
</Row>
</Col>

{/* Third Column */}
<Col
md={3}
style={{
 borderBottom: activeColumn === 2 ? '2px solid #FF6748' : 'none',
}}
onClick={() => handleColumnClick(2)}
>
<Row>
 <Col md={6}>
     <div className="box">Column 3 - Sub Column 1</div>
 </Col>
 <Col md={6}>
     <div className="box">Column 3 - Sub Column 2</div>
 </Col>
</Row>
</Col>

{/* Fourth Column */}
<Col
md={3}
style={{
 borderBottom: activeColumn === 3 ? '2px solid #FF6748' : 'none',
}}
onClick={() => handleColumnClick(3)}
>
<Row>
 <Col md={6}>
     <div className="box">Column 4 - Sub Column 1</div>
 </Col>
 <Col md={6}>
     <div className="box">Column 4 - Sub Column 2</div>
 </Col>
</Row>
</Col>
</Row>
</Container>



</Row>
</Container>