import React from 'react';
import './Search.css';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function Search() {

    const [vendor, setVendor] = useState('');

    const handleChange1 = (event) => {
        setVendor(event.target.value);
    };
    const [city, setCity] = useState('');

    const handleChange2 = (event) => {
        setCity(event.target.value);
    };


    let vendor_item = [
        { name: "Wedding Venue", value: 1 },
        { name: "Bridal Makeup Artist", value: 2 },
        { name: "Wedding Photographers", value: 3 },
        { name: "Wedding Decorators", value: 4 },
        { name: "Bridal Mehandi Artist", value: 5 },
        { name: "Wedding Catering", value: 6 },
        { name: "Wedding Cards", value: 7 },
        { name: "Wedding Entertainment", value: 8 },
        { name: "Family Makeup", value: 9 },
        { name: "Beauty and Wellness", value: 10 }

    ]

    let city_item = [
        { name: "Banglore", value: 1 },
        { name: "Mumbai", value: 2 },
        { name: "Delhi", value: 3 },
        { name: "Hyderabad", value: 4 },
        { name: "Chennai", value: 5 },
        { name: "Kolkata", value: 6 },
        { name: "Jaipur", value: 7 },
        { name: "Lucknow", value: 8 },
        { name: "Khanpur", value: 9 },
        { name: "Indore", value: 10 }

    ]

    return (
        <div class='container'>
        <div class='content'>
            <div class='head-container'>
                <h1 class='heading'>Discover everything you need <br/>to plan your big day</h1>
                <p class='para'>Search for 10,000 local professionals with reviews,<br/>pricing and more</p>
                <div class="button-container">
                    <div class="box">
                        <FormControl fullWidth>
                            <InputLabel id="vendor">Select Vendor Type</InputLabel>
                            <Select
                                labelId="vendor"
                                id="vendor"
                                value={vendor} // Provide the appropriate state value here
                                label="Age"
                                onChange={handleChange1}
                            >
                                {vendor_item.map((item) => {
                                    return <MenuItem value={item.value}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <div class="box">
                        <FormControl fullWidth>
                            <InputLabel id="city">Select City</InputLabel>
                            <Select
                                labelId="city"
                                id="city"
                                value={city} // Provide the appropriate state value here
                                label="Age"
                                onChange={handleChange2}
                            >
                                {city_item.map((item) => {
                                    return <MenuItem value={item.value}>{item.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <button class='find-button'>Find</button>
                </div>
            </div>
        </div>
        <div class='right-content'>
            <img src='/assests/39.png' alt='sidephoto'/>
        </div>
    </div>
    
    )
}

export default Search;