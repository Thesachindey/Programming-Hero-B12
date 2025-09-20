
import { Suspense } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())

  return (
    <>
      <div >


        <Suspense fallback={<h1>Loading...</h1>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
      </div>
    </>
  )
}

export default App
