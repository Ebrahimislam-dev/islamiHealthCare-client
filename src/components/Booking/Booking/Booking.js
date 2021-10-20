import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';




const Booking = () => {
    const { servicesId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/islamihealth.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setDetails(data)
            });
    }, [])
    //filter from json datas
    const singleService = details.filter(service => service.key === servicesId);
    // console.log(singleService);
    return (

        <div>
            <div className="container-fluid  mb-1">
                <h1 className="heading mb-5 mt-1">
                    <span className="text-danger"> {singleService[0]?.servicename} </span>
                </h1>
                <Row xs={1} md={2} className="g-3 ">
                    <div className="container-fluid">

                        <div className="container" >
                            <Col>
                                <Card className=" mb-5">
                                    <Card.Img variant="top" src={singleService[0]?.img} />
                                    <Card.Body>
                                        <Card.Title>{singleService[0]?.servicename}</Card.Title>
                                        <Card.Text>
                                            <h5>
                                                About Service: <small className="pb-3 fs-6 text-start"> {singleService[0]?.aboutservice}</small>
                                            </h5>
                                            <p>
                                                {singleService[0]?.extraDetails}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to="/services">
                                            <button className="btn btn-outline-dark px-5 border-2 rounded-4 fw-bold fst-italic">Book Another Service</button>
                                        </Link>
                                        <Link to="/appointments">
                                            <button className="btn btn-outline-dark ms-3 px-5 border-2 rounded-4 fw-bold fst-italic">Confirm Booking</button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </Row>
            </div>
        </div>



    );
};

export default Booking;