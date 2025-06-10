// src/components/EducationSection.js
import React from 'react';
import './EducationSection.css';
import FallingStars from './FallingStars'; // For the background animation

function EducationSection() {
  const educationData = [
    {
      institution: 'ABES Institute of Technology, Ghaziabad',
      degree: 'Bachelor of Technology - BTech, Information Technology',
      details: 'CGPA: 8.4 || Jun 2022 - Jun 2026',
      description: 'I am currently pursuing a Bachelor’s degree in Computer Science and Engineering at ABES Institute of Technology, Ghaziabad. I have taken courses in Data Structures, Algorithm, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.',
      position: 'left' // Determines alignment in the timeline
    },
    {
      institution: 'Adarsh Public School, Noida',
      degree: 'CBSE (XII), Science (PCM)',
      details: '88% || March 2022',
      description: 'I completed my class 12 education at Adarsh Public School, Noida, where I studied Science - Physics, Chemistry, Mathematics, English and IT.',
      position: 'right' // Determines alignment in the timeline
    },
    {
      institution: 'Adarsh Public School, Noida',
      degree: 'CBSE (X)',
      details: '94% || March 2020',
      description: 'I completed my class 10 education at Adarsh Public School, Noida.',
      position: 'left' // Determines alignment in the timeline
    },
  ];

  return (
    <div className="education-section-main">
      <FallingStars numberOfStars={100} />
      <div className="education-content-wrapper">
        <h2 className="education-main-heading">Education</h2>
        <p className="education-sub-heading">My education has been a journey of self-discovery and growth. My educational details are as follows.</p>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-item ${edu.position}`}>
              <div className="timeline-content">
                <h3 className="institution">{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="details">{edu.details}</p>
                <p className="description">{edu.description}</p>
              </div>
              <div className="timeline-icon">🎓</div> {/* Graduation cap icon */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationSection;