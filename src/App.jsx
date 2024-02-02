import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Header'
import Home from './components/Home'
import Instruments from './components/Instruments'
import Accounts from './components/Account'
import { AdminControl } from './components/AdminControl'

const App = () => (
  <div >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/instruments' element={<Instruments />} />
      <Route path='/accounts' element={<Accounts/>}/>
      <Route path='/admin' element={<AdminControl/>}/>
    </Routes>
  </div>
)

export default App
