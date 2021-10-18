import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const SignInForm = () => {
    const { googleSignIn } = useAuth();
    return (
        <div className="space-y-6 px-6 pb-6 ">
            <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900">
                Sign in to your account
            </h2>
            <form className="mt-8 space-y-4">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <InputField type="email" placeholder="Enter Your Email" required></InputField>
                    </div>
                    <div>
                        <InputField type="password" placeholder="Enter Your Password" required></InputField>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <Button type="submit" customStyle="group relative w-full flex justify-center bg-blue-900">
                        Sign in
                    </Button>
                </div>
            </form>
            <hr />
            <Button type="button" customStyle="bg-yellow-400 w-full" onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign in with Google</Button>
        </div>
    );
};

export default SignInForm;