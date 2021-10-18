import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const LoginForm = () => {
    return (
        <div className="space-y-6 px-6 pb-6 ">
            <h2 class="mt-6 text-center text-2xl font-semibold text-gray-900">
                Sign in to your account
            </h2>
            <form class="mt-8 space-y-4">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <InputField type="email" placeholder="Enter Your Email" required></InputField>
                    </div>
                    <div>
                        <InputField type="password" placeholder="Enter Your Password" required></InputField>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <Button type="submit" customStyle="group relative w-full flex justify-center bg-blue-900">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3 ">
                            {/* Heroicon name: solid/lock-closed */}
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Sign in
                    </Button>
                </div>
            </form>
            <hr />
            <Button type="button" customStyle="bg-yellow-400 w-full"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign in with Google</Button>
        </div>
    );
};

export default LoginForm;