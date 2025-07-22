// src/pages/ContactPage.jsx
import React from "react";
import ContactHeroSection from "../components/ContactHeroSection"; // Import the hero section
import ContactContentSection from "../components/ContactContentSection"; // Import the main content section
import "bootstrap/dist/css/bootstrap.min.css";
// import './ContactPage.css'; // No specific CSS needed here if components handle their own styling

function ContactPage() {
  return (
    <div className="contact-page-container">
      <ContactHeroSection />
      <ContactContentSection />
    </div>
  );
}

export default ContactPage;
