import React from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import './Banner.css';

const Banner = () => {
    let history = useHistory();
    const getAppointment = () => {
        history.push("/appointment")
    }
    return (
        <div className="banner h-48 md:min-h-screen flex flex-col gap-4 items-center justify-center">
            <h1 className="md:text-6xl font-bold text-white lg:w-2/4 text-center">Find The Best Doctor Near By You</h1>
            <Button type="button" customStyle="bg-blue-300" onClick={getAppointment}>Get Appointment</Button>
        </div>
    );
};

export default Banner;