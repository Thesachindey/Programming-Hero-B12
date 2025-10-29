import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playGroundImg from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-5'>
           
            <h2 className='font-bold mb-5'>Q Zone</h2>
            <div className="space-y-5">
                <img src={swimmingImg} alt="swimming-img" />
                <img src={classImg} alt="class-img" />
                <img src={playGroundImg} alt="playground-img" />

            </div>
          
        </div>
    );
};

export default QZone;