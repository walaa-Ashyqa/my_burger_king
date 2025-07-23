import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StatsSection.css';

function StatsSection() {
  return (
    <section className="stats-section py-5">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={12} md={3} className="stat-item d-flex flex-column align-items-center justify-content-center">
            <span className="stat-number">+32</span>
            <span className="stat-label">Products</span>
          </Col>
          <Col xs={12} md={1} className="d-none d-md-block stat-separator">|</Col>
          <Col xs={12} md={3} className="stat-item d-flex flex-column align-items-center justify-content-center">
            <span className="stat-number">+120</span>
            <span className="stat-label">Branches</span>
          </Col>
          <Col xs={12} md={1} className="d-none d-md-block stat-separator">|</Col>
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