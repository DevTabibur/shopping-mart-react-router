import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import CarouselCard from "../Carousel/CarouselCard";
import Counter from "../Counter/Counter";
import { MyContext } from "../../App";
import SwiperHome from "../SwiperHome/SwiperHome";
import Cart from "../Cart/Cart";
import ShowBlogHome from '../Blog/ShowBlogHome';

const Home = () => {
  const [blogs] = useContext(MyContext);
  return (
    <>
      {/* <CarouselCard />
      <Counter />
      <SwiperHome /> */}
      {/* <ShowBlogHome blog={blogs}/> */}
    </>
  );
};

export default Home;
