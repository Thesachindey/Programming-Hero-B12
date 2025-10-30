
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news);
    return (
        <div>
           <div className="border rounded-md border-base-300 shadow p-6">
           <img
                    src={news.thumbnail_url}
                    alt={news.title}
                    className="w-full object-cover rounded-md"
                />
                <h2 className='font-bold text-lg my-5'>{news.title}</h2>
                <p className='text-accent'>{news.details}</p>

                <Link className='btn btn-secondary mt-5 ' to={'/'}>
                <FaArrowLeft />All news in this category
                </Link>
           </div>
        </div>
    );
};

export default NewsDetailsCard;