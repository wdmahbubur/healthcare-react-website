import { faFacebookF, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const Footer = () => {
    return (
        <div className="p-16 pb-2 bg-gray-100 text-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-4 pb-8">
                <div className="flex flex-col justify-between">
                    <div className="flex">
                        <img className="block h-8 w-auto" src={logo} alt="" />
                        <h3 className="text-blue-900 font-semibold text-2xl">REACT LIFE</h3>
                    </div>
                    <h4>
                        It is a long established fact that a reader will be distracted by the readable.
                    </h4>
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
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-blue-900 font-semibold text-2xl mb-4">Useful Links</h3>
                    <ul className="flex flex-col gap-4">
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                        <li><NavLink to="#services">Cardiology</NavLink></li>
                        <li><NavLink to="#services">Cardiology</NavLink></li>
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