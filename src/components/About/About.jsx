import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';


const About = () => {
    return (
        <>
        <div className="wrapper">
                <div className="card-box">
                    <img className='card-img' src="https://i.ibb.co/XsxvXSJ/t-shirt-3.webp" alt="" />
                    <div className="info">
                    <Button className='mb-5 mt-0'>WishCart</Button>
                        <Button className='d-block w-75 my-3 mx-auto info-btn'>Quick View</Button>
                        <Button className='d-block w-75 my-3 mx-auto info-btn'>Quick Shop</Button>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default About;