import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductsSection.css';
import { burger_1 } from '../assets';

function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'Veg & Chick ...',
      rating: 4.7,
      price: 15.99,
      image: 'src\\assets\\burger_1.png',
    },
    {
      id: 2,
      name: 'Veg & Chick ...',
      rating: 4.7,
      price: 15.99,
      image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger2',
    },
    {
      id: 3,
      name: 'Veg & Chick ...',
      rating: 4.7,
      price: 15.99,
      image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger3',
    },
    {
      id: 4,
      name: 'Veg & Chick ...',
      rating: 4.7,
      price: 15.99,
      image: burger_1
    },
  ];

  return (
    <section className="products-section py-5">
      <Container>
        <h2 className="products-section-title text-center mb-5">OUR PRODUCTS</h2>
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={3} className="mb-4 d-flex justify-content-center">
              <ProductCard
                name={product.name}
                rating={product.rating}
                price={product.price}
                image={product.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductsSection;