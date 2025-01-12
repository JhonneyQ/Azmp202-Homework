import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Client from './components/client'
import Home from './pages/client/home'
import Favorites from './pages/client/favorites'
import Details from './pages/client/details'
import Admin from './components/admin'
import Dashboard from './pages/admin/dashboard'
import Add from './pages/admin/add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Client />}>
          <Route index element={<Home />}/>
          <Route path='details/:id' element={<Details/>} />
          <Route path="favorites" element={<Favorites />} />
        </Route>

        <Route path='/admin' element={<Admin/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add' element={<Add/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
