
import './App.css';
import Navbar from './components/Navbar/Navbar.js';

import Rout from './Route.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navbar />




      <BrowserRouter>
        <Rout />
      </BrowserRouter>

    </div>
  );
}

export default App;
