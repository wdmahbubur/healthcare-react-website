import { faFacebookF, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useServices from '../../hooks/useServices';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import Logo from '../Logo/Logo';

const Footer = () => {
    const { services } = useServices();
    let history = useHistory();
    return (
        <div className="p-8 lg:px-16 lg:pt-16 lg:pb-2 bg-gray-100 text-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 pb-8">
                <div className="flex flex-col gap-y-2 justify-between">
                    <Logo></Logo>
                    <div>
                        <p>Address: Dhaka, Bangladesh</p>
                        <p>Phone: +880 12345-6789</p>
                        <p>Email: info@example.com</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faFacebookF} className=""></FontAwesomeIcon>
                        </a>
                        <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faTwitter} className=""></FontAwesomeIcon>
                        </a>
                        <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className=""></FontAwesomeIcon>
                        </a>
                        <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className=""></FontAwesomeIcon>
                        </a>
                        <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faTelegram} className=""></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-blue-900 font-semibold text-2xl mb-4">Services</h3>
                    <ul className="flex flex-col gap-4">
                        {
                            services.map(service => <li key={service.sid}><Link to="#" onClick={() => history.push(`/service/${service.sid}`)}>{service.name}</Link></li>)
                        }

                    </ul>
                </div>
                <div>
                    <h3 className="text-blue-900 font-semibold text-2xl mb-4">Useful Links</h3>
                    <ul className="space-y-4">
                        <li><NavHashLink smooth to="/#services">Service</NavHashLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/login">Sign in</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-blue-900 font-semibold text-2xl mb-4">Subscribe</h3>
                    <form className="flex flex-col gap-4">
                        <InputField type="email" placeholder="Enter Your Email" required></InputField>
                        <Button type="submit" customStyle="bg-blue-900">Subscribe</Button>
                        <p> Get The Latest Updates via email. Any time you may unsubscribe</p>
                    </form>
                </div>
            </div>
            <hr />
            <div className="py-4 text-center">
                <p>&copy; Copyright 2021 | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;