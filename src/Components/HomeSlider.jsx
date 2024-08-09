import React, { useState } from "react";
import SliderData from "../JsonData/HomeSliderData";
import '../Styles/HomeSlide.css';
import MiniSlider from "./MiniSlider";

const HomeSlider = () => {
    const [slideIndex , setSlideIndex] = useState(1);

    const slideNext = () => {

        if(slideIndex !== SliderData.length){
            setSlideIndex(slideIndex + 1)
        } else if(slideIndex === SliderData.length){
            setSlideIndex(slideIndex)
          
        }
        
    }

    const slidePrev = () => {

        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1){
            setSlideIndex(SliderData.length)

        }
        
    }
    
    
  return (
    <>
      <section className="home-slider-comp">
        <div className="common-container">
          <div className="home-slider-grid-main">
            <div className="home-slide-main-bx">
              {SliderData.map((curelem, index) => {
                return (
                  <>
                    <div className={ slideIndex === index + 1 ? "home-slider-bx slideactive" : "home-slider-bx"}>
                        
                        <div className="slide-img">
                            <img src={curelem.slideImg} alt="" />
                        </div>
                        
                      <div className="home-slide-info">
                        <span> {curelem.minitext} </span>
                        <h1> {curelem.heading} </h1>
                        <h2> {curelem.maintext} </h2>
                        <p> {curelem.para} </p>

                        <button className="shop-now-btn">
                            Shop Now
                        </button>

                      </div>

                    </div>
                  </>
                );
              })}
              
              <button className="slid-btn slide-prev" onClick={() => slidePrev()}>
              <i class="fa-solid fa-angle-left"></i>
              </button>

              <button className="slid-btn slide-next" onClick={() => slideNext()}>
              <i class="fa-solid fa-angle-right"></i>
              </button>
              
            </div>

            <div className="right-home-slider-mini-grid-bx">

               <MiniSlider />
                
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSlider;
