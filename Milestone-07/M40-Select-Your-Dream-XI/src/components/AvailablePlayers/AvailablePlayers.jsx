

import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayers = ({ mainData, setMainData, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    // const playersData = use(playersPromise);
    // // console.log(playersData);
    // const[mainData,setMainData]= useState(playersData);
    return (
        <div className='max-w-[1200px] mx-auto mt-10 grid grid-cols-1  md:grid-cols-3 gap-6'>

            {
                // w-96 removed fixed width from card
                mainData.map((player, i) => <PlayerCard key={i} player={player} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} mainData={mainData} setMainData={setMainData}></PlayerCard>)
            }



        </div>
    );
};

export default AvailablePlayers;