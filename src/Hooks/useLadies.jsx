import React, { useEffect, useState } from 'react';

const useLadies = () => {
    const [ladies, setLadies] = useState([]);
    useEffect( ()=> {
        fetch("ladiesDB.json")
        .then(res=>res.json())
        .then(data=> setLadies(data))
    },[])

    

    return [ladies, setLadies]
    
};

export default useLadies;