import React from 'react';

const Button = ({ type, customStyle, children, ...rest }) => {
    return (
        <button type={type} className={`rounded-md text-sm font-medium text-white px-4 py-3 hover:bg-blue-400 transition-colors duration-500 ${customStyle} `} {...rest}>
            {children}
        </button>
    );
};

export default Button;