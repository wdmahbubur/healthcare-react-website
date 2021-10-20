import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    // get services info from api
    useEffect(() => {
        fetch('https://mocki.io/v1/9ed57c11-5454-4498-a84e-798626b2b61f')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const getOneService = (id) => {
        try {
            setLoading(true);
            const getService = services.find(service => service.sid === parseInt(id));
            setData(getService);
            if (getService) {
                setLoading(false);
            }
        }
        catch (err) {
            setLoading(false);
        }
    }

    return {
        services,
        getOneService,
        data,
        loading
    }
};

export default useServices;