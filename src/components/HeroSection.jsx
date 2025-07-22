// components/HeroSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
 
import './HeroSection.css';
import { burger_11, burger_hero,burger_hero_2 } from '../assets';
function HeroSection() {
  return (
    <section className=" h-100 hero-section-bootstrap d-flex align-items-center">
    <Container fluid className="h-100">
      <Row className="h-100">
        {/* Left Column: Text Content and Buttons */}
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start hero-left-col p-4 p-md-5">
          <p className="hero-subtitle mb-2">THE ULTIMATE</p>
          <h1 className="hero-title mb-3">Burger king</h1>
          <p className="hero-description mb-4 px-3 px-md-0">
            Get the best quality and most delicious most delicious burgers in the world
            you can get them all at Green Food....
          </p>
          <div className="hero-buttons d-flex justify-content-center justify-content-md-start gap-3">
            {/* Order Now Button */}
            <Button className="hero-btn-primary custom-btn-orange rounded-pill px-4 py-2">
              Order Now
            </Button>
            {/* View Menu Button */}
            <Button className="hero-btn-secondary custom-btn-outline-orange rounded-pill px-4 py-2">
              View Menu
            </Button>
          </div>
        
        </Col>

        {/* Right Column: Burger Image */}
        <Col md={6} className="d-flex justify-content-center align-items-center hero-right-col p-0">
          {/* Replace with your actual burger image path */}
          <img
            src={burger_11}
            alt="Delicious Burger"
            className="img-fluid  hero-burger-image"
            // Fallback for image loading errors
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/FF9900/FFFFFF?text=Image+Not+Found"; }}
          />
        </Col>
      </Row>
    </Container>
  </section>
  );
}

export default HeroSection;