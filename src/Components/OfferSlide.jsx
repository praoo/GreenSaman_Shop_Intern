import React, { useEffect, useState } from "react";
import OfferData from "../JsonData/OfferData";

const OfferSlide = () => {
    const [offerSlide,  setOfferSlide] = useState(1);

    const slideNext = () => {

        if(offerSlide !== OfferData.length){
            setOfferSlide(offerSlide + 1)
        }else if(offerSlide === OfferData.length){
            setOfferSlide(1);
        }

    }

        useEffect(() => {

            const autoplay = setInterval(() => {

                slideNext()
                        
            }, 3000)

            return () => clearInterval(autoplay);
            
        }, [offerSlide])
        
  
    
  return (
    <>
      <div className="offer-slide-main-bx home-slider-mini-main">
        {OfferData.map((elem, index) => {
          return (
            <>
              <div key={elem.id} className={offerSlide ==  index + 1 ? "home-mini-slider-bx ofer-slide-bx minislideactive" : "home-mini-slider-bx ofer-slide-bx"}>
                    <div className="mini-slide-img">
                        <img src={elem.img} alt="" />
                    </div>
                    <div className="mini-slide-info ofer-slide-info">
                        <span> {elem.minitext} </span>
                        <h6> {elem.maintext} </h6>

                        <button className="shop-btn">
                            Shop Now 
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </button>
                        
                    </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default OfferSlide;
