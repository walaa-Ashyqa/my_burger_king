import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StatsSection.css'; // Custom CSS for specific styling

function StatsSection() {
  return (
    <section className="stats-section py-5">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          {/* Products Stat */}
          <Col xs={12} md={3} className="stat-item d-flex flex-column align-items-center justify-content-center">
            <span className="stat-number">+32</span>
            <span className="stat-label">Products</span>
          </Col>
          {/* Separator (visible on larger screens) */}
          <Col xs={12} md={1} className="d-none d-md-block stat-separator">|</Col>
          {/* Branches Stat */}
          <Col xs={12} md={3} className="stat-item d-flex flex-column align-items-center justify-content-center">
            <span className="stat-number">+120</span>
            <span className="stat-label">Branches</span>
          </Col>
          {/* Separator (visible on larger screens) */}
          <Col xs={12} md={1} className="d-none d-md-block stat-separator">|</Col>
          {/* Customers Stat */}
          <Col xs={12} md={3} className="stat-item d-flex flex-column align-items-center justify-content-center">
            <span className="stat-number">+300K</span>
            <span className="stat-label">Customers</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default StatsSection;