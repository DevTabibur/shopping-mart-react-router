import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../App";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs] = useContext(MyContext);
  console.log(id);

  const blog = blogs.find((blog) => blog._id == id);
  console.log(blog);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            
            <h2>{blog.title}</h2>
            <img src={blog.imageURL} alt="blog__img" />
            <h6>{blog.admin}</h6>
            <h3>{blog.imageName}</h3>
            <hr />
            <p>{blog.blog}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
