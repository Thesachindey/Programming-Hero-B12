import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        console.log('user trying to log out')
        logOut().then(() => {
            // Sign-out successful.
            alert("You logged out successfully!");
        }).catch((error) => {
            // An error
            console.log(error);
        });
    }

    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex items-center justify-center text-accent gap-6">
                <NavLink className={'py-1 px-3 rounded-lg'} to={"/"}>Home</NavLink>
                <NavLink className={'py-1 px-3 rounded-lg'} to={"/about"}>About</NavLink>
                <NavLink className={'py-1 px-3 rounded-lg'} to={"/career"}>Career</NavLink>
            </div>
            <div className="login-btn flex gap-4 items-center">
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="user-icon" />
                {
                    user ?
                        <button onClick={handleLogOut} className='btn btn-primary px-10'>Log Out</button>
                        :
                        <Link to={'/auth/login'} className='btn btn-primary px-10 text-base-100'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;