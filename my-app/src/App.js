import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewSection from './components/NewSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Login from './components/Login'; // Import the Login component

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true); // Show the login form
  };

  const closeLogin = () => {
    setShowLogin(false); // Close the login form
  };

  return (
    <Router>
      <div className="app">
        <Header openLogin={openLogin} /> {/* Pass the openLogin function to Header */}
        <Routes>
          {/* Define the route for the Login page */}
          <Route path="/login" element={<Login closeLogin={closeLogin} />} />
          
          {/* Define the route for the main page */}
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <NewSection />
                <Features />
                <Footer />
              </>
            } 
          />
        </Routes>

        {/* Conditionally show login modal based on state */}
        {showLogin && (
          <div className="modal-overlay" onClick={closeLogin}>
            <div className="modal-container login-modal" onClick={(e) => e.stopPropagation()}>
              <Login closeLogin={closeLogin} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
