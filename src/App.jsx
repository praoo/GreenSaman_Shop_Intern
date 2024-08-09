import React from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Account from './Pages/Account'
import TopHeader from './Components/TopHeader'
import Header from './Components/Header'
import Product from './Pages/Product'
import Footer from './Components/Footer'
import Newsletter from './Components/Newsletter'

function App() {

  return (
    <>
      <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/wishlist" element={ <Wishlist /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/account" element={ <Account /> } />
        <Route path="/product" element={ <Product /> } />
        <Route path="/product/:id" element={ <Product /> } />


        
      </Routes>
      <Newsletter />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
