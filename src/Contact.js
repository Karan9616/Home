import React from 'react';
import { useState } from 'react';
import './Contact.css';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions } from '@mui/material';

function Contact() {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the form data to an API or do any other action
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return (
    <div className="background-container">
      <div className="background-image">

        <img src="/assests/23.png" alt="Background" />
        <div className="overlay-text">
          <h1>Contact Us</h1>
          <p>We are here to assist u</p>
        </div>
      </div>

      <div className='object-container'>
        <Card className='conatact-card'>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{ height: '80%%', width: '100%', objectFit: 'cover' }}
              height={220}
              image="/assests/12.jpg"
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions>
            <Button color="primary" className='card-info1'>
              Enquiry & Questions

            </Button>
          </CardActions>
        </Card>

        <Card className='conatact-card'>

          <CardMedia
            component="img"
            style={{ height: '80%', width: '100%', objectFit: 'cover' }}
            image="/assests/24.png"
            alt="green iguana"
          />
          <CardActionArea>
            <Button color="primary" className='card-info2'>
              Call Us
            </Button>

          </CardActionArea>



        </Card>

        <Card className='conatact-card'>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{ height: '80%', width: '100%', objectFit: 'cover' }}
              image="/assests/8.jpeg"
              alt="green iguana"
            />

          </CardActionArea>
          <CardActions>
            <Button color="primary" className='card-info3'>
              Location
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="form-container">
        <h2 className="form-heading">Enquiries and Feedback</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact