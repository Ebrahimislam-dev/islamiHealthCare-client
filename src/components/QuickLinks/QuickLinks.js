import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import svg1 from '../../images/user-md-solid.svg'
import svg2 from '../../images/ambulance-solid.svg'
import svg3 from '../../images/calendar-alt-regular.svg'
const QuickLinks = () => {
    return (
        <div>
            <div className="container-fluid  mb-1">
                <h1 className="heading mb-5 mt-1">Quick
                    <span className="text-danger">Links</span>
                </h1>

                <CardGroup>
                    <Card style={{ backgroundColor: 'bisque' }} className="mb-5">

                        <Card.Body>
                            <Card.Img variant="top cardsimg " src={svg1} />
                            <Card.Title className="fs-2">Doctors Timetable</Card.Title>
                            <Card.Text>
                                <p className="fs-5 text-justyfy text-black-50">
                                    Doctors meet and talk with patients and caregivers to diagnose, manage and treat illnesses and injuries.
                                </p>
                                <Link to="/doctors">
                                    <button className="btn btn-outline-success px-5 border-2 rounded-4 fw-bold fst-italic">View Timetable <i class="fas fa-arrow-right"></i></button>
                                </Link>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ backgroundColor: '#ffafbd' }} className=" mb-5">

                        <Card.Body>
                            <Card.Img variant="top cardsimg " src={svg2} />
                            <Card.Title className="fs-2">Emergency Call</Card.Title>
                            <Card.Text>
                                <p className="fs-5 text-justyfy text-black-50">
                                    A doctor can work in any of several medical settings, such as private practices and hospitals as well as in teaching or medical research.
                                </p>
                                <Link to="/">
                                    <button className="btn btn-outline-danger px-5 border-2 rounded-4 fw-bold fst-italic"><i class="fas fa-phone-volume"></i> Call: 01832223310 </button>
                                </Link>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card style={{ backgroundColor: '#4ac29a' }} className=" mb-5">

                        <Card.Body>
                            <Card.Img variant="top cardsimg " src={svg3} />
                            <Card.Title className="fs-2">Make An Appointment</Card.Title>
                            <Card.Text>
                                <p className="fs-5 text-justyfy text-black-50">
                                    When it's necessary and appropriate, they also provide referrals for patients to see specialists.
                                </p>
                                <Link to="/appointments">
                                    <button className="btn btn-outline-dark px-5 border-2 rounded-4 fw-bold fst-italic">View Timetable <i class="fas fa-arrow-right"></i></button>
                                </Link>
                            </Card.Text>
                        </Card.Body>

                    </Card>

                </CardGroup>

            </div>
        </div>
        // <div>
        //     <div className="row">
        //         <div className="Col-md-4">
        //             <h1>Doctors Timetable</h1>
        //             <p>
        //                 Doctors meet and talk with patients and caregivers to diagnose, manage and treat illnesses and injuries.
        //             </p>
        //             <button>View Timetable </button>
        //         </div>
        //         <div className="Col-md-4">
        //             <h1>Emergency Call</h1>
        //             <p>
        //               
        //             </p>
        //             <button>Mobile: 01832223310 </button>
        //         </div>
        //         <div className="Col-md-4">
        //             <h1>Make An Appointment</h1>
        //             <p>
        //                 When it's necessary and appropriate, they also provide referrals for patients to see specialists.
        //             </p>
        //             <button>View Timetable </button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default QuickLinks;