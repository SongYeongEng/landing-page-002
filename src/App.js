import React, { useState, useEffect } from 'react';
import './App.css';
import Companies from './Components/Companies';
import MainPage from './Components/MainPage'; 
import ShowCase from './Components/ShowCase';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration as needed

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <MainPage />
          <Companies />
          <AboutMe />
          <ShowCase />
        </>
      )}
    </div>
  );
}

export default App;
