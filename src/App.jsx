import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Ex01 from './pages/Ex01'
import Ex02 from './pages/Ex02'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ex01' element={<Ex01 />} />
        <Route path='/ex02' element={<Ex02 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App