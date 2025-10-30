import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
    return (
        <div className=' bg-base-200 min-h-screen'>
            <div className='w-11/12 mx-auto '>
                <header className='py-5'>
                    <Navbar />
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AuthLayouts;