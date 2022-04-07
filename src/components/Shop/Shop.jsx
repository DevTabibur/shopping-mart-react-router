import "bootstrap/dist/css/bootstrap.min.css";

import React, { useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../App";

const Shop = () => {
    const [products, setProducts, blogs, setBlogs,  kids, setKids] = useContext(MyContext);
    return (
        <div>
            <h2>Shop Page{products.length}</h2>
        </div>
    );
};

export default Shop;