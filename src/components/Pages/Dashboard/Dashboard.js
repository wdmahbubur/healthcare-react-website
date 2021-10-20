import React from 'react';
import useFakeDb from '../../../hooks/useFakeDb';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useAuth from '../../../hooks/useAuth';


const Dashboard = () => {
    const { user } = useAuth();
    const { appointmentList } = useFakeDb(user.uid);
    let count = 1;
    let key = 0;
    return (
        <div className="mb-12 px-4 lg:px-28">
            <div className="py-8">
                <h1 className="text-5xl text-center">Hi {user.displayName}!</h1>
            </div>
            <h4 className="text-xl mb-4">Appointment List</h4>
            <Table className="border-collapse w-screen lg:w-full border-2 border-blue-900 text-sm lg:text-base">
                <Thead className="">
                    <Tr className="bg-blue-700 text-white lg:h-12">
                        <Th className="border-2  border-blue-900">#</Th>
                        <Th className="border-2 border-blue-900">Name</Th>
                        <Th className="border-2 border-blue-900">Phone Number</Th>
                        <Th className="border-2 border-blue-900">Service</Th>
                        <Th className="border-2 border-blue-900">Doctor</Th>
                        <Th className="border-2 border-blue-900">Problem</Th>
                        <Th className="border-2 border-blue-900">Appointment Date</Th>
                    </Tr>
                </Thead>
                <Tbody className="text-center">
                    {
                        appointmentList.length > 0 ?
                            appointmentList.map(appointment => <Tr key={key++} className="lg:h-10">
                                <Td className="border-2 border-blue-900">{count++}</Td>
                                <Td className="border-2 border-blue-900">{appointment.name}</Td>
                                <Td className="border-2 border-blue-900">{appointment.phoneNumber}</Td>
                                <Td className="border-2 border-blue-900">{appointment.service}</Td>
                                <Td className="border-2 border-blue-900">{appointment.doctor}</Td>
                                <Td className="border-2 border-blue-900">{appointment.problem}</Td>
                                <Td className="border-2 border-blue-900">{appointment.date}</Td>
                            </Tr>)
                            :
                            <Tr className="lg:h-10">
                                <Td className="border-2 border-blue-900" colSpan="7">No Appointment Found!</Td>
                            </Tr>
                    }

                </Tbody>
            </Table>
        </div>
    );
};

export default Dashboard;