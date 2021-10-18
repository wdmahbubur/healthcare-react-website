import React from 'react';

const Button = ({ type, bgColor, children, ...rest }) => {
    return (
        <button type={type} className={`rounded-md text-sm font-medium text-white ${bgColor}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;