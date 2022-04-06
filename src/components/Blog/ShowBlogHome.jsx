import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import "./ShowBlogHome.css";

const ShowBlogHome = ({ blog }) => {

  return (
    <>
      <div className="col-md-4 m-0 p-0">
        <Card className="card" style={{ width: "22rem"}}>
          <Card.Img variant="top" src={blog.imageURL} />
          <Card.Body>
            <Card.Title>
            {blog.title}
            <h5>{blog.admin}</h5>
            </Card.Title>
            <Card.Text>
            {blog.blog > 400 ? blog.blog : blog.blog.slice(0, 130)}
            </Card.Text>
            <Button variant="secondary">read more</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ShowBlogHome;
