import './App.css'
import DaisyHero from './components/daisyHero/DaisyHero'
import DaisyNav from './components/daisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'


function App() {


  return (
    <>
      <header>
        <Navbar />
        <DaisyNav />

        {/* ---------- */}

        <DaisyHero />

      </header>

    </>
  )
}

export default App
