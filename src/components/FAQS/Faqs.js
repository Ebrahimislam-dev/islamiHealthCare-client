import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faqs = () => {
    return (
        <div>
            <h1 className="heading text-success mt-5 mb-2">HELP & FAQ</h1>
            <h3 className="mb-3 fst-italic" >General <span className="text-danger  mb-3">Question'S</span> </h3>
            <p>Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional <br /> nursing, and funeral services.</p>
            <div className=" row">
                <div className="col-8 col-md-5 mx-5 my-5">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I personally meet a doctor at clinic?</Accordion.Header>
                            <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How to make an appointment for Medical check up?</Accordion.Header>
                            <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How I can find a nearby hospital?</Accordion.Header>
                            <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What payment methods are available?</Accordion.Header>
                            <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className=" col-8 col-md-5 mx-5 my-5">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I personally meet a doctor at clinic?</Accordion.Header>
                            <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How to make an appointment for Medical check up?</Accordion.Header>
                            <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How I can find a nearby hospital?</Accordion.Header>
                            <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What payment methods are available?</Accordion.Header>
                            <Accordion.Body>
                                A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div >
        </div >

    );
};

export default Faqs;