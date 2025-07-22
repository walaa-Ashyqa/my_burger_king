// src/components/AboutHeroSection.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutHeroSection.css'; // Custom CSS for specific styling

function AboutHeroSection() {
  return (
    <section className="about-hero-section d-flex align-items-center text-center">
      <Container>
        <h1 className="about-hero-title">Learn more about Burger King</h1>
      </Container>
    </section>
  );
}

export default AboutHeroSection;
