// src/components/FallingStars.js
import React, { useState, useEffect, useCallback } from 'react'; // NEW: Import useState
import './FallingStars.css';

const FallingStars = ({ numberOfStars = 60 }) => {
  // Use useState for star data so that updates trigger a re-render
  const [stars, setStars] = useState([]); 

  const generateStars = useCallback(() => {
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100 + '%',
        animationDuration: `${4 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * 6}s`,
        size: `${1 + Math.random() * 2}px`,
      });
    }
    setStars(newStars); // NEW: Update the state to trigger a re-render
    // console.log("Generated stars:", newStars.length); // You can uncomment this for debugging
  }, [numberOfStars]);

  useEffect(() => {
    generateStars();
  }, [generateStars]);

  return (
    <div className="falling-stars-container">
      {/* NEW: Map over the 'stars' state variable */}
      {stars.map(star => ( 
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
            width: star.size,
            height: star.size,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FallingStars;