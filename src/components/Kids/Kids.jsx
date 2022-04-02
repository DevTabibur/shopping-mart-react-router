import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useKids from '../../Hooks/useKids';
import './Kids.css'

const Kids = () => {
    const [kids, setKids] = useKids();

    return (
        <div className="my-4">
          <h2 className="text-center mx-auto my-5">Total Kids Dresses: {kids.length}</h2>
          <div className="container">
            <div className="row d-flex justify-align-center">
              {kids.map((kid) => (
                <ShowKid key={kid.id} kid={kid} />
              ))}
            </div>
          </div>
        </div>
      );
};

const ShowKid = ({kid}) =>{

    // console.log('props', kid);
  return (
    <div className=" col-md-4 d-flex justify-content-center">
      <Card className="column" style={{ width: "22rem", height: "27rem", marginBottom:"40px" }}>
        <Card.Img className="img" variant="top" src={kid.image} />
        <Card.Body>
          <Card.Title><h5>Name: {kid.name}</h5></Card.Title>
          <h6>Price: ${kid.price}</h6>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );

}

export default Kids;