import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thanks for subscribing to our newsletter!');
  };
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>🎉 EventManagement</h3>
          <p>Your premier event planning and rental service. Creating unforgettable experiences since 2024.</p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">👤</a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
            <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/rentals">Browse Rentals</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📧 info@eventmanagement.com</p>
          <p>📞 (123) 456-7890</p>
          <p>📍 123 Event Street, City, State 12345</p>
          <p>⏰ Mon-Fri: 9AM-6PM</p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get the latest updates on events and special offers!</p>
          <div className="newsletter">
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EventManagement. All rights reserved. | Made with ❤️ by Your Team</p>
      </div>
    </footer>
  );
};

export default Footer;

