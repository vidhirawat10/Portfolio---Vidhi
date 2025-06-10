// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoadingPage from './components/LoadingPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ConnectSection from './components/ConnectSection'; // NEW: Import ConnectSection
import AllProjectsPage from './components/AllProjectsPage';

// A wrapper component for the main scrollable content on the homepage
const HomeSections = () => (
  <>
    <HomePage />
    <AboutPage />
    <SkillsPage />
    <ProjectsSection />
    <EducationSection />
    <ConnectSection /> {/* NEW: Render ConnectSection here */}
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading-active');
    } else {
      document.body.classList.remove('loading-active');
      document.body.style.overflowY = 'auto';
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomeSections />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            {/* Add more routes for other pages here if needed */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;