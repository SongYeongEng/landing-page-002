import React from 'react';
import './App.css';
import Companies from './Components/Companies';
import MainPage from './Components/MainPage'; 
import ShowCase from './Components/ShowCase';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Companies />
      <AboutMe />
      <ShowCase />
    </div>
  );
}

export default App;
