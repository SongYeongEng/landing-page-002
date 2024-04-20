import './App.css';
import Navbar from './Components/Navbar'; 
import MainPage from './Components/MainPage'; 
import Island from './Components/Island';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <Island />
      <MainPage />
    </div>

    
  );
}

export default App;
