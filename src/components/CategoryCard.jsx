 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategoryCard.css'; // Custom CSS for card styling

function CategoryCard({ name, image, className }) {
  return (
    <div className={`category-card ${className} position-relative overflow-hidden rounded-4`}>
      <img
        src={image}
        alt={name}
        className="card-image w-100 h-100 object-fit-cover"
         onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/333333?text=Image"; }}
      />
      <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
        <h3 className="card-name text-white text-center fw-bold">{name}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
