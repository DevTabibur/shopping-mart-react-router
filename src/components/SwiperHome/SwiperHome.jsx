import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SwiperHome.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Button, Card, CardImg } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SwiperHome = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid py-5 mb-3">
      <div className="row">
      <h2 className="d-flex justify-content-center my-3">Latest Products</h2>
        <div className="col-md-12">
          <div className="swiper-bg">
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
              <SwiperSlide className="swiper-slide-parent">
                <img
                  src="https://i.ibb.co/dDydDhq/boys-kids.jpg"
                  alt="boys-kids"
                />
                <div className="swiper-info my-3">
                  <h2>Baby Dress</h2>
                  <Button
                    onClick={() => navigate("/kids")}
                    className="d-flex justify-content-center w-100"
                    variant="danger"
                  >
                    Go to the Product
                  </Button>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide-parent">
                <img
                  src="https://i.ibb.co/VqLfWWL/boys-kids-1.jpg"
                  alt="boys-kids-1"
                />
                <div className="swiper-info my-3">
                  <h2>Baby Dress-1</h2>
                  <Button
                    onClick={() => navigate("/kids")}
                    className="d-flex justify-content-center w-100"
                    variant="danger"
                  >
                    Go to the Product
                  </Button>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide-parent">
                <img
                  src="https://i.ibb.co/S0GwsZ2/five-hundred-girls-3.jpg"
                  alt="girls-dress-1"
                />
                <div className="swiper-info my-3">
                  <h2>Girl Dress</h2>
                  <Button
                    onClick={() => navigate("/women")}
                    className="d-flex justify-content-center w-100"
                    variant="danger"
                  >
                    Go to the Product
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-parent">
                <img
                  src="https://i.ibb.co/xX9KMYJ/five-hundred-girls-4.jpg"
                  alt="girls-dress-1"
                />
                <div className="swiper-info my-3">
                  <h2>Girls Dress-1</h2>
                  <Button
                    onClick={() => navigate("/women")}
                    className="d-flex justify-content-center w-100"
                    variant="danger"
                  >
                    Go to the Product
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-parent">
                <img
                  src="https://i.ibb.co/6Wq9XdX/t-shirt-7.webp"
                  alt="t-shirt-7"
                />
                <div className="swiper-info my-3">
                  <h2>T-Shirt Dress</h2>
                  <Button
                    onClick={() => navigate("/shirt")}
                    className="d-flex justify-content-center w-100"
                    variant="danger"
                  >
                    Go to the Product
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-parent">
                <img
                  src="https://i.ibb.co/2NDYvHT/t-shirt-8.webp"
                  alt="t-shirt-8"
                />
                <div className="swiper-info my-3">
                  <h2>T-Shirt Dress-1</h2>
                  <Button
                    onClick={() => navigate("/shirt")}
                    className="d-flex justify-content-center w-100"
                    variant="danger"
                  >
                    Go to the Product
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-parent">
                <img
                  src="https://i.ibb.co/1KgdkfJ/two-hundred.jpg"
                  alt="men-shirt"
                />
                <div className="swiper-info my-3">
                  <h2>Men Shirt Dress</h2>
                  <Button
                    onClick={() => navigate("/men")}
                    className="d-flex justify-content-center w-100"
                    variant="danger"
                  >
                    Go to the Product
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-parent">
                <img
                  src="https://i.ibb.co/Bqp9KrT/four-hundred-men.jpg"
                  alt="men-shirt"
                />
                <div className="swiper-info my-3">
                  <h2>Men Shirt Dress-1</h2>
                  <Button
                    onClick={() => navigate("/men")}
                    className="d-flex justify-content-center w-100"
                    variant="danger"
                  >
                    Go to the Product
                  </Button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperHome;
