import React, { useEffect, useState } from "react";
import "../Styles/CategCss.css";
import "../Styles/ProdFilt.css";
import '../Styles/HomeSlide.css'
import MonthlyPopular from "./MonthlyPopular";
import MonthlyTrend from "./MonthlyTrend";
import MonthlyFeatured from "./MonthlyFeatured";

const MonthlySell = () => {
    const [filter , setFilter] = useState('featured');
    
  
    
  return (
    <>
      <section className="monthly-sell-comp">
        <div className="common-container">

          <div className="categ-flex-bx categ-flex-bx3">
            <h6>
              {" "}
              <span>Monthly</span> Best Sell{" "}
            </h6>

            <div className="left-prod-filt-btns-flex">
              <button
                className={
                  filter === "featured"
                    ? "prod-filt-btn prodfiltbtnactive"
                    : "prod-filt-btn"
                }
                onClick={() => setFilter("featured")}
              >
                Featured
              </button>

              <button 
                className={
                  filter === "popular"
                    ? "prod-filt-btn prodfiltbtnactive"
                    : "prod-filt-btn"
                }
                onClick={() => setFilter("popular")}
              >
                Popular
              </button>

              <button
                className={
                  filter === "trending"
                    ? "prod-filt-btn prodfiltbtnactive"
                    : "prod-filt-btn"
                }
                onClick={() => setFilter("trending")}
              >
                Trending
              </button>
            </div>
          </div>

          <div className="monthly-sell-main-grid-bx">

            <div className="month-sell-box ">
                <div className="month-sell-img">
                    <img src="/images/banner-9.jpg" alt="" />
                </div>

                <div className="mini-slide-info ofer-slide-info mont-sell-info">

                    <span>Woman Area</span>
                    <h6>Save 17% on Clothing</h6>

                <button className="shop-btn shop-btn-white">
                            Shop Now 
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
                    
                </div>
                
            </div>


          { filter === 'featured' ?  <MonthlyFeatured /> : null} 
                
            { filter === 'popular' ? <MonthlyPopular /> : null }

            { filter === 'trending' ? <MonthlyTrend /> : null }
            

          

            {/*  */}
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default MonthlySell;
