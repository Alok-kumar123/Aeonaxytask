import React from 'react';
import '../App.css';

function LoadingBar({ currentQuestionIndex, totalQuestions, onPrevious }) {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="loading-container">
      <button className="previous-button" onClick={onPrevious} disabled={currentQuestionIndex === 0}>
        &lt; 
      </button>
      <div className="loading-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}>
          <div className="arrow" style={{ left: `${progress - 1}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingBar;
