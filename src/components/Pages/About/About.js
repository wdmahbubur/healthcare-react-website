import { faFlag, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div >
            <div className="bg-blue-900 h-52 flex justify-center items-center">
                <h2 className="text-4xl text-white font-semibold">About Us</h2>
            </div>
            <div className="py-20 px-4 lg:px-28">
                <div className="grid md:grid-cols-2 gap-y-10">
                    <div className=" ">
                        <img src="https://i.ibb.co/7zfkWTD/why-choose-us1.jpg" alt="" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-sm text-blue-900">About Us</p>
                        <h3 className="text-3xl md:text-5xl font-semibold text-gray-700 leading-tight">We started a medi life hospital from 1997</h3>
                        <p className="text-gray-700 leading-7">Started with a dispensary in 1997 to cater to the needs of students, staff and local population under the banner of Medi Life Charitable Trust, Medi Life hospital expanded as 378 bedded super specialty hospital in 2014. The hospital is situated in 72 acres campus of Medi Life University. The hospital is catering to students, staff and local population. Medi Life hospital is providing 24×7 emergency services. Critical care ambulance is always available for shifting patients to hospitals in NCR region in case of an emergency.
                        </p>
                    </div>
                </div>
                <hr className="my-8" />
                <div className="grid grid-cols-3 gap-8">
                    <div className="shadow-lg p-8">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faPaperPlane} className="text-4xl text-blue-600"></FontAwesomeIcon>
                        </div>
                        <div className="text-gray-600 rounded-sm">
                            <h4 className="text-2xl font-medium text-center my-5">Our Vision</h4>
                            <p>To evolve as a benchmark in quality healthcare available to one and all.</p>
                        </div>
                    </div>
                    <div className="shadow-lg p-8">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faFlag} className="text-4xl text-blue-600"></FontAwesomeIcon>
                        </div>
                        <div className="text-gray-600 rounded-sm">
                            <h4 className="text-2xl font-medium text-center my-5">Our Mission</h4>
                            <p>To ensure accessible and affordable quality healthcare by compassionate medical professionals to all.</p>
                        </div>
                    </div>
                    <div className="shadow-lg p-8">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faPaperclip} className="text-4xl text-blue-600"></FontAwesomeIcon>
                        </div>
                        <div className="text-gray-600 rounded-sm">
                            <h4 className="text-2xl font-medium text-center my-5">Our Policy</h4>
                            <p>To provide value added innovative, consistent, and continuously improving health and medical care to sustain and further improve clinical outcomes, patient safety, & patient satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;