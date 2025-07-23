import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StorySection.css';
import { burger_4 } from '../assets';

function StorySection() {
  return (
    <section className="story-section py-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="story-content text-center text-md-start mb-4 mb-md-0">
            <h2 className="story-title mb-4 text-center">OUR STORY</h2>
            <p className="story-description mb-4 text-center">
              Our Story Begins With A Passion For Delicious, Juicy Burgers. We Started Out As A Small Family-Owned
              Restaurant, Serving Up Homemade Burgers Using Only The Freshest And Highest Quality Ingredients. As Word Of Our
              Delicious Burgers Spread, So Did Our Reputation For Serving Up The Best Burgers In Town. Today, We Continue
              To Use The Same Tried-And-True Recipes And Locally Sourced Ingredients, And We Couldn't Be More Proud To Be
              Known As The Go-To Spot For The Perfect Burger.
            </p>
          </Col>
          <Col md={6} className="story-image-col d-flex justify-content-center">
            <img
              src={burger_4}
              alt="Delicious Burger for Our Story"
              className="img-fluid rounded-4 shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x350/CCCCCC/333333?text=Image+Not+Found"; }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default StorySection;