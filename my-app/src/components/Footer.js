import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Follow Us</h2>
        <p>Connect with us on social media for updates and more!</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Multilingo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
