import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/favicon.png'

import "./Header.css"


const Header = () => {
    const { user, logOut } = useAuth()
    // active style for navbar
    const active = {
        fontWeight: "bold",
        color: "red",
        borderBlockStart: "2px solid #ff0000",
        borderBlockEnd: "2px solid #ff0000"
    };
    return (
        <Navbar className="p-0 m-0" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="p-0 m-0">
                <Navbar.Brand className="d-flex align-items-center"><Link to="/home"><img className="w-50" src={logo} alt="" /></Link>
                    {
                        user.email && <div className="d-flex align-items-center">
                            <img className=" w-25 rounded-circle" src={user.photoURL} alt="" />
                            <span className='nav-item text-white text-decoration-none fs-6 fst-italic'>{user.displayName}</span>

                        </div>
                    }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to='/home' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Home
                        </NavLink>
                        <NavLink to='/services' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Services
                        </NavLink>

                        <NavLink to='/doctors' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Doctors
                        </NavLink>
                        <NavLink to='/appointments' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Appointments
                        </NavLink>
                        <NavLink to='/about' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            About-Us
                        </NavLink>
                        <NavLink to='/contact' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Contact-Us
                        </NavLink>
                        <NavLink to='/faqs' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            FAQ's
                        </NavLink>



                    </Nav>
                    <Nav>

                        {
                            user.email ?

                                <NavLink activeStyle={active} className='nav-item text-white text-decoration-none' onClick={logOut} to="/login">LogOut <i class="fas fa-sign-out-alt"></i></NavLink>
                                :

                                <NavLink activeStyle={active} className='nav-item text-white text-decoration-none' to="/login">Log in <i class="fas fa-sign-in-alt"></i></NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >





    );
};

export default Header;