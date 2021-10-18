import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import "./Header.css"


const Header = () => {
    // active style for navbar
    const active = {
        fontWeight: "bold",
        color: "red",
        borderBlockStart: "2px solid #ff0000",
        borderBlockEnd: "2px solid #ff0000"
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link to='/home' activeStyle={active}>Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <NavLink to='/home' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Home
                        </NavLink>
                        <NavLink to='/about' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            About-Us
                        </NavLink>
                        <NavLink to='/contact' activeStyle={active} className='nav-item text-white text-decoration-none'>
                            Contact-Us
                        </NavLink>
                        <NavLink to='/services' activeStyle={active} className=' text-white text-decoration-none'>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item className="bg-dark text-white-50" href="#action/3.1">ULTRASONOGRAPHY</NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark text-white-50" href="#action/3.1">CT SCAN</NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark text-white-50" href="#action/3.1">CARDIOLOGY</NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark text-white-50" href="#action/3.1">MRI</NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark text-white-50" href="#action/3.1">Neurological</NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark text-white-50" href="#action/3.1">Digital Xray</NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark text-white-50" href="#action/3.1">HOME SERVICE</NavDropdown.Item>
                                <NavDropdown.Item className="bg-dark text-white-50" href="#action/3.1">ICU</NavDropdown.Item>

                            </NavDropdown>
                        </NavLink>


                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                           LogIN
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >





    );
};

export default Header;