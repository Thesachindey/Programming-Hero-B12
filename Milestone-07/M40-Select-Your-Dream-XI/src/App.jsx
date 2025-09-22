import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import { Suspense } from 'react';

// fetching players data
const fetchPlayers = fetch('/players.json').then(res => res.json());

function App() {



  return (
    < >

      <Navbar></Navbar>

      {/* available players */}
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <AvailablePlayers playersPromise={fetchPlayers}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}

    </>
  )
}

export default App
