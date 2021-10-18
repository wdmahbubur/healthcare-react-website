import React from 'react';
import useServices from '../../hooks/useServices';
import Card from '../Card/Card';

const Services = () => {
    const { services } = useServices();
    return (
        <div className="py-8 px-28 ">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-800">Our Services</h3>
                <hr className="w-16 h-1 bg-blue-900 mx-auto" />
            </div>

            <div className="grid grid-cols-3 gap-10">
                {
                    services.map(service => <Card key={service.sid} service={service}></Card>)
                }
            </div>

        </div>
    );
};

export default Services;