import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const playersData = use(playersPromise);
    // console.log(playersData);
    return (
        <div className='max-w-[1200px] mx-auto mt-10 grid grid-cols-1  md:grid-cols-3 gap-6'>

            {
                // w-96 removed fixed width from card
                playersData.map((player, i) => <PlayerCard key={i} player={player} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></PlayerCard>)
            }



        </div>
    );
};

export default AvailablePlayers;