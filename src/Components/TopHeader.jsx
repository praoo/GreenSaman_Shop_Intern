import React from 'react'
import '../Styles/Topheader.css'
import { NavLink } from 'react-router-dom'

const TopHeader = () => {
  return (
    <>

    <section className="top-header-comp">
        <div className="common-container">

            <div className="top-header-flex-bx">

                <div className="left-tp-hedr-links-flex">

                    <li> <NavLink to="#"> The Green Saman Shop </NavLink> </li>
                    <li> <NavLink to="#"> Kabadpe </NavLink> </li>
                    <li> <NavLink to="#"> ClimStripe Shift </NavLink> </li>
                    <li> <NavLink to="#"> Climconnect </NavLink> </li>
                    
                </div>

                <div className="right-apps-link-flex-bx">

                    <div className="app-img-bx">
                        <img src="/images/app-bg.png" alt="" />
                    </div>

                    <div className="app-img-bx">
                        <img src="/images/app-bg-2.png" alt="" />
                    </div>

                    <span>Download Now</span>
                    
                </div>
                
            </div>
            
        </div>
    </section>

    
    </>
  )
}

export default TopHeader
