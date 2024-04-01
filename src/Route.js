import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';

function Rout() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/contact' element={<Contact />} ></Route>
            </Routes>
        </div>
    )
}

export default Rout;