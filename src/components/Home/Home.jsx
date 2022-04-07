import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import CarouselCard from "../Carousel/CarouselCard";
import Counter from "../Counter/Counter";
import { MyContext } from "../../App";
import ShowBlogHome from "../Blog/ShowBlogHome";
import SwiperHome from "../SwiperHome/SwiperHome";

const Home = () => {
  
  const [blogs] = useContext(MyContext);
  const sliceBlogs = blogs.slice(0, 3);
  return (
    <>
      <CarouselCard/>
      <Counter/>
    <SwiperHome/>
      
      
    </>
  );
};





export default Home;
