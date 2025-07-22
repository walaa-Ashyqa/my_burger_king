// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Custom CSS for specific styling
import { email, instagram, logo_2, map, twitter, whatsapp } from '../assets';

function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="justify-content-center">
          {/* Column 1: Brand Info */}
          <Col xs={12} md={4} lg={4} className="footer-column brand-info mb-4 mb-md-0">
            <div className="footer-logo mb-3">
              {/* Replace with your actual Burger King logo path */}
              <img src={logo_2} alt="Burger King Logo" />
            </div>
            <p className="footer-story-text mb-3">
              Our Story Begins With A Passion For Delicious, Juicy Burgers. We Started Out As A Small Family-Owned
              Restaurant, Serving Up Homemade Burgers Using Only The Freshest And Highest Quality Ingredients.
            </p>
            <p className="copyright mb-0">&copy;Burger King 2025. All Rights Reserved</p>
          </Col>

          {/* Column 2: Menu Links */}
          <Col xs={6} md={4} lg={2} className="footer-column footer-links mb-4 mb-md-0">
            <h4 className="footer-heading mb-3">Menu</h4>
            <ul className="list-unstyled">
              <li><a href="#menu">Menu</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </Col>

          {/* Column 3: Policy Links */}
          <Col xs={6} md={4} lg={2} className="footer-column footer-links mb-4 mb-md-0">
            <h4 className="footer-heading mb-3">Policy</h4>
            <ul className="list-unstyled">
              <li><a href="#delivery">Delivery Policy</a></li>
              <li><a href="#terms">Term And Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Column 4: Contact & Social */}
          <Col xs={12} md={4} lg={3} className="footer-column contact-social">
            <div className="contact-item mb-1 d-flex align-items-center">
            <img src={map} alt="instagram"  />
              <span className='p-2'>#23, Main Street, London</span>
            </div>
            <div className="contact-item mb-5 d-flex align-items-center">
            <img src={email} alt="instagram"  />
              <span className='p-2'>info@burgerking.com</span>
            </div>
            <div className="social-icons d-flex gap-4 justify-content-center justify-content-md-start">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={twitter} alt="instagram"  />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={instagram} alt="instagram"  />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={whatsapp} alt="instagram"  />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
