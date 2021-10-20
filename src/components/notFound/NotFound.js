import React from 'react';
import { Link } from 'react-router-dom';
import errormsg from '../../images/error.png'

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center row">
            
            <div className="col-4">
                <Link to="/home">
                    <button className="btn btn-danger px-0 px-md-2  py-0 py-md-2  ms-2"><i class="fas fa-home"></i>Back to Home</button>
                </Link>

            </div>
            <div className="container col-8">
                <img className="container w-50" src={errormsg} alt="" />
            </div>

        </div>
    );
};

export default NotFound;