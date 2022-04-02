// @ts-nocheck
import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import useLadies from "../../Hooks/useLadies";
import './Women.css';

const Women = () => {
  const [ladies, setLadies] = useLadies();
  return (
    <div className="my-4">
      <h2 className="text-center mx-auto my-5">Total Ladies Dresses: {ladies.length}</h2>
      <div className="container">
        <div className="row d-flex justify-align-center">
          {ladies.map((lady) => (
            <ShowWomen key={lady.id} lady={lady} />
          ))}
        </div>
      </div>
    </div>
  );
};


const ShowWomen = ({lady}) =>{
    // console.log(lady);
    return (
        <div className=" col-md-4 d-flex justify-content-center">
          <Card className="column" style={{ width: "22rem", height: "27rem", marginBottom:"40px" }}>
            <Card.Img className="img" variant="top" src={lady.image} />
            <Card.Body>
              <Card.Title><h5>Name: {lady.name}</h5></Card.Title>
              <h6>Price: ${lady.price}</h6>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      );
}


export default Women;
