/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";


const useFakeDb = (id) => {
    const [appointmentList, setAppointmentList] = useState([]);
    const addToDB = (data) => {
        const db = getDB();
        let appointments = {};
        if (!db) {
            appointments[id] = [data];
        }
        else {
            appointments = JSON.parse(db);
            if (appointments[id]) {
                appointments[id].push(data);
            }
            else {
                appointments[id] = [data];
            }
        }
        updateDB(appointments);
    }

    const getDB = () => {
        return localStorage.getItem('Appointment');
    }
    const updateDB = value => {
        return localStorage.setItem("Appointment", JSON.stringify(value))
    };

    useEffect(() => {
        const getDataParse = () => {
            const db = getDB();
            const parseDb = JSON.parse(db);
            for (const appointment in parseDb) {
                if (appointment === id) {
                    setAppointmentList(parseDb[appointment]);
                }
            }
        }
        getDataParse()
    }, [])


    return {
        addToDB,
        appointmentList
    }
}
export default useFakeDb;