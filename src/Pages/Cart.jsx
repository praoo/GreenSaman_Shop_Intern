import React from 'react'
import CartComp from '../Components/CartComp'
import '../Styles/CartItem.css'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  return (
    <>
     <div className="breadcrum-bx">
        <div className="common-container breadcrum-flex">
          <NavLink to="/">Home</NavLink>
          <span>Shop</span>
          <span> Cart </span>
        </div>
      </div>
    
      <CartComp />
    </>
  )
}

export default Cart
