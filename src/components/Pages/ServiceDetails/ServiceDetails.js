import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { sid } = useParams();
    const { getOneService, data, loading } = useServices();
    useEffect(() => {
        getOneService(sid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getOneService])

    return (
        <div className="px-4 md:px-4 lg:px-16 py-8 space-y-6">
            {loading && <div>Loading...</div>}
            {
                !loading && <>
                    <h2 className="text-3xl">{data.name}</h2>
                    <hr />
                    <img src={data.image} alt="" className="text-center w-auto md:w-2/3 h-96 mx-auto " />
                    <p>
                        {data.longDesc}
                    </p>
                </>
            }

        </div>
    );
};

export default ServiceDetails;