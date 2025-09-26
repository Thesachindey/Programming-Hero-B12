import React from 'react';
import userImg from '../../assets/user.png';
import flagIcon from '../../assets/flag-icon.png';
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers, mainData, setMainData }) => {

    // handle select player button click
    const handleSelect = (player) => {
        // check already selected
        if (purchasedPlayers.some(p => p.id === player.id)) {
            toast("You already selected this player!!");
            return;
        }

        // check balance
        if (availableBalance < player.price) {
            toast('Insufficient balance to purchase this player.');
            return;
        }

        // check player limit
        if (purchasedPlayers.length >= 6) {
            toast('You already selected 6 players.');
            return;
        }

        // deduct balance
        setAvailableBalance(availableBalance - player.price);

        // add player
        setPurchasedPlayers([...purchasedPlayers, player]);

        // remove from mainData
        // setMainData(mainData.filter(res => res.id !== player.id));

        toast(`${player.name} has been purchased!`);
    };

    return (
        //player card component
        <div className="card bg-white-100 shadow-sm p-4">
            <figure>
                <img
                    className="w-full h-48 object-top object-cover"
                    src={player.image}
                    alt={player.name}
                />
            </figure>
            <div className="mt-4">
                <div className="flex items-center gap-2">
                    <img className="w-4" src={userImg} alt="user-img" />
                    <h2 className="card-title">{player.name}</h2>
                </div>

                <div className="flex justify-between mt-4 border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-2">
                        <img className="w-4" src={flagIcon} alt="flag-icon-img" />
                        <h2 className="font-medium">{player.country}</h2>
                    </div>
                    <button className="btn bg-gray-100 text-black border-gray-50 shadow">
                        {player.role}
                    </button>
                </div>

                <div className="flex justify-between mt-4 font-bold">
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>

                <div className="flex justify-between mt-4">
                    <span className="font-bold">{player.battingStyle}</span>
                    <span>{player.bowlingStyle}</span>
                </div>

                <div className="card-actions flex justify-between items-center mt-4">
                    <p className="font-bold">Price: ${player.price}</p>

                    {/* player selection button */}
                    <button
                        disabled={purchasedPlayers.some(p => p.id === player.id)}//if it's true
                        onClick={() => handleSelect(player)}
                        className="btn bg-gray-100 text-black border-gray-50 shadow"
                    >
                        {purchasedPlayers.some(p => p.id === player.id) ? 'Selected' : 'Choose Player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
