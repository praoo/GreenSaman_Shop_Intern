import React, { useState } from 'react'
import "../Styles/CategCss.css";
import "../Styles/ProdFilt.css";
import '../Styles/HomeSlide.css'
import '../Styles/BlogCss.css'
import BlogDet from '../JsonData/BlogData';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    const [blogData , setBlogData] = useState(BlogDet);
    
  return (
    <>


    <section className="blog-comp">
        <div className="common-container">

            <div className="blog-grid grid grid-two-col">

                <div className="left-blog-grid-det-bx">

                <div className="categ-flex-bx comn-heading blog-heading categ-flex-bx3">
            <h6>
              {" "}
              <span>From</span> Blog
            </h6>
            </div>

            <div className="blog-main-det-bx">

                {blogData.map((elem,id) => {
                    return (
                        <>

                        <div className="blog-box" key={id}>
                            <div className="blog-img">
                                <img src={elem.blogImg} alt="" />
                            </div>

                            <div className="blog-det-bx">
                                <p> {elem.blogtitle} </p>
                                <h5> {elem.blogText} </h5>

                                <div className="blog-date-view-flex-bx">
                                    <div className="date-view-bx">
                                    <span> {elem.date} </span>
                                    <span> {elem.views} </span>
                                    </div>

                                    <NavLink to="#">Read More</NavLink>
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                        </>
                    )
                })}
                
            </div>

                    
                </div>
                

                <div className="right-blog-grid-main-bx grid grid-two-col">

                    <div className=" home-mini-slider-bx blog-box-two">
                        <div className="blog-two-img">
                            <img src="/images/blog-banner-1.jpg" alt="" />
                        </div>
                        <div className="mini-slide-info">
                        <span> Accessories</span>
                        <h6> Save 17% on Autumn Hat </h6>

                        <button className="shop-btn">
                            Shop Now 
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
                        
                    </div>
                    </div>

                    <div className="right-two-mini-blog-main-bx">

                        <div className="home-mini-slider-bx blog-box-two blog-mini-bx">
                            <div className="blog-two-img blog-mini-img">
                                <img src="/images/banner-6.jpg" alt="" />
                            </div>
                            <div className=" blog-mini-info mini-slide-info ofer-slide-info">
                            <span> Big Offer</span>
                        <h6>  Save 20% on Women's socks </h6>

                        <button className="shop-btn">
                            Shop Now 
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
                            </div>
                        </div>

                        <div className="home-mini-slider-bx blog-box-two blog-mini-bx blog-mini-bx2">
                            <div className="blog-two-img blog-mini-img">
                                <img src="/images/banner-7.jpg" alt="" />
                            </div>
                            <div className=" blog-mini-info blog-mini-info2 mini-slide-info ofer-slide-info">
                            <span> Big Offer</span>
                        <h6>  Save 20% on Women's socks </h6>

                        <button className="shop-btn">
                            Shop Now 
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>

                
            </div>

        <div className="shop-today-deal-main">
            
            <div className="shop-today-info">
            <p>Shop Today’s Deals</p>
            <h6>Happy <span>Mother's Day</span> . Big Sale Up to 40%</h6>
            </div>
        </div>
            
            
        </div>
    </section>
    

      
    </>
  )
}

export default Blog
