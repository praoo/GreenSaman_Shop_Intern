import React from 'react'
import WishListItem from '../Components/WishListItem'
import { NavLink } from 'react-router-dom'

const Wishlist = () => {
  return (
    <>
    <div className="breadcrum-bx">
        <div className="common-container breadcrum-flex">
          <NavLink to="/">Home</NavLink>
          <span>Shop</span>
          <span> WishList </span>
        </div>
      </div>

      <WishListItem />
    </>
  )
}

export default Wishlist
