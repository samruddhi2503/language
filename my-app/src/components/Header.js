import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link for navigation
import '../App.css'; // Ensure this includes the styles for the image

const Header = ({ openLogin }) => {
  const location = useLocation(); // Get the current route

  return (
    <header className="header">
      <h1>MULTILINGO - Your Language Expert</h1>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><span onClick={openLogin} className="header-link">Sign In</span></li> {/* Use span instead of button */}
          <li><Link to="/">Home</Link></li> {/* Add a Home link to redirect to main page */}
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      
      {/* Conditionally render the image only if not on /start-learning */}
      {location.pathname !== '/start-learning' && (
        <img src="/image/boy.webp" alt="Computer" className="computer-image" />
      )}
    </header>
  );
};

export default Header;
