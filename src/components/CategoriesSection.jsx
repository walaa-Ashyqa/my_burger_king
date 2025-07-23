import React from 'react';
import CategoryCard from './CategoryCard';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategoriesSection.css';
import { Chicken, Desserts, Sides, burger_7, burger_9 } from '../assets';

function CategoriesSection() {
  const categories = [
    { name: 'Desserts', image: Desserts, className: 'card-desserts' },
    { name: 'Burgers and Sandwiches', image: burger_9, className: 'card-burgers' },
    { name: 'Breakfast Items', image: burger_7, className: 'card-breakfast' },
    { name: 'Sides', image: Sides, className: 'card-sides' },
    { name: 'Chicken & Nuggets', image: Chicken, className: 'card-chicken' },
  ];

  return (
    <section className="categories-section py-5">
      <Container>
        <h2 className="categories-title text-center mb-5">OUR PRODUCTS</h2>
        <div className="categories-grid">
          <div className={`category-card card-desserts position-relative overflow-hidden rounded-4`}>
            <img
              src={Desserts}
              alt='Desserts'
              className="card-image w-100 h-100 object-fit-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image"; }}
            />
            <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <h3 className="card-name text-white text-center fw-bold">Desserts</h3>
            </div>
          </div>

          <div className={`category-card card-burgers position-relative overflow-hidden rounded-4`}>
            <img
              src={burger_9}
              alt='Burgers and Sandwiches'
              className="card-image w-100 h-100 object-fit-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image"; }}
            />
            <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <h3 className="card-name text-white text-center fw-bold">Burgers and Sandwiches</h3>
            </div>
          </div>
          <div className={`category-card card-breakfast position-relative overflow-hidden rounded-4`}>
            <img
              src={burger_7}
              alt='Breakfast Items'
              className="card-image w-100 h-100 object-fit-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image"; }}
            />
            <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <h3 className="card-name text-white text-center fw-bold">Breakfast Items</h3>
            </div>
          </div>

          <div className={`category-card card-sides position-relative overflow-hidden rounded-4`}>
            <img
              src={Sides}
              alt='Sides'
              className="card-image w-100 h-100 object-fit-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image"; }}
            />
            <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <h3 className="card-name text-white text-center fw-bold">Sides</h3>
            </div>
          </div>

          <div className={`category-card card-chicken position-relative overflow-hidden rounded-4`}>
            <img
              src={Chicken}
              alt='Chicken & Nuggets'
              className="card-image w-100 h-100 object-fit-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image"; }}
            />
            <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <h3 className="card-name text-white text-center fw-bold">Chicken & Nuggets</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CategoriesSection;