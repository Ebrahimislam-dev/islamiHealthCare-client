import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleNameChange, name } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })

    }


    return (
        <div className="d-flex align-items-center justify-content-center container-fluid">
            <div className="container">
                <div className="text-center">
                    <h2 className="heading"> PLEASE <span className="text-danger">LOG IN</span> </h2>
                    <form className="row g-3 ms-5 justify-content-sm-start justify-content-md-center">
                        <div className="d-flex justify-content-evenly col-md-8 ">
                            <div><label for="inputEmail" className="form-label me-md-5 fs-3">Email: </label></div>
                            <div>
                                <input type="email" className="form-control ms-md-5" id="inputEmail" placeholder="Enter A Valid Email" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center col-md-8">
                            <div>  <label htmlFor="password" className="form-label me-5 fs-3">Password</label></div>
                            <div><input type="password" className="form-control" id="inputPassword" placeholder="Enter Your Password" /> </div>
                        </div>


                        <div className="col-8 align-items-center">
                            <button onClick={handleRegistration} type="submit" className="btn btn-danger border-5 mb-3 mt-3 fs-5 fst-italic px-5 text-center">Login</button>
                        </div>
                    </form>
                    <p>New To Islamic Health Care? <Link to="/register">Create an Account</Link></p>
                </div>
                <div className="text-center align-items-center">
                    <h2>-------------------------OR Log in Using-------------------------</h2>
                    <button

                        className="btn btn-danger border-5 mb-3 mt-3 fs-5 fst-italic px-5 py-2  text-center"
                        onClick={handleGoogleLogin}
                    >
                        <div></div> <div></div>
                        <i className="fab fa-google me-3 fs-4"></i>  Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;