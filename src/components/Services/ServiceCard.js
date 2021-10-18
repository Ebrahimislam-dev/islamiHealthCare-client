import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Services.css'

const ServiceCard = (props) => {
    // destructuring
    const { servicename, aboutservice, img, extraDetails } = props.service;

    return (
        <div className="container-fluid">
            {/* Services card dynamically */}
            <div className="text-start container " >
                <Col>
                    <Card className="card-body mb-5  h-100 ">
                        <Card.Img variant="top card-img " src={img} />
                        <Card.Body >
                            <Card.Title className="text-center fw-bold">{servicename}</Card.Title>
                            <Card.Text>
                                <h5>
                                    About Service: <small className="fs-6 text-start"> {aboutservice}</small>
                                </h5>


                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn btn-outline-dark px-5">Book This Service</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default ServiceCard;