import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Gallery from './Gallery';
import Vendors from './Vendors';

function Rout() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/contact' element={<Contact />} ></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/gallery' element={< Gallery/>} ></Route>
                <Route path='/vendors' element={< Vendors/>} ></Route>
                
            </Routes>
        </div>
    )
}

export default Rout;