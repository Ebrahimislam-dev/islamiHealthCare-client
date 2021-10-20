import Button from '@restart/ui/esm/Button';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';





const Register = () => {


    const { handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleRegButton,
        toggleLogin,
        handleResetPassword,
        processLogin,
        isLogin,
        singWithGoogle,
        error } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/'
    console.log('came form', location.state?.from)

    const handleEmailLogin = () => {
        processLogin()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <div className="mx-5">
            <form onSubmit={handleRegistration} className="bg-light shadow-lg mt-5">
                <h3 className=" heading">Please <span className="text-danger">Login or Register</span></h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <Link to="/login">Login with Google</Link>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-danger px-3 py-2 me-5">
                    Login
                </button>
                <button type="submit" className="btn btn-danger px-3 py-2 me-5">
                    Register
                </button>


            </form>
            <br />


            <Button className=" px-3 py-2 me-5" variant="dark" onClick={singWithGoogle}></Button>
            <br />
            <br />
        </div>
    );
};

export default Register;