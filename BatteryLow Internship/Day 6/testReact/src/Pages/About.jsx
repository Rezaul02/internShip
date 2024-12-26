import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './AboutCSS.css'; // Ensure this import
import AboutImage1 from '../assets/Images/AboutImage.png'


const About = () => {
  return (
    <Container className="my-5">
      <Row className="h-100">
        {/* Left Column: About Text */}
        <Col md={6}>
          <h1>About</h1>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
          </p>
        </Col>

        {/* Right Column: Profile Card with Image and Details */}
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body className="card-body">
              <div>
                {/* Profile Image */}
                <img
                  src={AboutImage1} // Replace with your image source
                  alt="Profile"
                />
              </div>

              <div className="details">
                <h3>3D Artist and Web Design Enthusiast</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Birthday:</strong> 1 May 1995</ListGroup.Item>
                  <ListGroup.Item><strong>Website:</strong> www.example.com</ListGroup.Item>
                  <ListGroup.Item><strong>Phone:</strong> +123 456 7890</ListGroup.Item>
                  <ListGroup.Item><strong>City:</strong> New York, USA</ListGroup.Item>
                  <ListGroup.Item><strong>Age:</strong> 30</ListGroup.Item>
                  <ListGroup.Item><strong>Degree:</strong> Master</ListGroup.Item>
                  <ListGroup.Item><strong>Email:</strong> email@example.com</ListGroup.Item>
                  <ListGroup.Item><strong>Freelance:</strong> Available</ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
};

export default About;
