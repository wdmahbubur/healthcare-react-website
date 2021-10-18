import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const SignupForm = () => {
    const { createAccount } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        return setName(e.target.value);
    }
    const handleEmail = (e) => {
        return setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        return setPassword(e.target.value);
    }
    const handleForm = (e) => {
        e.preventDefault();
        createAccount(name, email, password);
    }

    return (
        <div className="space-y-6 px-6 pb-6 ">
            <h2 class="mt-6 text-center text-2xl font-semibold text-gray-900">
                Create new account
            </h2>
            <form class="mt-8 space-y-4" onSubmit={handleForm}>
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <InputField type="text" placeholder="Enter Your Name" required onBlur={handleName}></InputField>
                    </div>
                    <div>
                        <InputField type="email" placeholder="Enter Your Email" required onBlur={handleEmail}></InputField>
                    </div>
                    <div>
                        <InputField type="password" placeholder="Enter Your Password" required onBlur={handlePassword}></InputField>
                    </div>
                </div>

                <div>
                    <Button type="submit" customStyle="group relative w-full flex justify-center bg-blue-900">
                        Sign Up
                    </Button>
                </div>
            </form>
            <hr />
            <Button type="button" customStyle="bg-yellow-400 w-full"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign Up with Google</Button>
        </div>
    );
};

export default SignupForm;