// src/components/AboutPage.js
import React from 'react';
// No need for 'Link' if it's a scrollable section, not a routed page link.
// Removed SocialNavbar import as it's not in the new image's layout for About.
import './AboutPage.css';
import FallingStars from './FallingStars'; // Keep the stars for the background

function AboutPage() {
  // Data for your skill cards
  const skills = [
    { icon: '</>👩🏻‍💻', title: 'Full-Stack Development' },
    { icon: '📊🔎', title: 'Data Analysis' }, // Using emojis for icons for simplicity
    { icon: '🤖🧠', title: 'Machine Learning' },
    { icon: '🗂️🛠️', title: 'Project Management' },
  ];

  return (
    <div className="aboutpage-main">
      {/* Falling Stars animation as background for the entire page */}
      <FallingStars numberOfStars={100} /> 

      {/* Top Navigation/Logo area (fixed at the top of this section) */}

      {/* Main About Content Wrapper - centered on the page */}
      <div className="about-content-wrapper">
        <h3 className="about-greeting">HI, THERE !!</h3>
        <h1 className="about-name">I'm Vidhi Rawat</h1>
        <p className="about-description">
          I'm Vidhi Rawat, a tech enthusiast with a passion for Full-Stack Development, Data Analysis, and
          Machine Learning. I enjoy building clean, user-friendly web interfaces while leveraging data to drive
          smart, impactful solutions. With a strong foundation in Python, JS, and ML tools, I blend creativity and
          logic to craft projects that are both visually engaging and data-driven. I'm a quick learner and
          collaborate closely with teams to build scalable, efficient, and user-friendly solutions
        </p>

        {/* Skill Cards Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <p className="skill-title">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;