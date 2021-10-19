import React from 'react';
import Banner from '../../Banner/Banner';
import Doctors from '../../Doctors/Doctors';
import Services from '../../Services/Services';
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;