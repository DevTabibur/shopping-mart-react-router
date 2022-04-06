import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import CarouselCard from "../Carousel/CarouselCard";
import Counter from "../Counter/Counter";
import { MyContext } from "../../App";
import ShowBlogHome from "../Blog/ShowBlogHome";

const Home = () => {
  
  const [blogs] = useContext(MyContext);
  const sliceBlogs = blogs.slice(0, 3);
  return (
    <>
      {/* <CarouselCard/>
      <Counter/>
      <div className="container py-5">
      <div className="row">
      <h2 className="mx-auto d-flex justify-content-center mb-5">Latest From Blog</h2>
      {
        sliceBlogs.map(blog => <ShowBlogHome
          key={blog._id}
          blog={blog}
        />)
      }
      </div>
    </div> */}

    <h2>Latest products</h2>
      
      
    </>
  );
};





export default Home;
