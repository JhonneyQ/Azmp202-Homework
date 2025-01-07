import { Route, Routes } from 'react-router-dom'
import UserP from './components/user'
import Home from './pages/user/Home'
import Details from './pages/user/Details'
import Favorites from './pages/user/Favorites'
import Basket from './pages/user/Basket'
import Products from './pages/user/products'
import AdminP from './components/admin'
import Dashboard from './pages/admin/dashboard'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<UserP/>}>
          <Route index element={<Home/>}/>
          <Route path='Favorites' element={<Favorites/>}/>
          <Route path='Basket' element={<Basket/>}/>
          <Route path='Products' >
            <Route index element={<Products/>}/>
            <Route path=':id' element={<Details/>}/>
          </Route>
        </Route>


        <Route path='/admin' >
          <Route index element={<AdminP/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
