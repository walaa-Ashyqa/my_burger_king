 import React from "react";
import ContactHeroSection from "../components/ContactHeroSection";  
import ContactContentSection from "../components/ContactContentSection";  
import "bootstrap/dist/css/bootstrap.min.css";
 
function ContactPage() {
  return (
    <div className="contact-page-container">
      <ContactHeroSection />
      <ContactContentSection />
    </div>
  );
}

export default ContactPage;
