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

const Home = () => {
  const [products, setProducts, blogs, setBlogs, kids, setKids] =
    useContext(MyContext);
  const sliceProducts = products.slice(0, 8);
  const sliceBlogs = blogs.slice(0, 3);
  console.log(sliceBlogs);

  return (
    <>
      <CarouselCard />
      <Counter />
      <SwiperHome />

      <div className="container  pb-5">
        <div className="row">
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

      {/* Blogs on Home */}
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
    <div className="col-md-3 gy-4 d-flex justify-content-center">
      <Card style={{width: "16rem"}}>
        <Card.Img variant="top" src={pd.image} />
        <Card.Body>
          <Card.Title>{pd.name}</Card.Title>
          <Card.Text>
            price: ${pd.price}
          </Card.Text>
          <Button className="w-100" variant="success">SHOW</Button>
        </Card.Body>
      </Card>
    </div>
  );
};


// const ShowBlogHome = ({blog}) => {
//   return (
//     <div>
      
//     </div>
//   );
// };


export default Home;
