import React from 'react';
import { NavLink } from 'react-router';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav flex items-center justify-center text-accent gap-6">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="login-btn flex gap-4 items-center">
                <img className='w-8' src={userIcon} alt="user-icon" />
                <button className='btn btn-primary px-10 text-base-100'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;