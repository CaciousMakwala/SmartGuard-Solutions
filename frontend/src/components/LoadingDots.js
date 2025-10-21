import React from 'react';
import '../css/LoadingDots.css';

const LoadingDots = () => {
  return (
    <div className="loading-dots-overlay">
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default LoadingDots;
