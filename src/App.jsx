import { useState,useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Details from './Pages/Details'





function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/shop/:id'element={<Details/>} />
    </Routes>
    </>
  )
}

export default App
