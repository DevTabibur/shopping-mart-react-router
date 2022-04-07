// @ts-nocheck
import React, { useState } from "react";
import { Button, Card, CardImg, Modal } from "react-bootstrap";
import useShirt from "../../Hooks/useShirt";
import "./Shirt.css";


const Shirt = () => {
  const [shirts, setShirts] = useShirt();
  return (
    <div className="my-4">
      <h2 className="text-center mx-auto my-5">
        Total shirts: {shirts.length}
      </h2>
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddToCart = () => {
    alert();
  };
  return (
    <div className=" col-md-4 d-flex justify-content-center">
      <Card
        className="column"
        style={{ width: "22rem", height: "27rem", marginBottom: "40px" }}
      >
        <Card.Img className="img" variant="top" src={shirt.image} />
        <Card.Body>
          <Card.Title>
            <h5>Name: {shirt.name}</h5>
          </Card.Title>
          <h6>Price: ${shirt.price}</h6>
          <Button variant="primary" onClick={handleShow}>
            Add to Cart
          </Button>

          <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title className="d-flex justify-content-center">
                <img className="w-50 mr-2" src={shirt.image} alt="shirt__img" />
                <h4 className="ml-3 w-50 d-flex justify-content-center align-items-center">
                  {shirt.name}
                </h4>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <h6>Price: ${shirt.price}</h6>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shirt;
