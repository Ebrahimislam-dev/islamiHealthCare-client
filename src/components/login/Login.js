import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {

    const {
        signInUsingGoogle,
        error,
        handleNameChange,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        isLogin,
        processLogin } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    // Redirect come from state
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    // Rediretc to home
    const handleEmailLogin = () => {
        processLogin()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <div className="card mb-3" style={{ "max-width": "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/Zh1CtZt/online-registration-sign-up-with-man-sitting-near-smartphone-268404-95.jpg" alt="" className="img-fluid rounded-start h-75" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="heading fw-bolder fst-italic mt-5 mb-5">{isLogin ? 'Please' : 'Create a'}   <span style={{ color: 'lightblue' }}>  {isLogin ? 'Login' : 'new account here'} </span>   </h1>

                            <div>
                                {/* Registration with email and password */}
                                <Form onSubmit={handleRegistration}>

                                    {!isLogin && <div className="row mb-3">
                                        <label htmlFor="inputName" className="col-sm-2 col-form-label fs-5">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                                        </div>
                                    </div>}
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label className="fs-5" column sm={2}>
                                            Email
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                        <Form.Label className="fs-5" column sm={2}>
                                            Password
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group onChange={toggleLogin} as={Row} className="mb-3" controlId="formHorizontalCheck">
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Form.Check className="fs-5 text-info fw-bold" label="Already Registerd ?" />
                                        </Col>
                                    </Form.Group>
                                    <div className="row mb-3 text-danger">{error}</div>
                                    {/* google login */}
                                    <Form.Group as={Row} >
                                        <Col className="mb-3 d-md-flex align-items-center" sm={{ span: 10, offset: 2 }}>
                                            <Button onClick={handleEmailLogin} type="submit" className="btn btn-success border-5 mb-3 mt-3 fs-5 fst-italic px-5 py-2  text-center">{isLogin ? 'Login' : 'Register'} <i class="fas fa-sign-in-alt"></i>
                                            </Button>
                                            <h4 className="fst-italic ms-2 me-2">Or Log in Using</h4>
                                            <Button
                                                className="btn btn-danger border-5 mb-3 mt-3 fs-5 fst-italic px-5 py-2  text-center"
                                                onClick={handleGoogleLogin}
                                            >
                                                Google  <i className="fab fa-google me-3 fs-4"></i>
                                            </Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;