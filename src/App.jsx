import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { GameProvider } from './store/GameStore'

function App() {


  return (
    <>
      <Header />
      <GameProvider>
        <Home />
      </GameProvider>
      <Footer />
    </>
  )
}

export default App
