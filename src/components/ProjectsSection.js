// src/components/ProjectsSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // NEW: Import useNavigate
import './ProjectSection.css';
import FallingStars from './FallingStars'; // For the background animation

function ProjectsSection() {
  const navigate = useNavigate(); // NEW: Initialize navigate hook

  // Sample project data (only the first 3 for the homepage display)
  const initialProjects = [
    {
      title: 'Beautelligent',
      description: 'AI-powered skincare analysis and personalized recommendations.',
      techStack: ['Python', 'Machine learning', 'Keras', 'Eslint', 'Sci-kit', 'TensorFlow', 'React Js', 'MongoDB', 'Node Js', 'Express Js'],
      liveLink: '#', // Replace with actual live project link
      codeLink: '#'   // Replace with actual GitHub/code repository link
    },
    {
      title: 'DrapeVibe',
      description: 'Virtual fashion stylist with AI-driven outfit suggestions.',
      techStack: ['React Js', 'MongoDB', 'Node Js', 'Express Js', 'Redux'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Nyay Search',
      description: 'AI-based legal research and case law search platform.',
      techStack: ['React Js', 'MongoDB', 'Node Js', 'Express Js', 'Redux', 'OpenAI'],
      liveLink: '#',
      codeLink: '#'
    },
    // No more projects here, they are managed in AllProjectsPage
  ];

  const handleViewMoreClick = () => {
    navigate('/projects'); // Navigate to the AllProjectsPage route
  };

  return (
    <div className="projects-section-main">
      <FallingStars numberOfStars={100} />
      <div className="projects-content-wrapper">
        <h2 className="projects-main-heading">Projects</h2>
        <p className="projects-sub-heading">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>

        <div className="projects-grid">
          {initialProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
                <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">View Live App</a>
              </div>
            </div>
          ))}
        </div>
        <button className="view-more-button" onClick={handleViewMoreClick}>View More</button>
      </div>
    </div>
  );
}

export default ProjectsSection;