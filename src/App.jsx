import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Header'
import Home from './components/Home'
import Instruments from './components/Instruments'


const App = () => (
  <div >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/instruments' element={<Instruments/>} />
    </Routes>
  </div>
)

export default App
