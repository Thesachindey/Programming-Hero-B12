import React from 'react';

const Title = ({children}) => {
    return (
        <div className='bg-blue-300 text-black p-4 rounded'>
            <h1 className="text-4xl font-bold">
                {children}
            </h1>
        </div>
    );
};

export default Title;