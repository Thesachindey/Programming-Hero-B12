import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    const links = <>
        <Link className='p-4 bg-gray-800 rounded-2xl' href="/dashboard/add-story">Add Story</Link>
        <Link className='p-4 bg-gray-800 rounded-2xl' href="/dashboard/my-profile">My Profile</Link>
        <Link className='p-4 bg-gray-800 rounded-2xl' href="/dashboard/settings">Settings</Link>
    </>
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>
            <div className="col-span-3 border-r-1 p-4">
                <h1>Navigation</h1>
                <div className="mt-4 flex flex-col space-y-3">
                    {links}
                </div>
            </div>
            <div className="col-span-9 ">{children}</div>
        </div>
    );
};

export default DashboardLayout;