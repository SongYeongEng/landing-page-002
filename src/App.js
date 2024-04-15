import './App.css';
import Navbar from './Components/Navbar'; 
import MainPage from './Components/MainPage'; 
import Companies from './Components/Companies';
import * as THREE from 'three'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <MainPage />
      <Companies />
    </div>

    
  );
}

export default App;
