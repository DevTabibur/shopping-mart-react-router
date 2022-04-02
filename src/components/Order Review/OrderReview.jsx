import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const OrderReview = (props) => {
    const [carts, setCarts] = useState([]);

    const resetAll = ()=>{
        setCarts([]);
    }
    
    return (
        <div>
            <h2>This is Order Review Page</h2>
            <div className="cart-box">
                <Button onClick={resetAll} variant='danger'>Reset All</Button>
            </div>
        </div>
    );
};

export default OrderReview;