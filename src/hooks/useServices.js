import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/9ed57c11-5454-4498-a84e-798626b2b61f')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return {
        services,
    }
};

export default useServices;