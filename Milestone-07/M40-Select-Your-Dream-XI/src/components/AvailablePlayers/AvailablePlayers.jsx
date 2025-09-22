import React, { use } from 'react';
import userImg from '../../assets/user.png';
import flagIcon from '../../assets/flag-icon.png';
const AvailablePlayers = ({ playersPromise }) => {
    const playersData = use(playersPromise);
    console.log(playersData);
    return (
        <div className='max-w-[1200px] mx-auto mt-10'>
            <div className="card bg-white-100 w-96 shadow-sm p-4">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="mt-4">

                    <div className='flex items-center gap-2'>
                        <img className='w-4' src={userImg} alt="user-img" /> <h2 className="card-title">Virat Kohli</h2>
                    </div>

                    <div className='flex justify-between mt-4 border-b-1 border-gray-200 pb-6'>

                        <div className='flex items-center gap-2'>
                            <img className='w-4' src={flagIcon} alt="flag-icon-img" />
                            <h2 className="">India</h2>
                        </div>

                        <button className='btn bg-gray-100 text-black border-gray-50'>All rounder</button>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;