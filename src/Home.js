import React from 'react';
import Cards from './components/Cards1/Cards.js'; 
import RealWedding from './components/RealWedding/RealWedding.js';
import Screen from './components/Screeen/Screen.js';
import Search from './components/Search/Search.js';
function Home() {
  return (
    <div className='main-container'>
        <Screen/>
        <Search/>
        <Cards/>
        <RealWedding/>
            
    </div>
  )
}

export default Home