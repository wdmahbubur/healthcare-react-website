import React from 'react';
import useServices from '../../hooks/useServices';
import Card from '../Card/Card';
import { useHistory } from 'react-router-dom';
const Services = () => {
    const { services } = useServices();
    let history = useHistory();
    const readMore = (sid) => {
        history.push(`/service/${sid}`);
    }

    return (
        <div className="py-8 px-4 lg:px-28" id="services">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-800">Our Services</h3>
                <hr className="w-16 h-1 bg-blue-900 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-10">
                {
                    services.map(service => <Card key={service.sid} id={service.sid} name={service.name} image={service.image} bodyText={service.shortDesc} request="services" clickHandler={readMore}></Card>)
                }
            </div>

        </div>
    );
};

export default Services;