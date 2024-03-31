import React from 'react';
import './Cards.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function Cards() {
    const settings = {
        dots:true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    };

    const data = [
        {
            img: `/assests/1.jpeg`,
            text: "Planners"
        },
        {
            img: "/assests/2.jpg",
            text: "Planners"
        },
        {
            img: `/assests/3.jpg`,
            text: "Planners"
        },
        {
            img: `/assests/4.jpg`,
            text: "Planners"
        },
        {
            img: `/assests/5.jpg`,
            text: "Planners"
        },
        {
            img: `/assests/7.jpg`,
            text: "Planners"
        },

    ]
    return (

        <div className='card-container'>
            <h1>Popular Searches</h1>
            <Slider {...settings}>
                

                    {data.map((item) => (
                        <div key={item.img}>
                            <Card className="custom-card"> {/* Add custom-card class */}
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    style={{ height: '100%', width: '100%', objectFit: 'cover' }} // Set height and width to 100%, and use object-fit: cover
                                    image={item.img}
                                />
                            </Card>
                            <h1>{item.text}</h1>
                        </div>
                    ))}

                
            </Slider>

        </div>



    )


}

export default Cards;