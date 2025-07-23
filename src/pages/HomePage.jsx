 import React from 'react';
import StatsSection from '../components/StatsSection';
import CategoriesSection from '../components/CategoriesSection';
import ProductsSection from '../components/ProductsSection';
import StorySection from '../components/StorySection';
import ChooseEnjoySection from '../components/ChooseEnjoySection';
import KingBurgerPromoSection from '../components/KingBurgerPromoSection';

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

import Footer from "../components/Footer";  

 

function HomePage() {
  return (
    <div className="home-page-container">
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <ProductsSection />
      <StorySection />
      <ChooseEnjoySection />
      <KingBurgerPromoSection />
    </div>
  );
}

export default HomePage;
