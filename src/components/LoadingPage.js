import React, { useState, useEffect } from 'react';
import greetings from '../data/greetings'; 
import './LoadingPage.css'; 

function LoadingPage({ onLoadingComplete }) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  
  useEffect(() => {
    
    const greetingCycleInterval = setInterval(() => {
      setCurrentGreetingIndex(prevIndex => (prevIndex + 1) % greetings.length);
    }, 250);

    
    return () => clearInterval(greetingCycleInterval);
  }, []); 

  
  useEffect(() => {
    
    const greetingsDisplayDuration = 3000; 

    
    const pageAnimationDuration = 1000; 

   
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
    }, greetingsDisplayDuration);

  
    const animationEndTimer = setTimeout(() => {
      onLoadingComplete();
    }, greetingsDisplayDuration + pageAnimationDuration);

   
    return () => {
      clearTimeout(timer);
      clearTimeout(animationEndTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-page ${isAnimatingOut ? 'fade-out-up' : ''}`}>
      <div className="greetings-container">
        {}
        <span key={currentGreetingIndex} className="greeting-text">
          {greetings[currentGreetingIndex]}
        </span>
      </div>
    </div>
  );
}

export default LoadingPage;