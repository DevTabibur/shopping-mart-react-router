import React, { useEffect, useState } from 'react';

const useKids = () => {
    const [kids, setKids] = useState([]);
    useEffect( ()=>{
        fetch("babyDB.json")
        .then(res=> res.json())
        .then(data=>setKids(data))
    },[])
    return [kids, setKids]
};

export default useKids;