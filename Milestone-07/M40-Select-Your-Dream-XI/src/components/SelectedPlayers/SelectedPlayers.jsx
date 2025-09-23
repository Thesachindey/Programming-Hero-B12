import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers,removePlayer }) => {

    return (
        <div className='max-w-[1200px] mx-auto mt-10 p-4 text-center'>
            {
                purchasedPlayers.map((player, i) => <SelectedCard  key={i} player={player} removePlayer={removePlayer}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;