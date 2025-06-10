// src/components/TypingAnimation.js
import React, { useState, useEffect } from 'react';
import './TypingAnimation.css'; // Create this CSS file next

const TypingAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, delay = 1500 }) => {
  const [index, setIndex] = useState(0); // Current index of the text array
  const [subIndex, setSubIndex] = useState(0); // Current index of the characters in the current text
  const [reverse, setReverse] = useState(false); // Whether to type or delete
  const [blink, setBlink] = useState(true); // For the cursor blinking

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500); // Blink every 500ms
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing/Deleting logic
  useEffect(() => {
    if (index < texts.length) { // Ensure index is within bounds
      if (!reverse) { // Typing
        if (subIndex < texts[index].length) {
          const timeout = setTimeout(() => {
            setSubIndex(prev => prev + 1);
          }, typingSpeed);
          return () => clearTimeout(timeout);
        } else { // Done typing, start deleting after a delay
          const timeout = setTimeout(() => {
            setReverse(true);
          }, delay);
          return () => clearTimeout(timeout);
        }
      } else { // Deleting
        if (subIndex > 0) {
          const timeout = setTimeout(() => {
            setSubIndex(prev => prev - 1);
          }, deletingSpeed);
          return () => clearTimeout(timeout);
        } else { // Done deleting, move to next text
          setReverse(false); // Start typing again
          setIndex(prev => (prev + 1) % texts.length); // Cycle through texts
        }
      }
    }
  }, [subIndex, index, reverse, texts, typingSpeed, deletingSpeed, delay]);


  return (
    <div className="typing-container">
      <h1 className="typing-text">
       <span className="typed-word">{texts[index].substring(0, subIndex)}</span>
        <span className="cursor" style={{ opacity: blink ? 1 : 0 }}>|</span>
      </h1>
      <p className="typing-description">
        I like to craft solid and scalable frontend products with great user experiences and<br />the best analytical solutions.
      </p>
      <button className="resume-button">Resume</button>

      <div className="bottom-text-container">
        <p className="bottom-text left-align">Proficient in data analysis, visualization,<br />and extracting actionable insights.</p>
        <p className="bottom-text right-align">Experienced in developing and deploying user-friendly frontend<br/> solutions for diverse audiences..</p>
      </div>

      <div className="diagonal-lines">
        <span>/</span>
        <span>/</span>
        <span>/</span>
      </div>
    </div>
  );
};

export default TypingAnimation;