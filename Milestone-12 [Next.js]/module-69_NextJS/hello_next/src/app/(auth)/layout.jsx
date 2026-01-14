import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='flex min-h-screen gap-5'>
            <div className="flex-2 ">
               {children}
            </div>
            <div className="flex-1 bg-blue-500 flex justify-center items-center p-10 rounded-2xl text-4xl font-bold italic"> Welcome to authentication page😊🐳.</div>
        </div>
    );
};

export default layout;