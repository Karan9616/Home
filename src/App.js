
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Screen from './components/Screeen/Screen.js';
import Cards from './components/Cards1/Cards.js';
import RealWedding from './components/RealWedding/RealWedding.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Screen/>
      <Cards/>
      <RealWedding/>
    </div>
  );
}

export default App;
