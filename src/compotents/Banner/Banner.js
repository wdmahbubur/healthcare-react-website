import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner md:min-h-screen flex items-center justify-center">
            <h1 className="md:text-6xl font-bold text-white md:w-2/4 text-center">Find The Best Doctor Near By You</h1>
        </div>
    );
};

export default Banner;