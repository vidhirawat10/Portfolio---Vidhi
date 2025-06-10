// src/components/SocialNavbar.js
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import './SocialNavbar.css';

function SocialNavbar() {
  return (
    <div className="social-navbar">
      <ul className="social-links">
        <li>
          <a href="mailto:vidhirawat54@gamil.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/vidhirawat10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vidhi-rawat-8a795928b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://x.com/vidhirawat_10" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="social-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialNavbar;