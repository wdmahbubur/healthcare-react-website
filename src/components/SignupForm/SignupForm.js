import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const SignupForm = () => {
    return (
        <div className="space-y-6 px-6 pb-6 ">
            <h2 class="mt-6 text-center text-2xl font-semibold text-gray-900">
                Create new account
            </h2>
            <form class="mt-8 space-y-4">
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <InputField type="text" placeholder="Enter Your Name" required></InputField>
                    </div>
                    <div>
                        <InputField type="email" placeholder="Enter Your Email" required></InputField>
                    </div>
                    <div>
                        <InputField type="password" placeholder="Enter Your Password" required></InputField>
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