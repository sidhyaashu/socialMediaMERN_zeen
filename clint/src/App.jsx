import React from 'react'
import './App.scss'
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'

import { Routes,Route } from "react-router-dom";

const App = () => {


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App
