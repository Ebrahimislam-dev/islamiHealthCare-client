import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import bannerhome from '../../images/ihc1.1.jpg'
import banner1 from '../../images/ihc1.jpg'

import banner2 from '../../images/ihc2.jpg'
import banner3 from '../../images/ihc3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel fade className="slide-item">
                <Carousel.Item interval={1000} >
                    <Carousel.Caption >
                        <div className="  pe-5 pb-5 mb-5 text-center">
                            <h1 className="fs-1 me-5 pe-5 font-monospace fw-bold text-success">WELCOME TO ISLAMI HEALTH CARE</h1>
                            <p className="fs-4 px-3 text-black fst-italic">We are team of talented doctors making your life happiness</p>
                        </div>
                        <div className="  pb-5 mb-5 me-5 text-center">
                            <Button className="btn btn-danger">GET STARTED</Button>
                        </div>
                        <div className="  pb-5 mb-5 text-center">
                        </div>
                        <div className="  pb-5 mb-5  text-center">
                        </div>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100 slide-item"
                        src={bannerhome}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500} >
                    <Carousel.Caption >
                        <div className="pb-md-5 mb-md-5 text-center">
                            <h1 className="fs-md-1 text-success">LET US PROTECT YOUR HEALTH</h1>
                            <Button className="btn btn-success">Read More</Button>

                        </div>


                    </Carousel.Caption>
                    <img
                        className="d-block w-100 slide-item"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-success fs-md-1">BEST DOCTOR'S SUPPORT</h2>

                        <Button className="btn btn-success">Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-success">SUPPORT BETTER PATIENT SERVICES</h3>

                        <Button className="btn btn-success">Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};
export default Banner;