import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './SwiperHome.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Button, Card, CardImg } from "react-bootstrap";

const SwiperHome = () => {
  const [swiperProduct, setSwiperProduct] =  useState([]);
  useEffect(, [])
  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-md-12">
        <h2 className="d-flex justify-content-center my-4">Latest products</h2>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {/* <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="overflow__img"
              /> */}
              <Card>
                <Card.Img variant="top" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="overflow__img"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperHome;
