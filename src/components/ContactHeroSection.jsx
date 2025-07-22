// src/components/ContactHeroSection.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactHeroSection.css'; // Custom CSS for specific styling

function ContactHeroSection() {
  return (
    <section className="contact-hero-section d-flex align-items-center text-center">
      <Container>
        <h1 className="contact-hero-title">Stay in touch with us</h1>
      </Container>
    </section>
  );
}

export default ContactHeroSection;
