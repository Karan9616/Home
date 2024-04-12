import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';








function Signup() {

    const [names, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');







    const submit = async (e) => {
        e.preventDefault()
        try {


            alert("account created succesfully");

        }
        catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <Sidebar />
            <div className='main_container'>
                <div className='header'>
                    <h2>Sign Up To Create An Account</h2>
                </div>

                <div className='box'>
                    <input type='text' value={names} placeholder='UserName' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='box'>
                    <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='box'>
                    <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                </div>

                <p>Already have an account? <Link to="/login">Login Now</Link></p>
                <button onClick={submit}>Sign Up</button>
            </div>
        </div>

    )
}

export default Signup;