import React from 'react';
import { Button, Carousel } from "react-bootstrap";


const CarouselCard = () => {
    return (
        <div>
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0326/6517/4152/files/Slider_1_1950x.jpg?v=1645154694"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Beautiful Baby Mobile Shop</h3>
            <p>Handmade with Love</p>
            <Button>SEE THE COLLECTION</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0326/6517/4152/files/Slider_2_1950x.jpg?v=1645154778"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Dress Up for Spring</h3>
            <p>A Luxury Welcome to the World!</p>
            <Button>SEE THE COLLECTION</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default CarouselCard;