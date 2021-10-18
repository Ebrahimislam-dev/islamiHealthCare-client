import React from 'react';
import { Row } from 'react-bootstrap';
import './Services.css'

import useServicehook from '../../hooks/useServicehook';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services] = useServicehook(true);
    return (
        <div className='services'>
            <div className="container-fluid  mb-1">
                <h1 className="heading mb-5 mt-1">
                    Our <span className="text-danger"> Services </span>
                </h1>
                <Row xs={1} md={4} className="g-3 ">
                    {
                        services.map(service => <ServiceCard
                            key={service.key}
                            service={service}
                        >
                        </ServiceCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;