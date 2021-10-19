import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const SignupForm = () => {
    const { createAccount, error } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleName = (e) => {
        return setName(e.target.value);
    }
    const handleEmail = (e) => {
        // check email is correct
        if (/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(e.target.value)) {
            setEmailError("");
            return setEmail(e.target.value);
        }
        else {
            return setEmailError("Invalid Email Address");
        }
    }

    const handlePassword = (e) => {
        // check password is valid
        if (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/.test(e.target.value)) {
            setPasswordError("");
            return setPassword(e.target.value);
        }
        else {
            setPasswordError("Please enter 8-20 characters password. Include one uppercase, one lowercase, one digit and one special character");
        }
    }
    const handleForm = (e) => {
        e.preventDefault();
        createAccount(name, email, password);
    }

    return (
        <div className="space-y-6 px-6 pb-6 ">
            <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900">
                Create new account
            </h2>
            <form className="mt-8 space-y-4" onSubmit={handleForm}>
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <InputField type="text" placeholder="Enter Your Name" required onBlur={handleName}></InputField>
                    </div>
                    <div>
                        <InputField type="email" placeholder="Enter Your Email" required onBlur={handleEmail}></InputField>
                        <p className="my-3 text-red-500 text-center">{emailError}</p>
                    </div>
                    <div>
                        <InputField type="password" placeholder="Enter Your Password" required onBlur={handlePassword}></InputField>
                        <p className="my-3 text-red-500 text-center">{passwordError}</p>
                    </div>
                </div>

                <div>
                    <Button type="submit" customStyle="w-full bg-blue-900">
                        Sign Up
                    </Button>

                    <p className="my-3 text-red-500 text-center">{error}</p>
                </div>
            </form>
            <hr />
            <Button type="button" customStyle="bg-yellow-400 w-full"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign Up with Google</Button>
        </div>
    );
};

export default SignupForm;