import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import CarouselCard from "../Carousel/CarouselCard";
import Counter from "../Counter/Counter";
import { MyContext } from "../../App";
import SwiperHome from "../SwiperHome/SwiperHome";
import Cart from "../Cart/Cart";
import ShowBlogHome from "../Blog/ShowBlogHome";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { AiOutlineHeart, AiFillEye, AiOutlineShoppingCart } from 'react-icons/ai';
import BannerBottom from "../BannerBottom/BannerBottom";

const Home = () => {
  const [products, setProducts, blogs, setBlogs, kids, setKids] =
    useContext(MyContext);
  const sliceProducts = products.slice(0, 8);
  const sliceBlogs = blogs.slice(0, 3);

  const overview = ()=>{
    alert()
  }

  return (
    <>
      <CarouselCard />
      <BannerBottom/>
      <Counter />
      {/* <SwiperHome /> */}

      <div className="container  pb-5">
        <div className="row gx-5 gy-3">
          <div className="section-title d-flex justify-content-center my-4">
            <h2>Latest Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              dolor quibusdam veritatis nihil possimus soluta aliquid modi omnis
              vel quis.
            </p>
          </div>

          {sliceProducts.map((pd) => (
            <ShowProductHome key={pd.id} pd={pd} />
          ))}
          <Button className="my-5 w-50 mx-auto" variant="success">Load More</Button>
        </div>
      </div>

      
      <div className="container my-5">
        <div className="row">
        <div className="section-title d-flex justify-content-center my-4">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              dolor quibusdam veritatis nihil possimus soluta aliquid modi omnis
              vel quis.
            </p>
          </div>
          {
            sliceBlogs.map(blog => 
            <ShowBlogHome
              key={blog._id}
              blog={blog}
            />
            )
          }
        </div>
      </div>
    </>
  );
};

const ShowProductHome = ({ pd }) => {
  return (
    <div className="col-md-3">
          <div className="card-box">
            <img
              className="card-img"
              src={pd.image}
              alt=""
            />
            <div className="info">
              <Button variant="danger" className="mb-5 mt-0"><AiOutlineHeart/></Button>
              <Button variant="danger" className="d-block w-75 my-3 mx-auto info-btn">
                View <AiFillEye/>
              </Button>
              <Button variant="danger" className="d-block w-75 my-3 mx-auto info-btn">
                Cart <AiOutlineShoppingCart/>
              </Button>
            </div>
          </div>
          <p className="mt-3">Price: ${pd.price}</p>
        </div>
  );
};



export default Home;
