// src/pages/AboutPage.jsx
import React from 'react';
import AboutHeroSection from '../components/AboutHeroSection'; // Import the hero section
import WhoAreWeSection from '../components/WhoAreWeSection'; // Import the "Who are we?" section
import OurVisionSection from '../components/OurVisionSection'; // Import the "Our vision" section
import 'bootstrap/dist/css/bootstrap.min.css';
// import './AboutPage.css'; // No specific CSS needed here if components handle their own styling

function AboutPage() {
  return (
    <div className="about-page-container">
      <AboutHeroSection />
      <WhoAreWeSection />
      <OurVisionSection />
    </div>
  );
}

export default AboutPage;
