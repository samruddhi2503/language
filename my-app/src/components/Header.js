import React from 'react';
import '../App.css'; // Ensure this includes the styles for the image

const Header = ({ openLogin }) => {
  return (
    <header className="header">
      <h1>MULTILINGO - Your Language Expert</h1>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><button onClick={openLogin}>Sign In</button></li> {/* Handle SignIn button click */}
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      {/* Add the image here */}
      <img src="/image/boy.webp" alt="Computer" className="computer-image" />
    </header>
  );
};

export default Header;
