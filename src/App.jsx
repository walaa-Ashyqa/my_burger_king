
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components

import Header from './components/Header'; // Your existing Header/Navbar
import Footer from './components/Footer'; // Your existing Footer

import HomePage from './pages/HomePage'; // Import HomePage
import MenuPage from './pages/MenuPage'; // Import MenuPage
import ContactPage from './pages/ContactPage'; // Import ContactPage
import AboutPage from './pages/AboutPage'; // Import AboutPage

import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported globally
import './App.css'; // Your main application CSS

function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
    <div className="App">
      <Header /> {/* Header is outside Routes, so it's always visible */}

      <main className="content-wrapper"> {/* A wrapper for page content */}
        <Routes> {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>

      <Footer /> {/* Footer is outside Routes, so it's always visible */}
    </div>
  </Router>
  );
}

export default App;
