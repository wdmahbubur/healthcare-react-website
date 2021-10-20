import { useEffect, useState } from "react";


const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    // get services info from api
    useEffect(() => {
        fetch('https://mocki.io/v1/6cbc447a-958c-472d-8475-ef4b732845bd')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return {
        doctors,
    }
};

export default useDoctors;