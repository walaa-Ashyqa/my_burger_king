 
import React from 'react';
import AboutHeroSection from '../components/AboutHeroSection';  
import WhoAreWeSection from '../components/WhoAreWeSection';  
import OurVisionSection from '../components/OurVisionSection';  
import 'bootstrap/dist/css/bootstrap.min.css';
 

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
