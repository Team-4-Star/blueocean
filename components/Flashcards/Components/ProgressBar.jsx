import React, { useState } from 'react';
import './progressbar.css';

const ProgressBar = () => {
  const [cardsCompleted, setCardsCompleted] = useState(30);
  const totalCards = 60; // Total number of cards

  // Calculate the progress percentage
  const progress = (cardsCompleted / totalCards) * 100;

  // Set the progress height dynamically
  const progressHeight = progress + '%';

  return (
    <div className="progress-bar">
      <div className="inner-bar" style={{ '--progress-height': progressHeight }}></div>
    </div>
  );
};

export default ProgressBar;