import React from 'react';
import '../css/TokenDisplay.css';

const TokenDisplay = () => {
  return (
    <div className="container">
      {/* Token Display on Desktop */}
      <div className="token-display">
        <p>Current Token Number</p>
        <h1>025</h1>
      </div>

      {/* Token Display on Mobile */}
      <div className="mobile-display">
        <div className="token-box">
          <div className="top-numbers">
            <span>025</span>
            <span className="current">026</span>
            <span>027</span>
          </div>
          <div className="token-number">
            <h2>You</h2>
            <h1>025</h1>
          </div>
          <button className="done-btn">Done</button>
        </div>
      </div>
    </div>
  );
};

export default TokenDisplay;
