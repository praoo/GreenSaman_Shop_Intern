import React, { useState } from 'react'
import '../Styles/BlogCss.css'
import "../Styles/CategCss.css";
import "../Styles/ProdFilt.css";
import '../Styles/HomeSlide.css'
import TopDealData from '../JsonData/TopDeal';
const TopDeal = () => {
    const [salesData , setSalesData] = useState(TopDealData);
    
  return (
    <>

    <section className="top-deal-comp">
        <div className="common-container">

            <div className="top-deal-grid grid">

            <div className="home-mini-slider-bx blog-box-two left-top-deal-banner-img-bx">
                <div className="top-deal-img">
                    <img src="/images/mini-slide-3.jpg" alt="" />
                </div>
                <div className="mini-slide-info top-deal-info">
                    <span>Shoes Zone</span>
                    <h6>Save 17% onAll Items</h6>

                    <button className="shop-btn">
                            Shop Now 
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
                    
                </div>
            </div>

            <div className="right-top-deal-show-prod-grid grid grid-three-col">

                <div className="prod-listing-main-bx">

                    <div className="prod-listing-heading">
                        <h6>Deals & Outlet</h6>
                    </div>

                    <div className="prod-listing-list">

                        {salesData.map((elem,id) => {
                            if(elem.type === "deals"){
                            return (
                                <>

                                <div className="prod-list-bx" key={id}>
                                    <div className="prod-list-img">
                                        <img src={elem.img} alt="" />
                                    </div>
                                    <div className="prod-list-info">
                                        <h6>{elem.Prodname}</h6>
                                        <div className="prod-price-flex">

                                            <span> ₹{elem.price} </span>
                                            <span> {elem.old_price} </span>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                </>
                            )
                            }
                        })}
                        
                    </div>
                    
                </div>


                <div className="prod-listing-main-bx">

<div className="prod-listing-heading">
    <h6>Top Selling
</h6>
</div>

<div className="prod-listing-list">

    {salesData.map((elem,id) => {
        if(elem.type === "seling"){
        return (
            <>

            <div className="prod-list-bx" key={id}>
                <div className="prod-list-img">
                    <img src={elem.img} alt="" />
                </div>
                <div className="prod-list-info">
                    <h6>{elem.Prodname}</h6>
                    <div className="prod-price-flex">

                        <span> ₹{elem.price} </span>
                        <span> {elem.old_price} </span>
                        
                    </div>
                </div>
            </div>
            
            </>
        )
        }
    })}
    
</div>

</div>




<div className="prod-listing-main-bx">

<div className="prod-listing-heading">
    <h6>Hot Releases</h6>
</div>

<div className="prod-listing-list">

    {salesData.map((elem,id) => {
        if(elem.type === "hotsale"){
        return (
            <>

            <div className="prod-list-bx" key={id}>
                <div className="prod-list-img">
                    <img src={elem.img} alt="" />
                </div>
                <div className="prod-list-info">
                    <h6>{elem.Prodname}</h6>
                    <div className="prod-price-flex">

                        <span> ₹{elem.price} </span>
                        <span> {elem.old_price} </span>
                        
                    </div>
                </div>
            </div>
            
            </>
        )
        }
    })}
    
</div>

</div>
                
            </div>

            </div>

            
        </div>
    </section>
      
    </>
  )
}

export default TopDeal
