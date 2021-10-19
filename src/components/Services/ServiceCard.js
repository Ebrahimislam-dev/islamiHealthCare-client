import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const ServiceCard = ({ service }) => {

    // destructuring
    const { key, servicename, aboutservice, img } = service;
    // const history = useHistory();
    // const handleBooking = () => {
    //     history.push('/booking');
    // }
    return (
        <div className="container-fluid">
            {/* Services card dynamically */}
            <div className="text-start container " >
                <Col>
                    <Card className="cardsbody mb-5  h-100 ">
                        <Card.Img variant="top cardsimg" src={img} />
                        <Card.Body className="cardsbody" >
                            <Card.Title className="text-center fw-bold">{servicename}</Card.Title>
                            <Card.Text>
                                <h5>
                                    About Service: <small className="pb-3 fs-6 text-start"> {aboutservice}</small>
                                </h5>


                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/booking/${key}`}>
                                <button className="btn btn-outline-dark px-5 border-2 rounded-4 fw-bold fst-italic">Book {servicename.toLowerCase()}</button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default ServiceCard;