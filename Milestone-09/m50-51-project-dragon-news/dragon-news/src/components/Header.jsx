import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
import { Link } from 'react-router';
const Header = () => {
    return (
        <div className='text-center'>
            <div className="flex flex-col justify-center items-center gap-4 p-6">
                <Link to={'/'}>
                <img className='w-104' src={logo} alt="Dragon News Logo" />
                </Link>
                <p className='text-accent'>Journalism Without Fear or Favour</p>
                <p className='font-semibold text-accent'>{ format(new Date(),"EEEE, MMMM dd, yyyy" )}</p>
            </div>
        </div>
    );
};

export default Header;