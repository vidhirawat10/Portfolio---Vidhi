import React, { useState, useEffect } from 'react';
import './App.css'; // Your main App styles
import LoadingPage from './components/LoadingPage'; // Import the LoadingPage

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Add/remove a class to the body to prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading-active');
    } else {
      document.body.classList.remove('loading-active');
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading && <LoadingPage onLoadingComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          fontSize: '2em',
          color: '#333',
          textAlign: 'center',
          padding: '20px'
        }}>
          {/* This is your placeholder for the main content */}
          <h1>Welcome to My Portfolio!</h1>
          <p>The loading page transition was successful.</p>
          <p>Now, let's start building the rest of your amazing portfolio content!</p>
        </div>
      )}
    </div>
  );
}

export default App;