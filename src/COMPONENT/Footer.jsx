import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Branding */}
        <div className="footer-section">
          <h2 className="footer-logo">NovelVerse 📚</h2>
          <p className="footer-description">
            Dive into a world of stories, imagination, and discovery.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li>Email: support@novelverse.com</li>
            <li>Instagram: @novelverse</li>
            <li>Twitter: @novelverse</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} NovelVerse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
