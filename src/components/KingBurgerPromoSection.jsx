// src/components/KingBurgerPromoSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './KingBurgerPromoSection.css'; // Custom CSS for specific styling

function KingBurgerPromoSection() {
  return (
    <section className="king-burger-promo-section d-flex align-items-center position-relative overflow-hidden">
      <Container>
        <Row className="align-items-center justify-content-between">
          {/* Left Column: Promo Text and Buttons */}
          <Col md={6} className="promo-text-content text-center text-md-start mb-4 mb-md-0">
            <p className="promo-tagline mb-4">
              "To offer reasonably priced quality food, served quickly, in attractive, clean surroundings."
            </p>
            <div className="promo-buttons d-flex justify-content-center justify-content-md-start gap-3">
              {/* Order Food Button */}
              <Button className="promo-btn order-food-btn rounded-pill px-4 py-2">
                Order Food
              </Button>
              {/* View Menu Button */}
              <Button className="promo-btn view-menu-btn rounded-pill px-4 py-2">
                View Menu
              </Button>
            </div>
          </Col>

        
        </Row>
      </Container>
      {/* Background elements are handled in CSS */}
    </section>
  );
}

export default KingBurgerPromoSection;
