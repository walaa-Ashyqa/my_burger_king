 import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MenuHeroSection from '../components/MenuHeroSection';
import CategoryTabs from '../components/CategoryTabs';
import MenuProductsGrid from '../components/MenuProductsGrid';
import 'bootstrap/dist/css/bootstrap.min.css';

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Burger');  
 
  const allProducts = [
    // Burger Category
    { id: 1, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger1', category: 'Burger' },
    { id: 2, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger2', category: 'Burger' },
    { id: 3, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger3', category: 'Burger' },
    { id: 4, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger4', category: 'Burger' },
    { id: 5, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger5', category: 'Burger' },
    { id: 6, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger6', category: 'Burger' },
    { id: 7, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger7', category: 'Burger' },
    { id: 8, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger8', category: 'Burger' },
    { id: 9, name: 'Veg & Chick ...', rating: 4.7, price: 15.99, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Burger9', category: 'Burger' },

    // Example products for other categories  
    { id: 10, name: 'Chicken Sandwich', rating: 4.5, price: 12.50, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Chicken1', category: 'Chicken' },
    { id: 11, name: 'Grilled Chicken', rating: 4.6, price: 14.00, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Chicken2', category: 'Chicken' },
    { id: 12, name: 'Pancakes', rating: 4.8, price: 9.00, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Breakfast1', category: 'Breakfast' },
    { id: 13, name: 'Waffles', rating: 4.7, price: 8.50, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Breakfast2', category: 'Breakfast' },
    { id: 14, name: 'Chocolate Cake', rating: 4.9, price: 7.00, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Dessert1', category: 'Desserts' },
    { id: 15, name: 'Fries Large', rating: 4.7, price: 4.00, image: 'https://placehold.co/120x120/FF9900/FFFFFF?text=Side1', category: 'Sides' },
  ];

  // Filter products based on the active category
  const filteredProducts = allProducts.filter(product => product.category === activeCategory);

  return (
    <div className="menu-page">
      <MenuHeroSection />
      <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <MenuProductsGrid products={filteredProducts} />
    </div>
  );
}

export default MenuPage;
