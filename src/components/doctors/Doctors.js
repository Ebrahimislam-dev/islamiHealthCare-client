import React from 'react';
import { Row } from 'react-bootstrap';
import useDrs from '../../hooks/useDrs';
import DoctorsCard from './DoctorsCard';

const Doctors = () => {
    const [doctors] = useDrs();
    console.log(doctors);
    return (
        <div className='doctors'>
            <div className="container-fluid  mb-1">
                <h1 className="heading mb-5 mt-1">
                    Our <span className="text-danger"> doctors </span>
                </h1>
                <Row xs={1} md={3} className="g-4 ">
                    {

                        doctors.map(doctor => <DoctorsCard
                            key={doctor.key}

                            doctor={doctor}
                        >
                        </DoctorsCard>)
                    }
                </Row>
            </div>
        </div >
    );
};

export default Doctors;