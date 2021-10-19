import React from 'react';
const Logo = ({ customStyle }) => {
    return (
        <div className={`flex items-center ${customStyle}`}>
            <img className="block h-8 w-auto" src="https://i.ibb.co/hgwzM3K/logo.png" alt="" />
            <h3 className="text-blue-400 font-semibold text-2xl ml-2">MEDI LIFE</h3>
        </div>
    );
};

export default Logo;