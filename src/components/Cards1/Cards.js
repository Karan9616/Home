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
            img: `/assests/22.jpg`,
            text: `Bridal Wear`
        },
        {
            img: "/assests/15.png",
            text: "Makeup"
        },
        {
            img: `/assests/19.jpg`,
            text: "Invitations"
        },
        {
            img: `/assests/18.jpg`,
            text: "Catering"
        },
        {
            img: `/assests/20.jpg`,
            text: "Groom Wear"
        },
        {
            img: `/assests/21.jpg`,
            text: "Decorators"
        }
      
       
    

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
                            <h2 className='item-text'>{item.text}</h2>
                        </div>
                    ))}

                </Carousel>

            </div>



    )


}

export default Cards;