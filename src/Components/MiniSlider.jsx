import React, { useEffect, useState } from "react";
import AccesData from "../JsonData/AccesData";
import OfferSlide from "./OfferSlide";

const MiniSlider = () => {
    const [miniSlide , setMiniSlide] = useState(1);

    const nextSlide =  () => {

        if(miniSlide !== AccesData.length){
            setMiniSlide(miniSlide + 1)
        }else if(miniSlide === AccesData.length){
            setMiniSlide(1)
        }
        
    }

    useEffect(() => {

        const autoPlay = setInterval(() => {
                nextSlide()
        }, 4000);

        return () => clearInterval(autoPlay);
        
    }, [miniSlide])
    
  return (
    <>
      <div className="home-slider-mini-main">
        {AccesData.map((elem, index) => {
          return (
            <>
              <div className={miniSlide ==  index + 1 ? "home-mini-slider-bx minislideactive" : "home-mini-slider-bx"}>
                    <div className="mini-slide-img">
                        <img src={elem.img} alt="" />
                    </div>
                    <div className="mini-slide-info">
                        <span> {elem.smtext} </span>
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
      
      <OfferSlide />
    </>
  );
};

export default MiniSlider;
