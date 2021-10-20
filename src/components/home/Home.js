import React from 'react';
import Banner from '../banner/Banner';

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
           
        </div>
    );
};

export default Home;