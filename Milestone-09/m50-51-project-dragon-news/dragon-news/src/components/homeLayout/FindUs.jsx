import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className="">
                <div className="join join-vertical w-full text-left ">
                    <button className="btn bg-base-100 join-item justify-start py-5 "><FaFacebook color='blue' size={24} />Facebook</button>
                    <button className="btn bg-base-100 join-item  justify-start py-5"><FaTwitter color='skyblue' size={24} />Twitter</button>
                    <button className="btn bg-base-100 join-item justify-start py-5"><FaInstagram color='red' size={24} />Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;