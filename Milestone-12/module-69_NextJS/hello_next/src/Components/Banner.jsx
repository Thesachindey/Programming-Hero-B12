'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();


    const handelClick = () => {
        const password=prompt("Enter the password to share your story:");
        if(password==='1234'){
            console.log(router)
            router.push('/dashboard');

        }
    }
    return (
        <div className=''>
            <div className="text-white bg-gradient-to-r from-blue-500 to-purple-600 h-60 flex flex-col justify-center items-center gap-4 rounded-2xl">
                <h1 className='text-4xl'>Welcome to Dev Story</h1>
                <button onClick={handelClick} className=' rounded  font-bold p-4 cursor-pointer hover:bg-black duration-200 bg-blue-400'>Share-story</button>
            </div>
        </div>
    );
};

export default Banner;