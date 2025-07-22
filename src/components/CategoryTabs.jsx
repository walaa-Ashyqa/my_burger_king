// src/components/CategoryTabs.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategoryTabs.css'; // Custom CSS for specific styling

function CategoryTabs({ activeCategory, setActiveCategory }) {
  const categories = ['Burger', 'Chicken', 'Breakfast', 'Desserts', 'Sides'];

  return (
    <div className="category-tabs py-3">
      <Container className="d-flex justify-content-center flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            className={`category-button rounded-pill px-4 py-2 ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </Container>
    </div>
  );
}

export default CategoryTabs;
