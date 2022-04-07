import React, { useContext } from 'react';
import { MyContext } from '../../App';

const Blog = () => {
    const [products, setProducts, blogs, setBlogs,  kids, setKids] = useContext(MyContext);
    return (
        <div>
            <h1>Blog website{blogs.length}</h1>
        </div>
    );
};

export default Blog;