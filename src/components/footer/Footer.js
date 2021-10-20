import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"

import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhoneVolume,
    faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <div className="container-fluid bg-dark text-white-50">

                <div className="container">
                    <div className=" row">
                        {/* About colum */}
                        <div className="col-md-3">
                            <div className="mt-5 text-start">
                                <h3>Islami Health Care</h3>
                                <div className="d-flex  text-center ">
                                    <div className=" me-3 fs-3 text-danger">
                                        <Link to="/contact" className="text-danger">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </Link>

                                    </div>
                                    <div className="me-3 fs-3">
                                        <Link to="/contact" className="text-danger">
                                            <FontAwesomeIcon icon={faFacebookSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3">
                                        <Link to="/contact" className="text-danger">
                                            <FontAwesomeIcon icon={faInstagramSquare} />
                                        </Link>

                                    </div>

                                    <div className=" me-3 fs-3">
                                        <Link to="/about" className="text-danger">
                                            <FontAwesomeIcon icon={faTwitterSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3">
                                        <Link to="/about" className="text-danger">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </Link>

                                    </div>

                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        Islami health care is one of the leading private healthcare providers in Bangladesh having an impressive 'Reach', providing superior quality diagnostics services to its patients through a very efficient network of outreach centers and collection points located strategically across the greater Chittagong division.
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>IHCC © . All rights reserved.</small>
                                    <br />
                                    <small>Developed by Ebrahim Islam.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-5">
                            <div className="footer-menu-container">
                                <ul>
                                    <h3 className="d-flex justify-content-around">
                                        <i class="fas fa-ambulance"></i>
                                        <p>EMERGENCY</p>
                                    </h3>
                                    <li className="footer-menu d-flex justify-content-between">
                                        <div>
                                            <i class="fas fa-phone-volume"></i>
                                        </div>
                                        <div>
                                            Call:  02 – 58311740
                                        </div>
                                    </li>
                                    <li className="footer-menu d-flex justify-content-between">
                                        <div>
                                            <i class="fas fa-headset"></i>
                                        </div>
                                        <div>
                                            Hotline: +8801938-881110
                                        </div>
                                    </li>




                                </ul>
                            </div>
                        </div>
                        {/* Router/Nav column */}
                        <div className="col-md-2 mt-5">


                            <div className="footer-menu-container">
                                <ul>
                                    <h4 >
                                        Quick Links

                                    </h4>
                                    <li className="footer-menu">
                                        <Link to="/home" className="footer-menu text-decoration-none">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/services" className="footer-menu text-decoration-none">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/doctors" className="footer-menu text-decoration-none">
                                            Doctor's
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/about" className="footer-menu text-decoration-none">
                                            About us
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/faqs" className="footer-menu text-decoration-none">
                                            FAQ's
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>

                        {/* footer Service column */}
                        <div className="col-md-2 mt-5">


                            <div className="footer-menu-container">
                                <ul>
                                    <h4 >
                                        Our Services

                                    </h4>
                                    <li className="footer-menu">
                                        <Link to="/home" className="footer-menu text-decoration-none">
                                            ICU Patient Care
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/services" className="footer-menu text-decoration-none">
                                            Neuro Patient Care
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/about" className="footer-menu text-decoration-none">
                                            Doctor Service
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/contact" className="footer-menu text-decoration-none">
                                            Maternity Care
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        {/* Contact column */}
                        <div className="col-md-3">
                            <div className="mt-5">
                                <h3>Contact Us</h3>
                                <br />
                                <input
                                    className=" bg-light py-1 px-5 border-danger text-start "
                                    type="text"
                                    placeholder="Enter your Email"
                                />
                                <br />
                                <button className="btn btn-danger px-4 fw-bold mt-1">Submit</button>
                                <div className="mt-3">
                                    <h5>
                                        <Link to="/about" className="text-danger">
                                            <FontAwesomeIcon icon={faPhoneVolume} />
                                        </Link>
                                        Phone: +8801727-264178, +8801819-941450</h5>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        <Link className="text-danger">
                                            <i class="fas fa-info-circle"></i>
                                        </Link>
                                        Support: support@patientcarehomeservicebd.com</p>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        <Link to="/about" className="text-danger">
                                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                                        </Link>
                                        119, K.B. Fazlul Kader Road, Chittagong
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
