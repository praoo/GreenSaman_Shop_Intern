import React from 'react'
import '../Styles/Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className="footer-comp">
        <div className="common-container">

            <div className="footer-grid grid">

                <div className="left-foter-main-bx">

                    <div className="fot-logo">
                        <img src="/images/nav-logo.svg" alt="" />
                    </div>

                    <div className="foter-main-info-bx">

                        <h6 className='text-f'>Contact</h6>

                        <p> <span>Address :</span>  562 Wellington Road, Street 32, San Francisco</p>
                        <p> <span>Phone :</span>  +01 2222 365 /(+91) 01 2345 6789</p>
                        <p> <span>Hours :</span>  10:00 - 18:00, Mon - Sat</p>

                        

                    </div>

                    <h6 className='text-f text-f2'>Follow Us</h6>

                    <div className="follow-soc-link-flex-bx">

                        <NavLink to="#"><i class="fa-brands fa-facebook-f"></i></NavLink>
                        <NavLink to="#"><i class="fa-brands fa-x-twitter"></i></NavLink>
                        <NavLink to="#"><i class="fa-brands fa-instagram"></i></NavLink>
                        <NavLink to="#"><i class="fa-brands fa-whatsapp"></i></NavLink>
                        <NavLink to="#"><i class="fa-brands fa-youtube"></i></NavLink>
                        
                    </div>
                    
                </div>

                <div className="right-footer-list-grid-bx grid">

                    <div className="fot-list-bx">
                        <h5>About</h5>

                        <div className="fot-list">
                            <li> <NavLink to="#">About Us</NavLink> </li>
                            <li> <NavLink to="#">Delivery Information</NavLink> </li>
                            <li> <NavLink to="#">Privacy Policy</NavLink> </li>
                            <li> <NavLink to="#">Terms & Conditions</NavLink> </li>
                            <li> <NavLink to="#">Contact Us</NavLink> </li>
                            <li> <NavLink to="#">Support Center</NavLink> </li>

                        </div>
                    </div>


                    <div className="fot-list-bx">
                        <h5>My Account</h5>

                        <div className="fot-list">
                            <li> <NavLink to="#">Sign In</NavLink> </li>
                            <li> <NavLink to="#">View Cart</NavLink> </li>
                            <li> <NavLink to="#">My Wishlist</NavLink> </li>
                            <li> <NavLink to="#">Track My Order</NavLink> </li>
                            <li> <NavLink to="#">Help</NavLink> </li>
                            <li> <NavLink to="#">Order</NavLink> </li>

                        </div>
                    </div>

                    <div className="fot-list-bx">
                        <h5>Install App</h5>
                        <p>From App Store or Google Play</p>

                        <div className="app-playstore-img-grid-bx grid grid-two-col ">

                            <button className="inst-img-btn">
                                <img src="/images/app-store.jpg" alt="" />
                            </button>

                            
                            <button className="inst-img-btn">
                                <img src="/images/app-store.jpg" alt="" />
                            </button>
                            
                        </div>

                        <p>Secured Payment Gateways</p>

                    <div className="payment-method-img">
                        <img src="/images/payment-method.png" alt="" />
                    </div>
                      
                    </div>
                    
                </div>
                
            </div>
            
        </div>
      </section>
    </>
  )
}

export default Footer
