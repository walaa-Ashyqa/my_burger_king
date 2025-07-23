
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

import Header from './components/Header'; // Header/Navbar
import Footer from './components/Footer'; // Footer

import HomePage from './pages/HomePage'; // Import HomePage
import MenuPage from './pages/MenuPage'; // Import MenuPage
import ContactPage from './pages/ContactPage'; // Import ContactPage
import AboutPage from './pages/AboutPage'; // Import AboutPage

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';  

function App() {
  return (
    <Router> 
    <div className="App">
      <Header />  

      <main className="content-wrapper">  
        <Routes>  
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
         
        </Routes>
      </main>

      <Footer /> 
    </div>
  </Router>
  );
}

export default App;
