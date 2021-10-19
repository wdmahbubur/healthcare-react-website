import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyChooseUs.css';
const WhyChooseUs = () => {
    return (
        <div className="why-choose-us text-gray-100 my-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 px-4 py-16 gap-y-10 md:px-16 lg:py-16 lg:px-28">
                <div className="space-y-8 order-2 lg:order-1">
                    <h2 className="text-5xl lg:text-7xl font-semibold">Why Choose Medi Life</h2>
                    <p>
                        Medi Life hospital expanded as 378 bedded super specialty hospital in 2014. The hospital is situated in 72 acres campus of Medi Life University. The hospital is catering to students, staff and local population. Medi Life hospital is providing 24×7 emergency services. Critical care ambulance is always available for shifting patients to hospitals in NCR region in case of an emergency.
                    </p>
                    <div className="flex">
                        <div>
                            <FontAwesomeIcon icon={faHeart} className="text-3xl"></FontAwesomeIcon>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold mb-3">Quality Control System</h4>
                            <p>Medi Life Provide Best Quality Service</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <FontAwesomeIcon icon={faUsers} className="text-3xl"></FontAwesomeIcon>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold mb-3">Highly Professional Doctor</h4>
                            <p>Professional and Caring Doctors Are Here</p>
                        </div>
                    </div>
                </div>
                <div className="opacity-80 lg:mx-auto relative order-1 lg:order-2 md:mb-40 lg:mb-0">
                    <img src="https://i.ibb.co/7zfkWTD/why-choose-us1.jpg" alt="" className="md:h-72 md:border-8 border-gary-200 md:rounded-lg z-10" />
                    <img src="https://i.ibb.co/d0GpwdG/why-choose-us2.jpg" alt="" className="h-60 border-8 border-gary-200 rounded-lg absolute lg:-right-16 lg:bottom-5 md:right-0 md:top-48 hidden md:block" />
                </div>

            </div>
        </div >
    );
};

export default WhyChooseUs;