import React from 'react';

const SelectedCard = ({player,removePlayer }) => {
    

const handelRemove=()=>{
    removePlayer(player);
}

    return (
        <div>
            <div className="border-1 border-gray-500 rounded-2xl flex justify-between items-center p-4 mb-4">
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16 object-cover rounded-2xl' src={player.image} alt="" />
                    <div className='text-left'>
                        <h2 className='font-bold text-xl'>{player.name}</h2>
                        <p className='text-gray-600 text-xs'>{player.battingStyle}</p>
                    </div>
                </div>
                <div onClick={handelRemove}>
                    <img src="https://i.ibb.co.com/whJTfLgp/Frame.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;