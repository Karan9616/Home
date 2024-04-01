import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Cards from './components/Cards1/Cards.js'; 
import RealWedding from './components/RealWedding/RealWedding.js';
import Screen from './components/Screeen/Screen.js';
function Home() {
  return (
    <div className='main-container'>
        <Screen/>
        <Cards/>
        <RealWedding/>
            
    </div>
  )
}

export default Home