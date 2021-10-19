import { faFacebookF, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button/Button';

const Card = ({ id, name, image, bodyText, request, clickHandler }) => {
    return (
        <div className="shadow-lg px-4 py-6 border-2 border-gray-50 text-gray-700 hover:shadow-none transition-shadow duration-500 text-center">
            <div>
                <img
                    src={image}
                    alt={name}
                    className={` mx-auto ${request === "doctors" ? "rounded-full w-1/3 h-2/3" : "rounded-md  w-full h-52"}`}
                />
            </div>
            <div className="mt-4">
                <h4 className="text-2xl font-medium">{name}</h4>
                <p className="my-4">{bodyText.slice(0, 100)}</p>
            </div>
            {
                request === "doctors" ?
                    <>
                        <hr className="my-5" />
                        <div className="flex gap-3 justify-center">
                            <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faFacebookF} className=""></FontAwesomeIcon>
                            </a>
                            <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faTwitter} className=""></FontAwesomeIcon>
                            </a>
                            <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faLinkedin} className=""></FontAwesomeIcon>
                            </a>
                            <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faInstagram} className=""></FontAwesomeIcon>
                            </a>
                            <a href="/#" className="border-2 border-blue-400 text-blue-400 w-10 h-10 flex rounded-full justify-center items-center text-base hover:bg-blue-900 hover:text-white transition-colors">
                                <FontAwesomeIcon icon={faTelegram} className=""></FontAwesomeIcon>
                            </a>
                        </div>
                    </>
                    :
                    <div>
                        <Button type="button" customStyle="bg-blue-900 w-full" onClick={() => clickHandler(id)}>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
                    </div>

            }

        </div>
    );
};

export default Card;