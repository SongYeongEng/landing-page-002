import './App.css';
import Companies from './Components/Companies';
import MainPage from './Components/MainPage'; 
import ShowCase from './Components/ShowCase';

function App() {
  return (
    <div className="App">
      <MainPage />
      <Companies/>
      <ShowCase/>
    </div>

    
  );
}

export default App;
