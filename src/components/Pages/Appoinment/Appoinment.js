/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useDoctors from '../../../hooks/useDoctors';
import useFakeDb from '../../../hooks/useFakeDb';
import useServices from '../../../hooks/useServices';
import Button from '../../Button/Button';
import InputField from '../../InputField/InputField';

const Appointment = () => {
    const { user } = useAuth();
    const { addToDB } = useFakeDb(user.uid);
    const { doctors } = useDoctors();
    const { services } = useServices();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pNumber, setPNumber] = useState("");
    const [doctor, setDoctor] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [problem, setProblem] = useState("");
    let history = useHistory();
    useEffect(() => {
        if (name === "") {
            setName(user.displayName);
        }
        if (email === "") {
            setEmail(user.email);
        }
    }, [])

    const handleName = (e) => {
        return setName(e.target.value);

    }
    const handleEmail = (e) => {
        return setEmail(e.target.value);
    }
    const handleNumber = (e) => {
        return setPNumber(e.target.value);
    }
    const handleDoctor = (e) => {
        return setDoctor(e.target.value);
    }
    const handleService = (e) => {
        return setService(e.target.value);
    }
    const handleDate = (e) => {
        return setDate(e.target.value);
    }

    const handleProblem = (e) => {
        return setProblem(e.target.value);
    }
    const handleForm = (e) => {
        e.preventDefault();
        const data =
        {
            "name": name,
            "email": email,
            "phoneNumber": pNumber,
            "doctor": doctor,
            "service": service,
            "date": date,
            "problem": problem
        }
        addToDB(data);
        history.push("/dashboard");

    }
    return (
        <div className="py-8 px-4 lg:px-28" id="services">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-800">Get Appointment</h3>
                <hr className="w-20 h-1 bg-blue-900 mx-auto" />
            </div>
            <form className="mt-8 space-y-4 md:w-2/5 mx-auto" onSubmit={handleForm}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <InputField type="text" placeholder="Name" required value={name} onChange={handleName}></InputField>
                    </div>
                    <div>
                        <InputField type="email" placeholder="Email (Optional)" value={email} onChange={handleEmail}></InputField>
                    </div>
                    <div>
                        <InputField type="number" placeholder="Phone Number" required onChange={handleNumber}></InputField>
                    </div>
                    <div>
                        <select className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-base" onChange={handleService} required>
                            <option value="">Select Service</option>
                            {
                                services.map(service => <option key={service.sid} value={service.name}>{service.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <select className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-base" onChange={handleDoctor} required>
                            <option value="">Select Doctor</option>
                            {
                                doctors.map(doctor => <option key={doctor.did} value={doctor.name}>{doctor.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <label className="mb-2">Appointment Date</label>
                        <InputField type="date" placeholder="Appointment Date" required onChange={handleDate}></InputField>
                    </div>
                    <div>
                        <InputField type="text" placeholder="Problem (Optional)" onChange={handleProblem}></InputField>
                    </div>
                </div>

                <div>
                    <Button type="submit" customStyle=" w-full bg-blue-900">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;