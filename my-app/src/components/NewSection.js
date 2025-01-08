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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');

  const handleFlagClick = () => {
    setShowRegistration(true);
  };

  const closeRegistration = () => {
    setShowRegistration(false);
    setMessage('');
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowRegistration(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/saveUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        setMessage('User registered successfully!');
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        setMessage('Failed to register. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="new-section">
      <div className="new-section-container">
        <h2>Learn any language you want</h2>
        <p>
          We help people to learn the language of any country from any corner of the world.
          Here are the most commonly learned languages from countries like:
        </p>
        <div className="flag-icons-horizontal">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flag-item-square"
              onClick={handleFlagClick}
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
            onClick={(e) => e.stopPropagation()}
          >
            <h2>New User Registration</h2>
            <form onSubmit={handleRegister}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />

              <button type="submit">Register</button>
            </form>
            {message && <p className="message">{message}</p>}
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
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <br />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <br />
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