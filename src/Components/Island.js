import React from 'react';
import secondSvg from './Layer3.svg';
import './Island.css'; // Import your CSS file for styling

const Island = () => {
  return (
    <div className="svg-container">

      <svg className="bottom-svg">
        <image href={secondSvg} />
      </svg>
    </div>
  );
};

export default Island;