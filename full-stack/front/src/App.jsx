import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Client from './components/client'
import Home from './pages/client/home'
import Favorites from './pages/client/favorites'
import Details from './pages/client/details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Client/>}>
          <Route index element={<Home/>}/>
          <Route path='details' element={<Details/>}/>
          <Route path="favorites" element={<Favorites/>}/>
          
        </Route>
      </Routes>
    </>
  )
}

export default App
