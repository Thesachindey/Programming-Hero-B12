import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch('../public/bottles.json').then(res => res.json());

function App() {

  return (
    <>

      <h1>Buy awesome water bottles</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>

    </>
  )
}

export default App
