import React from 'react';
import { helix } from 'ldrs';
import './Loading.css'; // Import the CSS file for styling

// Register the helix spinner component
helix.register();

function Loading() {
  return (
    <div className="loading-container"> {/* Add a class for styling */}
      <l-helix size="45" speed="2.5" color="black"></l-helix>
    </div>
  );
}

export default Loading;
