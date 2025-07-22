// src/components/MenuHeroSection.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuHeroSection.css'; // Custom CSS for specific styling

function MenuHeroSection() {
  return (
    <section className="menu-hero-section d-flex align-items-center position-relative overflow-hidden">
      <Container className="text-center">
        <h1 className="menu-hero-title">Menu</h1>
      </Container>
    </section>
  );
}

export default MenuHeroSection;
