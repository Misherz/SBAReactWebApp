import React from 'react'
// import { useState, useEffect } from 'react'

import './App.css'
// import { getData } from './data/data.mjs'

import Header from './components/Header'
import Footer from './components/Footer'
import MenuItems from './pages/MenuItems'
import AppRoutes from './routes/AppRoutes';



function App() {
 
  
  return (

      <div className='Test'>
        <div><Header /></div>
        <div><MenuItems /></div>
        <AppRoutes />
        <Footer />
      </div>

  )
}

export default App;
