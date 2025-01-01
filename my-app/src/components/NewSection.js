import React, { useState } from 'react';
import '../App.css';

const countries = [
  { name: 'USA', flag: 'https://flagcdn.com/w320/us.png' },
  { name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png' },
  { name: 'UK', flag: 'https://flagcdn.com/w320/gb.png' },
  { name: 'France', flag: 'https://flagcdn.com/w320/fr.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w320/de.png' },
  { name: 'India', flag: 'https://flagcdn.com/w320/in.png' },
  { name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
  { name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png' },
  { name: 'Australia', flag: 'https://flagcdn.com/w320/au.png' },
  { name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png' },
];

const NewSection = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleFlagClick = () => {
    setShowRegistration(true); // Show the registration form when a flag is clicked
  };

  const closeRegistration = () => {
    setShowRegistration(false); // Close the registration form
  };

  const openLogin = () => {
    setShowLogin(true); // Show the login form
    setShowRegistration(false); // Close the registration form
  };

  const closeLogin = () => {
    setShowLogin(false); // Close the login form
  };

  return (
    <div className="new-section">
      <div className="new-section-container">
        <h2>Learn any language you want</h2>
        <p>
          We help people to learn the language of any country from any corner of the world.
          Here are most commonly learned languages from countries like:
        </p>
        <div className="flag-icons-horizontal">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flag-item-square"
              onClick={handleFlagClick} // Handle flag click to open registration form
            >
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="flag-image"
              />
              <p>{country.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form Modal */}
      {showRegistration && (
        <div className="modal-overlay" onClick={closeRegistration}>
          <div
            className="modal-container registration-modal"
            onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking inside
          >
            <h2>New User Registration</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />

              <label htmlFor="confirm-password">Confirm Password:</label>
              <input type="password" id="confirm-password" name="confirm-password" required />

              <button type="submit">Register</button>
            </form>
            <button className="close-button" onClick={openLogin}>
              Login
            </button>
          </div>
        </div>
      )}

      {/* Login Form Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={closeLogin}>
          <div
            className="modal-container login-modal"
            onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking inside
          >
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required /><br></br>
              <br></br>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <br></br>
              <button type="submit">Sign In</button>
            </form>
            <button className="close-button" onClick={closeLogin}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewSection;
