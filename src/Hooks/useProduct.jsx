import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [ product, setProduct] = useState([]);
    useEffect( ()=>{
        fetch("all-product-db.json")
        .then(res=>res.json())
        .then(data=> setProduct(data))
    }, [])
    return [ product, setProduct]
};

export default useProduct;