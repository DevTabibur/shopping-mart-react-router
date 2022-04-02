// @ts-nocheck
import React, { useState } from "react";
import { Button, Card, CardImg, NavItem } from "react-bootstrap";
import useLadies from "../../Hooks/useLadies";
import "./Women.css";
import { BsCart2, BsHeart } from "react-icons/bs";

const Women = () => {
  const [ladies, setLadies] = useLadies();

  const handleAddToCart =(lady)=>{
    // const exists = lady.find(lady.id === item.id)
    // console.log(exists);
    const newLadies=[...ladies, lady]
    setLadies(newLadies);
  }

  return (
    <div className="my-4">
      <h2 className="text-center mx-auto my-5">
      Choose Your Dresses
      </h2>
      <div className="container">
        <div className="row d-flex justify-align-center">
          {ladies.map((lady) => (
            <ShowWomen key={lady.id} lady={lady} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ShowWomen = ({ lady, handleAddToCart }) => {
  
  return (
    <>
      <div className="col-md-4 d-flex justify-content-center">
      <Card
        className="column"
        style={{ width: "22rem", height: "27rem", marginBottom: "40px" }}
      >
        <Card.Img className="img" variant="top" src={lady.image} />
        <Card.Body>
          <Card.Title>
            <h5>Name: {lady.name}</h5>
          </Card.Title>
          <h6>Price: ${lady.price}</h6>
          <Button onClick={()=>handleAddToCart(lady)} variant="success">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default Women;
