import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Booknow from '../Components/Booknow'
import Login from '../Pages/Login'
import Admin from '../Components/Admin'
import Checkout from '../Pages/Checkout'

const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/booknow' element={<Booknow/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/book/:id' element={<Checkout/>}/>

        </Routes>
    </div>
  )
}

export default Allroute