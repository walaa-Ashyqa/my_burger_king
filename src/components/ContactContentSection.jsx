import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactInfoBlock from './ContactInfoBlock';
import ContactForm from './ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactContentSection.css';
import { email2, map2, phone } from '../assets';

function ContactContentSection() {
  return (
    <section className="contact-content-section py-5">
      <Container>
        <div className="contact-header-text text-center mb-5">
          <h2 className="contact-us-title mb-2">Contact us</h2>
          <p className="contact-us-subtitle">We appreciate your interest</p>
        </div>

        <Row className="justify-content-center g-4">
          <Col md={5} lg={4} className="d-flex flex-column align-items-center align-items-md-start">
            <div className="contact-info-blocks w-100">
              <ContactInfoBlock
                icon={phone}
                title="Direct connection"
                value="+8801613968087"
              />
              <ContactInfoBlock
                icon={email2}
                title="E-mail"
                value="burgerking@gmail.com"
              />
              <ContactInfoBlock
                icon={map2}
                title="The address"
                value="#23, Main Street, London"
              />
            </div>
          </Col>

          <Col md={7} lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactContentSection;