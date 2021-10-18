import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div>
                <div className="flex-shrink-0 flex items-center">
                    <img className="block h-8 w-auto" src={logo} alt="" />
                    <h3 className="text-blue-400 font-semibold text-2xl">REACT LIFE</h3>
                </div>
                <h4>
                    It is a long established fact that a reader will be distracted by the readable.
                </h4>
                <div className="">
                    <a href="/#" className=""><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                </div>
            </div>
            <div>
                <h3 className="text-blue-400 font-semibold text-2xl">Services</h3>
                <ul>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                </ul>
            </div>
            <div>
                <h3 className="text-blue-400 font-semibold text-2xl">Useful Links</h3>
                <ul>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                    <li><NavLink to="#services">Cardiology</NavLink></li>
                </ul>
            </div>
            <div>
                <h3 className="text-blue-400 font-semibold text-2xl">Subscribe</h3>

                <InputField type="email" placeholder="Enter Your Email" required></InputField>
                <Button type="submit" bgColor="bg-blue-900">Subscribe</Button>

            </div>
        </div>
    );
};

export default Footer;