import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.js';




function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submit = async (e) => {
    e.preventDefault()
    try {


      alert("Login succesfully");

    }
    catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <Sidebar/>
      <div className='main_container'>


        <div className='header'>
          <h2>Login</h2>
        </div>


        <div className='box'>
          <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='box'>
          <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
        </div>

        <p>Don't have an account? <Link to="/signup">Create Account</Link></p>
        <button onClick={submit}>Login</button>
      </div>

    </div>




  )
}

export default Login;