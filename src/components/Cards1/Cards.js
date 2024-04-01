import React from 'react';
import './Cards.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};






function Cards() {


    const data = [
        {
            img: `/assests/1.jpeg`,
            text: "Bridal Wear"
        },
        {
            img: "/assests/2.jpg",
            text: "Makeup"
        },
        {
            img: `/assests/3.jpg`,
            text: "Invitations"
        },
        {
            img: `/assests/4.jpg`,
            text: "Catering"
        },
        {
            img: `/assests/5.jpg`,
            text: "Groom Wear"
        },
        {
            img: `/assests/7.jpg`,
            text: "Decorators"
        },

    ]
    return (

        <div className='card-container'>
            <h1>Popular Searches</h1>
          
                <Carousel responsive={responsive}>
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
                            <h1 >{item.text}</h1>
                        </div>
                    ))}

                </Carousel>

            





        </div>



    )


}

export default Cards;