import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import { Suspense, useState } from 'react';
 import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// fetching players data
const fetchPlayers = fetch('/players.json').then(res => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(14000000);// initial available balance
  const [purchasedPlayers, setPurchasedPlayers] = useState([]); // purchased players list state

  const removePlayer = (p) => {
    const remainingPlayers = purchasedPlayers.filter(player => player.id !== p.id);
    setPurchasedPlayers(remainingPlayers);
    setAvailableBalance(availableBalance + p.price);
  }

  return (
    < >

      <Navbar availableBalance={availableBalance}></Navbar>

      {/* active players and selected players header */}
      <div className=' max-w-[1200px] mx-auto mt-10 p-4 text-center flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>
          {
            toggle ? 'Available Players' : `Selected Players (${purchasedPlayers.length}/6)`
          }
        </h1>
        <div className='flex justify-center '>
          <button onClick={() => setToggle(true)} className={` cursor-pointer px-4 py-2 border-gray-400 border-1  border-r-0 rounded-r-[0px] rounded-l-xl font-semibold ${toggle && "bg-[#E7FE29]"
            }`}>Available</button>
          <button onClick={() => setToggle(false)} className={`cursor-pointer px-4 py-2 border-gray-400 border-1 border-l-0 rounded-l-[0px] rounded-r-xl font-semibold ${toggle === false && "bg-[#E7FE29]"} `}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {/* available players */}

      {/* selected players */}
      {
        toggle
          ?
          <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
            <AvailablePlayers playersPromise={fetchPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></AvailablePlayers>
          </Suspense>
          :
          <SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer}></SelectedPlayers>
      }

      <ToastContainer />

    </>
  )
}

export default App
