import React, { useContext, useState } from 'react'
import '../Styles/Header.css'
import { NavLink } from 'react-router-dom'
import LoginComp from './LoginComp';
import { ShopContext } from '../Context';

const Header = () => {
  const {getTotalCartItem , wishListNum} =  useContext(ShopContext);
  const [navActive , setNavActive] = useState(1);
  const [loginPopup , setLoginPopup] = useState(false);
  const [nav , setNav] = useState(false);

  const listenScroll = () => {

    let scrollValue =  document?.documentElement?.scrollTop ;
    scrollValue > 400 ? setNav(true) : setNav(false);
    
  }


  window.addEventListener("scroll" , () => listenScroll())
  
  return (
    <>
      <section className="header-comp">
        <div className="common-container">

          <div className="header-flex-bx">

            <div className="header-left-box header-left-box2">

            <div className="left-header-logo">
              <img src="/images/nav-logo.svg" alt="" />
            </div>

            <div className="center-header-search-bx">
            <ion-icon name="search-outline"></ion-icon>
              <input type="text" className='search' name='search' id='search' placeholder='Search...' autoComplete='off' />
            </div>
            </div>

            <div className="right-header-cart-wish-acnt-flex-bx">

              <button className="swtch-page-btn">
              <ion-icon name="person-outline"></ion-icon>
              <div className="num-bx">1</div>
              </button>

          <NavLink to="/wishlist">
              <button className="swtch-page-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <div className="num-bx">{wishListNum}</div>
              </button>
              </NavLink>

              <NavLink to="/cart">
              <button className="swtch-page-btn">
              <ion-icon name="cart-outline"></ion-icon>
              <div className="num-bx">{getTotalCartItem()} </div>
              </button>
              </NavLink>
              
            </div>
            
          </div>
          
        </div>
      </section>

      <header className={nav ===  true ? "header-comp2 sticky" : "header-comp2"}>
        <div className="common-container">

          <div className={"header-flex-bx header-flex-bx2"}>

            <div className="header-left-box">

            <div className="left-categ-filt-bx">
              <button className="categ-filt-btn">
              <i class="fa-solid fa-table-cells-large"></i>
              Browse Categories
              </button>

              <div className="left-header-logo nav-logo">
              <img src="/images/nav-logo.svg" alt="" />
            </div>
            </div>

           

            <div className="center-navabr">
              <div className="navbar">
                <nav className="nav">
                  <div className="nav-lists">
                    <li className={navActive == 1 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('1')}> <NavLink to="/" className="nav-links">Home</NavLink> </li>
                    <li className={navActive == 2 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('2')}> <NavLink to="/about" className="nav-links">About</NavLink> </li>
                    <li className={navActive == 3 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('3')}> <NavLink to="/shop" className="nav-links">Shop</NavLink> </li>
                    <li className={navActive == 4 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('4')}> <NavLink to="/blog" className="nav-links">Blog</NavLink> </li>
                    <li className={navActive == 5 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('5')}> <NavLink to="/gallery" className="nav-links">Gallery</NavLink> </li>
                    <li className={navActive == 6 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => {setNavActive('6') ,window.scrollY(0,0)}}> <NavLink to="/cart" className="nav-links">My Account</NavLink> </li>
                    <li className={navActive == 7 ? 'nav-lis nlinkactive' : 'nav-lis'} onClick={() => setNavActive('7')}> <NavLink to="/contact" className="nav-links">Contact</NavLink> </li>

                  </div>
                </nav>
              </div>
            </div>
            </div>

            {/* <div className="help-num-bx">
            <ion-icon name="headset-outline"></ion-icon>
            <p>Hotline <span> 1900 - 888 </span></p>
            </div> */}

            <button className="login-btn" onClick={() => setLoginPopup(true)}>
              Login
            </button>

            <div className="right-header-cart-wish-acnt-flex-bx nav-w-c-u-btns">

<button className="swtch-page-btn">
<ion-icon name="person-outline"></ion-icon>
<div className="num-bx">1</div>
</button>

<NavLink to="/wishlist">
<button className="swtch-page-btn">
<ion-icon name="heart-outline"></ion-icon>
<div className="num-bx">{wishListNum}</div>

</button>
</NavLink>

<NavLink to="/cart">
<button className="swtch-page-btn" onClick={ () => window.scrollY(0,0)}>
<ion-icon name="cart-outline"></ion-icon>
<div className="num-bx">{getTotalCartItem()} </div>
</button>
</NavLink>
</div>
            
          </div>
          
        </div>
      </header>

     {loginPopup === true ?  <LoginComp onClickClose={() => setLoginPopup(false)} /> : null}  
      
    </>
  )
}

export default Header
