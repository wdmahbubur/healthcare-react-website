import React from 'react';

const Button = ({ type, bgColor, children, ...rest }) => {
    return (
        <button type={type} className={`rounded-md text-sm font-medium text-white ${bgColor} px-4 py-3 hover:bg-blue-400 transition-colors`} {...rest}>
            {children}
        </button>
    );
};

export default Button;