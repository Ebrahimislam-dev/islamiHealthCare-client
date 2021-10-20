import React from 'react';
import Banner from '../banner/Banner';
import Contactus from '../contact/Contactus';
import Doctors from '../doctors/Doctors';
import QuickLinks from '../QuickLinks/QuickLinks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <Doctors></Doctors>
            <QuickLinks></QuickLinks>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;