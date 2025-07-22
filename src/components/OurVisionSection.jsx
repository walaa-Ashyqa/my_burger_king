// src/components/OurVisionSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurVisionSection.css'; // Custom CSS for specific styling
import { Burger_King } from '../assets';

function OurVisionSection() {
  return (
    <section className="our-vision-section py-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Left Column: Text Content */}
          <Col md={6} className="our-vision-content text-center text-md-start mb-4 mb-md-0">
            <h2 className="our-vision-title mb-4">Our vision</h2>
            <p className="our-vision-text mb-0">
              Burger King focuses on its aspiration to become
              the most profitable quick-service restaurant
              (QSR) business globally. It aims to achieve this by
              leveraging a strong franchise-system, employing
              dedicated and capable staff, and consistently
              serving what it calls the "best burgers in the
              world." This vision highlights Burger King's
              strategy of growth through franchising, which
              allows it to maintain a broad global presence
              while ensuring local adaptability. The emphasis
              on great people underscores the importance of
              employee performance and customer service in
              achieving long-term success. Burger King's Vision
              represents its desire not only to compete in the
              global QSR market but to lead it through quality,
              profitability, and a well-structured business
              model.
            </p>
          </Col>

          {/* Right Column: Store Images */}
          <Col md={6} className="our-vision-images-col d-flex justify-content-center ">
            {/* Replace with your actual store image paths */}
            <img
              src={Burger_King}
              alt="Burger King Store 1"
              className="img-fluid rounded-3 shadow-sm vision-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/250x200/CCCCCC/333333?text=Image+Not+Found"; }}
            />
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurVisionSection;
