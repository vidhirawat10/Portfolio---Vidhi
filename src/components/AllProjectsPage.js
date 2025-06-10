// src/components/AllProjectsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllProjectsPage.css';
import FallingStars from './FallingStars';

// Define ALL your projects here with their categories
const allProjectsData = [
  {
    title: 'Beautelligent',
    description: 'AI-powered skincare analysis and personalized recommendations.',
    techStack: ['Python', 'Machine learning', 'Keras', 'Eslint', 'Sci-kit', 'TensorFlow', 'React Js', 'MongoDB', 'Node Js', 'Express Js'],
    liveLink: '#',
    codeLink: '#',
    // Categories updated: removed 'ml' and 'web_app'
    categories: ['all', 'major'] 
  },
  {
    title: 'DrapeVibe',
    description: 'Virtual fashion stylist with AI-driven outfit suggestions.',
    techStack: ['React Js', 'MongoDB', 'Node Js', 'Express Js', 'Redux'],
    liveLink: '#',
    codeLink: '#',
    // Categories updated: removed 'web_app' and 'ml'
    categories: ['all', 'major'] 
  },
  {
    title: 'Nyay Search',
    description: 'AI-based legal research and case law search platform.',
    techStack: ['React Js', 'MongoDB', 'Node Js', 'Express Js', 'Redux', 'OpenAI'],
    liveLink: '#',
    codeLink: '#',
    // Categories updated: removed 'web_app' and 'ml'
    categories: ['all', 'major']
  },
  {
      title: 'Netflix Clone',
      description: 'A comprehensive streaming platform UI with realistic Browse and playback features.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'web_app']
  },
  {
      title: 'E-Book Store',
      description: 'A web platform for Browse, purchasing, and reading e-books online.',
      techStack: ['HTML', 'CSS', 'JS'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'web_app']
  },
  {
      title: 'Pizza Website',
      description: 'An interactive pizza ordering website with customisation and online payments.',
      techStack: ['HTML', 'CSS', 'JS', 'React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'web_app']
  },
  {
      title: 'Recipe Search App',
      description: 'A web app that finds recipes based on ingredients and dietary preferences.',
      techStack: ['HTML', 'CSS', 'JS', 'React', 'Node.js', 'MongoDB', 'Spoonacular API'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'web_app']
  },
  {
      title: 'Real Eyes',
      description: 'AI-based web-app for detection of deepfake audios and videos.',
      techStack: ['Python', 'Streamlit', 'OpenCV', 'scikit-learn', 'Flask'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'ml', 'web_app']
  },
  {
      title: 'Legal Document Summarization',
      description: 'NLP-based AI for condensing lengthy legal texts into key insights.',
      techStack: ['Python', 'NLP Libraries', 'React', 'Flask', 'MongoDB'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'ml', 'web_app']
  },
  {
      title: 'Facial Emotion Recognition',
      description: 'ML model that detects human emotions from facial expressions.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'Flask'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'ml']
  },
  {
      title: 'AI for Game Playing',
      description: 'Reinforcement Learning-based AI that plays and optimizes strategies in games.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'Flask', '(DQNs)'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'ml']
  },
  {
      title: 'Sales Performance Dashboard',
      description: 'Interactive dashboard analyzing sales trends and identifying key metrics.',
      techStack: ['Excel', 'Tableau', 'SQL'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'data_analytics']
  },
  {
      title: 'Customer Churn Prediction',
      description: 'Predictive model to identify customers at risk of churning using historical data.',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
      liveLink: '#',
      codeLink: '#',
      categories: ['all', 'data_analytics', 'ml']
  }
];


function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Filter projects based on the active filter
    if (activeFilter === 'all') {
      setFilteredProjects(allProjectsData);
    } else {
      setFilteredProjects(
        allProjectsData.filter(project => project.categories.includes(activeFilter))
      );
    }
  }, [activeFilter]); // Re-run effect when activeFilter changes

  const filterButtons = [
    { name: 'All', category: 'all' },
    { name: 'Major', category: 'major' },
    { name: 'Web Apps', category: 'web_app' },
    { name: 'Machine Learning', category: 'ml' },
    { name: 'Data Analytics Based', category: 'data_analytics' }
  ];

  return (
    <div className="all-projects-page-main">
      <FallingStars numberOfStars={100} />

      {/* Optional: Back to Home button or logo link */}
      <Link to="/" className="all-projects-logo-link">
        <div className="all-projects-page-logo">
          <span className="logo-name">Vidhi</span> <span className="logo-separator">||</span> <span className="logo-portfolio">Portfolio</span>
        </div>
      </Link>

      <div className="all-projects-content-wrapper">
        <h1 className="all-projects-main-heading">Projects</h1>
        <p className="all-projects-sub-heading">
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </p>

        <div className="projects-filter-buttons">
          {filterButtons.map((button) => (
            <button
              key={button.category}
              className={`filter-button ${activeFilter === button.category ? 'active' : ''}`}
              onClick={() => setActiveFilter(button.category)}
            >
              {button.name}
            </button>
          ))}
        </div>

        <div className="all-projects-grid">
          {filteredProjects.map((project, index) => (
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
      </div>
    </div>
  );
}

export default AllProjectsPage;