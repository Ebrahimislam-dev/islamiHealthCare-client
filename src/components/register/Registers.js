import React from 'react';
// import loginPic from '../../../../../images/login.jpg'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Register = () => {

    const { signInUsingGoogle, error, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin, handleResetPassword, isLogin, processLogin } = useAuth()




    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    // console.log('came form', location.state?.from)
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })

    }

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
                        {/* <img src={loginPic} alt="" className="img-fluid rounded-start" /> */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title fw-bolder mt-5">Create a<span style={{ color: 'lightblue' }}> new account here</span></h1>
                            <div>
                                <Form onSubmit={handleRegistration}>
                                    <h3 className="text-primary text-center mt-3 mb-5">{isLogin ? 'Login' : 'Register'}</h3>
                                    {!isLogin && <div className="row mb-3">
                                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                                        </div>
                                    </div>}
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                            Email
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                        <Form.Label column sm={2}>
                                            Password
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group onChange={toggleLogin} as={Row} className="mb-3" controlId="formHorizontalCheck">
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Form.Check label="already registerd ?" />
                                        </Col>
                                    </Form.Group>
                                    <div className="row mb-3 text-danger">{error}</div>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Button onClick={handleEmailLogin} type="submit">{isLogin ? 'Login' : 'Register'}
                                            </Button>
                                            <br />
                                            <br />
                                            <Button className="mr-2" onClick={handleResetPassword} variant="success" size="md">
                                                Reset password
                                            </Button>
                                        </Col>
                                    </Form.Group>
                                </Form>

                            </div>
                            <div className="mt-3">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
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
            </div>
        </div>
    );
};

export default Register;