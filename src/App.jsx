import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import AnimeDetails from './pages/Details/AnimeDetails'
import Error from './pages/error/Error'

// import components
import Navbar from './components/navbar/Navbar'
import TopAnimePage from './pages/top anime/TopAnimePage'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/anime/:id' element={<AnimeDetails />} />
          <Route path='/topanimes' element={<TopAnimePage />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
