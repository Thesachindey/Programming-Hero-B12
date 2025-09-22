import React from 'react';
import logo from '../../assets/logo.png';
import coinPng from '../../assets/Currency.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto  ">
                <div className="flex-1">
                    <a className=" text-xl">
                        <img className='w-[60px]' src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex gap-3 items-center">
                    <span>6000000000</span>
                    <span>Coin</span>
                    <img src={coinPng} alt="Coin" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;