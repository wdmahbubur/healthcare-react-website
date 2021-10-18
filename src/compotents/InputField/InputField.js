import React from 'react';

const InputField = ({ type, placeholder, ...rest }) => {
    return (
        <input type={type} class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-base" placeholder={placeholder} {...rest} />
    );
};

export default InputField;