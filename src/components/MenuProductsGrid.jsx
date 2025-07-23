 import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuProductsGrid.css';  

function MenuProductsGrid({ products }) {
  return (
    <section className="menu-products-grid-section py-5">
      <Container>
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={4} xl={3} className="mb-4 d-flex justify-content-center">
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

export default MenuProductsGrid;
