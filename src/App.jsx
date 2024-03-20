import React from 'react'
import Product from './Components/Product'
import Nav from './Components/Nav'
import Carts from './Components/Carts'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lavi from './Components/lavi'



const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Carts />} />

        <Route path='/lavi' element={<Lavi />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App

