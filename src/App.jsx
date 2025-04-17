import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { GameProvider } from './store/GameStore'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GameProvider>
        <Home />
      </GameProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
