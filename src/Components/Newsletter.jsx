import React from 'react'
import '../Styles/BlogCss.css'
const Newsletter = () => {
  return (
    <>

    <section className="newsletter-comp">
        <div className="common-container">

            <div className="newslet-main-bx">

                <div className="left-newslet-text">
                    <img src="/images/icon-email.svg" alt="" />
                <h6>Sign up to Newsletter</h6>

                </div>
                

            <div className="right-newslet-bx">

                <p>...and receive$25 coupon for first shopping.</p>

                <div className="email-bx">
                    <div className="email-inpt-bx">
                        <input type="email" id='email' placeholder='Enter your email' autoComplete='off' />
                    </div>
                    <button className="email-btn">
                        Subscribe
                    </button>
                </div>

            </div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default Newsletter
