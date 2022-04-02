import React, { useEffect, useState } from 'react';

const useShirt = () => {
    const [shirts, setShirts] = useState([]);
    useEffect( ()=>{
        fetch("men-shirtDB.json")
        .then(res => res.json())
        .then(data => setShirts(data))
    },[])
    return [shirts, setShirts];
};

export default useShirt;