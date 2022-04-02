// @ts-nocheck
import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import useShirt from "../../Hooks/useShirt";
import './Shirt.css';

const Shirt = () => {
  const [shirts, setShirts] = useShirt();
  return (
    <div className="my-4">
      <h2 className="text-center mx-auto my-5">Total shirts: {shirts.length}</h2>
      <div className="container">
        <div className="row d-flex justify-align-center">
          {shirts.map((shirt) => (
            <ShowShirt key={shirt.id} shirt={shirt} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ShowShirt = ({ shirt }) => {
  // console.log('props', shirt);
  return (
    <div className=" col-md-4 d-flex justify-content-center">
      <Card className="column" style={{ width: "22rem", height: "27rem", marginBottom:"40px" }}>
        <Card.Img className="img" variant="top" src={shirt.image} />
        <Card.Body>
          <Card.Title><h5>Name: {shirt.name}</h5></Card.Title>
          <h6>Price: ${shirt.price}</h6>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shirt;
