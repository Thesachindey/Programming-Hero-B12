import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen max-w-7xl mx-auto'>
            <Navbar/>

            <div className='flex-1  px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
            <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};

export default MainLayout;