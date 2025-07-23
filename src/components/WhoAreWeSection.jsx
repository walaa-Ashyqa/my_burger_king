import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WhoAreWeSection.css';
import { logo_3 } from '../assets';

function WhoAreWeSection() {
  return (
    <section className="who-are-we-section py-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="who-are-we-logo-col d-flex justify-content-center mb-4 mb-md-0">
            <img
              src={logo_3}
              alt="Burger King Logo"
              className="img-fluid "
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/350x350/CCCCCC/333333?text=Burger+King+Logo"; }}
            />
          </Col>
          <Col md={6} className="who-are-we-content text-center text-md-end">
            <h2 className="who-are-we-title mb-4">who are we ?</h2>
            <p className="who-are-we-text mb-3">
              Burger King is known for serving high-quality, great-tasting, and affordable food founded in 1954.
              Burger King is the second largest fast food hamburger chain in the world. The original Home of
              the Whopper, our commitment to premium ingredients, signature recipes, and family friendly
              dining experiences is what has defined our brand
              for 70 successful years.
            </p>
            <p className="who-are-we-text mb-0">
              Burger King is a subsidiary of Restaurant Brands
              International (RBI), a Canadian multinational fast-
              food holding company that also owns Tim Hortons,
              Popeyes, and Firehouse Subs. RBI helps guide the
              brand’s global strategy, marketing, and innovation.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhoAreWeSection;