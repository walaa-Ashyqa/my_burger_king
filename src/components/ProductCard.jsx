// src/components/ProductCard.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard.css'; // Custom CSS for card styling
import { burger_1 } from '../assets';

function ProductCard({ name, rating, price, image }) {
  return (
    <div className="product-card bg-white rounded-4 shadow-sm d-flex align-items-center p-3">
      <div className="product-image-wrapper me-3">
        <img
          src={burger_1}
          alt={name}
          className="product-image" /* Added a class for specific image styling */
          // Fallback for image loading errors
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/CCCCCC/333333?text=Product"; }}
        />
        {/* The glow effect is now a separate element for better control */}
        <div className="product-image-glow"></div>
      </div>
      <div className="product-info flex-grow-1">
        <h3 className="product-name mb-2">{name}</h3>
        <div className="product-details d-flex justify-content-between align-items-center">
          <span className="product-rating d-flex align-items-center">
            {rating} <i className="fas fa-star ms-1"></i> {/* Font Awesome star icon */}
          </span>
          <span className="product-price fw-bold">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
