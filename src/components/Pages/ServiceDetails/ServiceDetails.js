import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { sid } = useParams();
    const { services } = useServices();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setLoading(true);
            const getService = services.find(service => service.sid === parseInt(sid));
            setData(getService);
            if (getService) {
                setLoading(false);
            }
        }
        catch (err) {
            setLoading(false);
            console.log(err);
        }
    }, [services]);

    console.log(data);

    return (
        <div className="px-16 py-8 space-y-6">
            {loading && <div>Loading...</div>}
            {
                !loading && <>
                    <h2 className="text-3xl">{data.name}</h2>
                    <hr />
                    <img src={data.image} alt="" className="text-center w-2/3 h-96 mx-auto " />
                    <p>
                        {data.longDesc}
                    </p>
                </>
            }

        </div>
    );
};

export default ServiceDetails;