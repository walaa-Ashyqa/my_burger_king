// src/components/ChooseEnjoySection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChooseEnjoySection.css'; // Custom CSS for specific styling
import { burger_10, burger_4, burger_6 } from '../assets';

function ChooseEnjoySection() {


  return (
    <section className="choose-enjoy-section py-5">
      <Container>
        <div className="choose-enjoy-header text-center mb-5">
          <h2 className="choose-enjoy-title mb-3">CHOOSE & ENJOY</h2>
          <p className="choose-enjoy-tagline">
            Find Your Perfect Burger Match: A Wide Selection Of Juicy And Flavorful Options To choose And Enjoy
          </p>
        </div>
        <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
              <div className="choose-enjoy-card rounded-4  text-center p-4">
                <div className="choose-enjoy-image-wrapper mb-3">
                  <img
                    src={burger_4}
                    alt='Chicken Burger'
                    className="img-fluid rounded-6"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image+Not+Found"; }}
                  />
                </div>
                <h3 className="choose-enjoy-card-name mb-3">'Chicken Burger'</h3>
                <p className="choose-enjoy-description mb-4">'Chicken Breast Meat, Salt, Pepper, Garlic Powder, Onion Powder, Paprika, Egg, Breadcrumbs, Flour, Oil For Frying Or Grilling.'             
                   </p>
                <Button className="choose-enjoy-order-btn custom-btn-orange rounded-pill px-4 py-2">
                  Order Now
                </Button>
              </div>
            </Col>

         
            <Col  xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
              <div className="choose-enjoy-card rounded-4  text-center p-4">
                <div className="choose-enjoy-image-wrapper mb-3">
                  <img
                    src={burger_6}
                    alt='Veg Burger'
                    className="img-fluid rounded-6"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image+Not+Found"; }}
                  />
                </div>
                <h3 className="choose-enjoy-card-name mb-3">Veg Burger</h3>
                <p className="choose-enjoy-description mb-4">Grilled Or Mashed Vegetables, Whole Wheat Or Grain Buns, Lettuce Or Other Greens, Tomato And Onion</p>
                <Button className="choose-enjoy-order-btn custom-btn-orange rounded-pill px-4 py-2">
                  Order Now
                </Button>
              </div>
            </Col>

            <Col  xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
              <div className="choose-enjoy-card rounded-4  text-center p-4">
                <div className="choose-enjoy-image-wrapper mb-3">
                  <img
                    src={burger_10}
                    alt='Mutton Burger'
                    className="img-fluid rounded-6"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image+Not+Found"; }}
                  />
                </div>
                <h3 className="choose-enjoy-card-name mb-3">Mutton Burger</h3>
                <p className="choose-enjoy-description mb-4"> Minced Mutton, Salt, Pepper, Chopped Onions, Chopped Cilantro, Chopped Green Chilies Bread Crumbs </p>
                <Button className="choose-enjoy-order-btn custom-btn-orange rounded-pill px-4 py-2">
                  Order Now
                </Button>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ChooseEnjoySection;
