import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../Button/Button';
import InputField from '../../InputField/InputField';

const Contact = () => {
    const handleForm = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className="bg-blue-900 h-52 flex justify-center items-center">
                <h2 className="text-4xl text-white font-semibold">Contact Us</h2>
            </div>
            <div className="py-20 px-4 lg:px-28">
                <div className="grid md:grid-cols-2 gap-y-10">
                    <div className="space-y-8">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block h-12 w-auto" src="https://i.ibb.co/hgwzM3K/logo.png" alt="" />
                            <h3 className="text-blue-400 font-semibold text-6xl ml-2">MEDI LIFE</h3>
                        </div>
                        <p className="w-2/3 text-gray-600"> Medi Life hospital is providing 24×7 emergency services. Critical care ambulance is always available for shifting patients to hospitals in NCR region in case of an emergency.</p>
                        <div className="text-gray-600 space-y-2">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Address: Dhaka, Bangladesh</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />Phone: +880 12345-6789</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Email: info@example.com</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl md:text-4xl font-semibold text-blue-900 leading-tight">Get in touch</h3>
                        <form className="mt-8 space-y-4" onSubmit={handleForm}>
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm space-y-4">
                                <div>
                                    <InputField type="text" placeholder="Name" required ></InputField>
                                </div>
                                <div>
                                    <InputField type="email" placeholder="Email" required ></InputField>
                                </div>
                                <div>
                                    <InputField type="text" placeholder="Subject" required></InputField>
                                </div>
                                <div>
                                    <textarea type="text" placeholder="Message" className="appearance-none rounded relative block w-full h-24 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-base" required></textarea>
                                </div>
                            </div>

                            <div>
                                <Button type="submit" customStyle=" w-full bg-blue-900">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;