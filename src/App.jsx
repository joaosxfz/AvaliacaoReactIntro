import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Ex01 from './pages/Ex01'
import Ex02 from './pages/Ex02'
import Header from './components/Footer'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Home />
    <Header />
    <Footer />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/ex01' element={<Ex01 />} />
        <Route path='/ex02' element={<Ex02 />} />
      </Routes>
      </>
  )
}

export default App


// 15 and 7