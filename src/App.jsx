import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from "./components/ListGroup";


function App() {
  
  return ( 
  <div>
    <div>
      <h1>Rhythm Radar</h1>
      <p>Recommendations for Refined Tastes</p>
      <hr></hr>
    </div>

    <Container>
     <Row className="justify-content-md-center">
       <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1 col 1</Button> </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1 col 2</Button> </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1 col 3</Button> </Col>
       <Col xs={12} md={6} lg={4} xl={3} > <Button>row 1 col 3</Button> </Col>
     </Row>
 </Container>

  </div>
    
    
  )
}

export default App
