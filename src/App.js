import './App.css';
import Navbar from './Components/Navbar'; 
import MainPage from './Components/MainPage'; 
import Companies from './Components/Companies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <MainPage />
      <Companies />
      </header>
    </div>
  );
}

export default App;
