import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../Button/Button';

const NotFound = () => {
    let history = useHistory();
    const backToHome = () => {
        history.push('/')
    }
    return (
        <div className="md:w-6/12 mx-auto pb-16 text-center">
            <img src="https://i.ibb.co/0BtY0cb/404-Error-rafiki.png" alt="" className="h-96 w-full " />
            <h1 className="text-4xl font-semibold text-blue-700">Page Not Found</h1>
            <Button customStyle="bg-blue-900 my-8" onClick={backToHome}>Back To Home</Button>
        </div>
    );
};

export default NotFound;