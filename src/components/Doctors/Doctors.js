import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import Card from '../Card/Card';

const Doctors = () => {
    const { doctors } = useDoctors();
    return (
        <div className="py-8 px-4 lg:px-28" id="services">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-800">Our Doctors</h3>
                <hr className="w-16 h-1 bg-blue-900 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-10">
                {
                    doctors.map(doctor => <Card key={doctor.did} id={doctor.did} name={doctor.name} image={doctor.image} bodyText={doctor.specialized} request="doctors"></Card>)
                }
            </div>

        </div>
    );
};

export default Doctors;