import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { email, instagram, logo_2, map, twitter, whatsapp } from '../assets';

function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="justify-content-center">
          {/* Brand Info Column */}
          <Col xs={12} md={4} lg={4} className="footer-column brand-info mb-4 mb-md-0">
            <div className="footer-logo mb-3">
              <img src={logo_2} alt="Burger King Logo" />
            </div>
            <p className="footer-story-text mb-3">
              Our story begins with a passion for delicious, juicy burgers. We started out as a small family-owned
              restaurant, serving up homemade burgers using only the freshest and highest quality ingredients.
            </p>
            <p className="copyright mb-0">&copy;Burger King 2025. All Rights Reserved</p>
          </Col>

          {/* Menu Links Column */}
          <Col xs={6} md={4} lg={2} className="footer-column footer-links mb-4 mb-md-0">
            <h4 className="footer-heading mb-3">Menu</h4>
            <ul className="list-unstyled">
              <li><a href="#menu">Menu</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </Col>

          {/* Policy Links Column */}
          <Col xs={6} md={4} lg={2} className="footer-column footer-links mb-4 mb-md-0">
            <h4 className="footer-heading mb-3">Policy</h4>
            <ul className="list-unstyled">
              <li><a href="#delivery">Delivery Policy</a></li>
              <li><a href="#terms">Term And Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Contact & Social Column */}
          <Col xs={12} md={4} lg={3} className="footer-column contact-social">
            <div className="contact-item mb-1 d-flex align-items-center">
              <img src={map} alt="Location" />
              <span className='p-2'>#23, Main Street, London</span>
            </div>
            <div className="contact-item mb-5 d-flex align-items-center">
              <img src={email} alt="Email" />
              <span className='p-2'>info@burgerking.com</span>
            </div>
            <div className="social-icons d-flex gap-4 justify-content-center justify-content-md-start">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;