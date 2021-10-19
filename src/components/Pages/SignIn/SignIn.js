
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import SignInForm from '../../SignInForm/SignInForm';
import SignupForm from '../../SignupForm/SignupForm';
import { useLocation, useHistory } from 'react-router-dom';
import Logo from '../../Logo/Logo';

const Login = () => {
    const { user } = useAuth();
    const [formToggle, setFormToggle] = useState(true);
    let history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/";

    const signInToggle = () => {
        setFormToggle(true);
    }
    const signUpToggle = () => {
        setFormToggle(false);
    }
    useEffect(() => {
        user.email && history.push(url)
    }, [user])


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-6">

                <Logo customStyle="justify-center"></Logo>


                <div className="shadow-lg rounded-lg border-2 border-blue-100">
                    <div className="flex">
                        <div className={`w-full text-center py-3 cursor-pointer rounded-tl-md ${formToggle ? "bg-blue-400 text-white" : "hover:bg-gray-100 border-b-2"}`} onClick={signInToggle}>Sign In</div>
                        <div className={`w-full text-center py-3 cursor-pointer rounded-tr-md ${!formToggle ? "bg-blue-400 text-white" : "hover:bg-gray-100 border-b-2"}`} onClick={signUpToggle}>Sign Up</div>
                    </div>
                    {
                        formToggle ? <SignInForm></SignInForm> : <SignupForm></SignupForm>
                    }

                </div>


            </div>
        </div>
    );
};

export default Login;