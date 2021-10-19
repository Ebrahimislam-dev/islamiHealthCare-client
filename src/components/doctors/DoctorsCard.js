import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctors.css'
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,

    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorsCard = (props) => {
    // destructuring
    const { drName, designation, img } = props.doctor;

    return (
        <div className="container-fluid">
            {/* Services card dynamically */}
            <div className="text-start container " >
                <Col>
                    <Card className="card-body mb-5  h-100 ">

                        <Card.Img variant="top dr-img" src={img} />

                        <Card.Body>
                            <Card.Title className="text-center fw-bold mt-5">{drName}</Card.Title>
                            <Card.Text>
                                <h5>
                                    Designation: <small className="pb-3 fs-6 text-start"> {designation}</small>
                                </h5>
                                <h5>Contact To Dr by </h5>


                                <div className="d-flex  text-center  ">
                                    <div className=" me-3 fs-3  icon-color">
                                        <Link to="/*" className=" icon-color">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </Link>

                                    </div>
                                    <div className="me-3 fs-3">
                                        <Link to="/*" className=" icon-color">
                                            <FontAwesomeIcon icon={faFacebookSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3">
                                        <Link to="/*" className=" icon-color">
                                            <FontAwesomeIcon icon={faInstagramSquare} />
                                        </Link>

                                    </div>

                                    <div className=" me-3 fs-3">
                                        <Link to="/*" className=" icon-color">
                                            <FontAwesomeIcon icon={faTwitterSquare} />
                                        </Link>

                                    </div>


                                </div>

                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default DoctorsCard;