import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bottom-0 bg-gray-300 fixed w-full text-center py-2'>
            <p className='text-lg'>Stay Connected</p>
            <h2 className='font-sans font-semibold text-3xl'>Follow us on Social Media</h2>
            <div className='flex justify-center gap-4 my-3'>
                <button><FaFacebook></FaFacebook></button>
                <button><FaInstagram></FaInstagram></button>
                <button><FaTwitter></FaTwitter></button>
                <button><FaYoutube></FaYoutube></button>
            </div>
        </div>
    );
};

export default Footer;