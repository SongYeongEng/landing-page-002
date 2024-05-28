import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure you import Tailwind CSS styles
import img from './island.svg';
import me from './me.svg';
import './fonts.css'

function AboutMe() {
  const [opacity, setOpacity] = useState(0); // Initial opacity value

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 950; // Adjust this value as needed

      // Calculate opacity based on scroll position
      const newOpacity = 0 + (scrollPosition / maxScroll);
      setOpacity(newOpacity < 0 ? 0 : newOpacity); // Ensure opacity doesn't go below 0
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div className="flex h-screen" id="AboutMe">
      <div className="flex-1 flex justify-center items-center relative">
        <img 
          src={img} 
          alt="Background" 
          className="max-w-full max-h-full object-cover" 
        />
        <img 
          src={me} 
          alt="Overlay" 
          className="absolute top-45 left-50 w-50 h-50 object-contain" 
          style={{ opacity }} // Set opacity dynamically
        /> 
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8 font-custom "id="AboutMe2" style={{ fontFamily: 'Cartesian, sans-serif' }}>
        <h1 className="text-4xl mb-4">Hello welcome to my page!</h1>
        <p className="text-xl"> Hello, I'm Yeong Eng, a recent Computer Science graduate with a deep passion for the IT field. </p>
        <p className="text-xl"> am Currently looking for job opening to put my skill into action, Thanks for visiting.</p>
      </div>
    </div>
  );
}

export default AboutMe;
