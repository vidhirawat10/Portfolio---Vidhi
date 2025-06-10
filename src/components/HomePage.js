// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the specific CSS for HomePage
import SocialNavbar from './SocialNavbar'; // Import the new SocialNavbar component
import TypingAnimation from './TypingAnimation'; // Import the new TypingAnimation component
import FallingStars from './FallingStars'; // NEW: Import FallingStars component

function HomePage() {
  const words = ["MERN Developer", "Data Science Aficionado", "ML Enthusiast"];

  return (
    <div className="homepage-main">

      {/* Container for the two equal sections */}
      <div className="homepage-sections">

        {/* Left section with the lighter background and dynamic content */}
        <div className="left-section">
          {/* Logo remains */}
          <div className="homepage-logo">
            <span className="logo-name">Vidhi</span> <span className="logo-separator">||</span> <span className="logo-portfolio">Portfolio</span>
          </div>
          {/* New TypingAnimation component */}
          <TypingAnimation texts={words} />
        </div>
        
        {/* Right section with the darker background */}
        <div className="right-section">
          {/* NEW: Add FallingStars component here */}
          <FallingStars numberOfStars={100} /> {/* You can adjust the number of stars */}
          {/* SocialNavbar remains */}
          <SocialNavbar />
          {/* You can add other content for the right section here later if needed */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;