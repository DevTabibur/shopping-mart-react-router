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
  const [products, setProducts, blogs, setBlogs,  kids, setKids] = useContext(MyContext);
  console.log(products.length);
  return (
    <>
      {/* <CarouselCard />
      <Counter />
      <SwiperHome /> */}
      <ShowProductHome
        key={products.id}
        products={products}
      />
    </>
  );
};


const ShowProductHome = ({products}) => {
  const sliceProducts = products.slice(0, 8)
  console.log(sliceProducts);
  return (
    <>
    <div className="container py-5">
      <div className="row">
      <div className="section-title d-flex justify-content-center my-4">
        <h2>Latest Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor quibusdam veritatis nihil possimus soluta aliquid modi omnis vel quis.</p>
      </div>
        <div className="col-md-3">
          {
            sliceProducts.map(pd => 
            <h2>{pd.name}</h2>
            )
          }
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
      </div>
    </div>
      
    </>
  );
};





export default Home;
