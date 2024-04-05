import React from 'react';
import './Screen.css';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';











function Screen() {
  return (

    <Carousel>
    <Carousel.Item>
      <img
        style={{ height: '70vh', width: '60vh' }}
        className="d-block w-100"
        src='/assests/35.webp'
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ height: '70vh', width: '60vh' }}
        className="d-block w-100"
        src='/assests/32.jpg'
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ height: '70vh', width: '60vh' }}
        className="d-block w-100"
        src='/assests/33.webp'
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ height: '70vh', width: '60vh' }}
        className="d-block w-100"
        src='/assests/37.jpg'
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ height: '70vh', width: '60vh' }}
        className="d-block w-100"
        src='/assests/31.jpg'
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
   
    
  </Carousel>
  


  )



}

export default Screen;