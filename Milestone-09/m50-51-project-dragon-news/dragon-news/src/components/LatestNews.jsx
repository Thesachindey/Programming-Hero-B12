import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='bg-secondary text-base-100 px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' gradient={true} pauseOnHover={true} speed={70}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, atque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, atque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, atque.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;