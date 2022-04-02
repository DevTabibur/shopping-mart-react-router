import React from 'react';
import ErrorImg from '../../images/404.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="error-img-div d-flex justify-content-center">
                        <img className='error-img' src={ErrorImg} alt="error__img" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="error-page-info d-flex justify-content-cente align-items-center">
                        <h2>404</h2>
                        <h2>ERROR</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;