import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop/Shop'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import About from './pages/About/About'
import NewsLetters from './components/NewsLetters/NewsLetters'
import Footer from './components/Footer/Footer'

const App = () => {

  const [cart, setCart] = useState(0)


  return (
    <div>
      <Navbar cart={cart}/>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
        <Route path='/shop' element={<Shop cart={cart} setCart={setCart}/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <NewsLetters/>
      <Footer/>
    </div>
  )
}

export default App
