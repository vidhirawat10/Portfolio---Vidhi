// src/components/SkillsPage.js
import React from 'react';
import './SkillsPage.css'; // Import the new CSS for SkillsPage
import FallingStars from './FallingStars'; // Keep the stars for the background

function SkillsPage() {
  // Define your skills data in a structured way
  const skillsData = [
    {
      category: "Programming Languages",
      icon: "💻", // Using emojis as placeholders for icons
      items: ["Python", "Java", "C", "C++", "R"]
    },
    {
      category: "Frontend",
      icon: "🌐",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: ["Node.js", "Express", "REST APIs", "MongoDB", "Flask", "Authentication"]
    },
    {
      category: "Database",
      icon: "🗄️",
      items: ["MongoDB", "Firebase", "MySQL"]
    },
    {
      category: "Tools",
      icon: "🔧",
      items: ["Git", "GitHub", "Docker", "VS Code", "Postman", "npm/yarn", "MongoDB Compass", "Vercel"]
    },
        {
      category: "Data Analysis",
      icon: "📶",
      items: ["Excel", "Tableau", "Power BI", "ML Modeling", "Statistical Analysis", "EDA", "Data Prep", "Data Visualization", "Dashboarding"]
    },
    {
      category: "Website Operations",
      icon: "🚀",
      items: ["Website Maintenance", "SEO", "Performance Optimization", "Accessibility", "Web Hosting", "A/B Testing"]
    },
    {
      category: "Other",
      icon: "✨",
      items: ["SMO", "Figma", "Canva", "Adobe Illustrator", "VN/Capcut"]
    }
  ];

  return (
    <div className="skillspage-main">
      {/* Falling Stars animation as background */}
      <FallingStars numberOfStars={100} /> 

      {/* Main content wrapper for centering and max-width */}
      <div className="skills-content-wrapper">
        <h1 className="skills-main-heading">Skills & Technologies</h1>
        <p className="skills-sub-heading">A COMPREHENSIVE TOOLKIT FOR BUILDING MODERN WEB APPLICATIONS FROM CONCEPT TO DEPLOYMENT.</p>

        {/* Grid for skill categories */}
        <div className="skills-category-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category-card">
              <h2 className="category-title">
                <span className="category-icon">{category.icon}</span> {category.category}
              </h2>
              <div className="skill-items">
                {category.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="skill-item-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
