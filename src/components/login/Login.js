import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
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



                        <div className="col-8 align-items-center">
                            <button type="submit" className="btn btn-danger border-5 mb-3 mt-3 fs-5 fst-italic px-5"><Link className="  text-white text-decoration-none"  to="/register">Login With Email and Password</Link> </button>
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