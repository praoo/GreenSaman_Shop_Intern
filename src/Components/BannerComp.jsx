import React, { useState } from 'react'
import BannerDataCont from '../JsonData/BannerData';
import '../Styles/HomeSlide.css'

const BannerComp = () => {
    const [bannerData , setBannerData] = useState(BannerDataCont);
  return (
    <>

    <section className="banner-data-comp">
        <div className="common-container">

            <div className="banner-data-grid grid grid-three-col grid-gap">

                {bannerData.map((elem,indx) => {
                    return (
                        <>
      <div className="banner-data-bx" key={indx}>
                    <div className="banner-img">
                        <img src={elem.img} alt="" />
                    </div>
                    <div className="mini-slide-info banner-info">
                        <span> {elem.miniText} </span>
                        <h6> {elem.title} </h6>

                        <button className="shop-btn">
                            Shop Now 
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
                        
                    </div>
                </div>

                        </>
                    )
                })}

          
                
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default BannerComp
