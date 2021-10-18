import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button/Button';

const Card = ({ service }) => {
    const { sid, name, image, shortDesc } = service;
    return (
        <div className="shadow-lg px-4 py-6 border-2 border-gray-50 text-gray-700 hover:shadow-none transition-shadow duration-500">
            <div>
                <img src={image} alt={name} className="h-52 w-full rounded-md" />
            </div>
            <div className="mt-4">
                <h4 className="text-2xl font-medium">{name}</h4>
                <p className="my-4">{shortDesc.slice(0, 100)}</p>
            </div>
            <div className="bottom-0">
                <Button type="button" customStyle="bg-blue-900 w-full">Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
            </div>
        </div>
    );
};

export default Card;