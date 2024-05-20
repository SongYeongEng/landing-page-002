import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure you import Tailwind CSS styles

function AboutMe() {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <img 
          src="path-to-your-image.jpg" 
          alt="About Me" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl mb-4">About Me</h1>
        <p className="text-lg">This is some text about me.</p>
      </div>
    </div>
  );
}

export default AboutMe;
