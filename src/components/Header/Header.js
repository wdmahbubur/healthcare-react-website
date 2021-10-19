import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../logo.svg';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
const Header = () => {
    const { user, signOutUser } = useAuth();
    const dropdownRef = useRef();
    const mobileMenu = useRef();
    const [profileToggle, setProfileToggle] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

    const profileToggleMenu = () => {
        if (!profileToggle) {
            dropdownRef.current.classList.remove("hidden");
            setProfileToggle(true);
        }
        else {
            dropdownRef.current.classList.add("hidden");
            setProfileToggle(false);
        }
    }

    const handleMobileMenu = () => {
        if (!mobileMenuToggle) {
            mobileMenu.current.classList.remove("hidden");
            setMobileMenuToggle(true);
        }
        else {
            mobileMenu.current.classList.add("hidden");
            setMobileMenuToggle(false);
        }
    }
    return (
        <nav className="bg-gray-50 filter drop-shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={handleMobileMenu}>
                            <span className="sr-only">Open main menu</span>

                            {/* Icon when menu is closed.*/}

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            {/* Icon when menu is open. */}

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                        <Logo></Logo>

                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">

                                <NavLink to="/" activeClassName="bg-blue-900 text-white" className="px-3 py-3 rounded-md text-sm font-medium" >Home</NavLink>

                                <NavLink to="#" className="hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium">Service</NavLink>

                                <NavLink to="#" className="hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium">About Us</NavLink>

                                <NavLink to="#" className="hover:bg-gray-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium">Contact</NavLink>

                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* Profile dropdown */}
                        <div className="ml-3 relative">
                            {
                                user.email ? <div className="flex">
                                    <button type="button" className="flex gap-2 items-center text-md rounded-full focus:outline-none  focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={profileToggleMenu}>
                                        <span className="sr-only">Open user menu</span>
                                        {
                                            user.photoURL ? <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
                                                :
                                                <img className="h-8 w-8 rounded-full" src="https://i.ibb.co/m9zPyPC/avater.png" alt="" />

                                        }
                                        <h4 className="hidden lg:block">{user.displayName}</h4>
                                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                                    </button>
                                    <Button type="button" customStyle="bg-blue-900 text-white ml-2 hidden lg:block" onClick={signOutUser}>Logout</Button>
                                </div>
                                    :
                                    <NavLink to="/login" className="bg-blue-900 text-white px-3 py-3 rounded-md text-sm font-medium" >Login</NavLink>
                            }
                            {/* Dropdown menu, show/hide based on menu state. */}

                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1" ref={dropdownRef} onMouseOut={profileToggleMenu}>

                                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-0" onClick={profileToggleMenu}>Your Profile</NavLink>
                                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-1" onClick={profileToggleMenu}>Settings</NavLink>

                                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-700 hover:text-white lg:hidden" role="menuitem" tabIndex="-1" id="user-menu-item-1" onClick={signOutUser} onMouseUp={profileToggleMenu}>Logout</NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className="hidden sm:hidden" id="mobile-menu" ref={mobileMenu}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavLink to="#" activeClassName="bg-blue-900 text-white" className="block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</NavLink>

                    <NavLink to="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</NavLink>

                    <NavLink to="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</NavLink>

                    <NavLink to="#" className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</NavLink>
                </div>
            </div>
        </nav>

    );
};

export default Header;