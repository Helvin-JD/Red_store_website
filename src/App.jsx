import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Products' element={ <Products/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
