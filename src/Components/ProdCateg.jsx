import React, { useEffect, useState } from "react";
import CategProdData from "../JsonData/CategData";
import "../Styles/CategCss.css";

const ProdCateg = () => {
  const [categData, setCategData] = useState(CategProdData);


  useEffect(() => {
    const servSlider = document.querySelectorAll(".categ-slider");

    const sliderInit = function (currentSlider) {
      const prevslideBtn = currentSlider.querySelector(".prev");
      const nextslideBtn = currentSlider.querySelector(".next");
      const servSliderContainer = currentSlider.querySelector(
        ".categ-slider-container"
      );

      const totalSliderVisibleItems = Number(
        getComputedStyle(currentSlider).getPropertyValue("--slider-items")
      );
      const totalSliderItems =
        servSliderContainer.childElementCount - totalSliderVisibleItems;
        let currentSliderPos = 0;

      const sliderservNext = function () {

        currentSliderPos++;

        servSliderContainer.style.transform = `translateX(-${servSliderContainer.children[currentSliderPos].offsetLeft}px)`;
          if (currentSliderPos >= totalSliderItems) {
            nextslideBtn.classList.add("hiddenBtn");
          }
          prevslideBtn.classList.remove("hiddenBtn");
   
      };

      nextslideBtn.addEventListener("click", sliderservNext);

      const sliderservPrev = function () {

        currentSliderPos--;

        servSliderContainer.style.transform = `translateX(-${servSliderContainer.children[currentSliderPos].offsetLeft}px)`;
        if (currentSliderPos <= 0) {
              prevslideBtn.classList.add("hiddenBtn");
            }
            nextslideBtn.classList.remove("hiddenBtn");
        
      
      };

      prevslideBtn.addEventListener("click", sliderservPrev);
    };

    for (let i = 0; i < servSlider.length; i++) {
      sliderInit(servSlider[i]);
    }
  }, []);

  return (
    <>
      <section className="categ-comp">
        <div className="common-container">
          <div className="categ-flex-bx">

          <div className="categ-flex-bx comn-heading mb-5">
            <p>A curated collection of our best selling items</p>
            <h6>
              {" "}
              <span>Popular</span> Categories
            </h6>
          </div>

          
          </div>

          <div className="categ-slider-main-bx">
            <div className="categ-slider">
              <div className="categ-slider-container">
                {categData.map((elem, indx) => {
                  return (
                    <>
                      <div className="slider-items" key={indx}>
                        <div className="categ-box">
                          <div className="categ-img">
                            <img src={elem.img} alt="" />
                          </div>
                          <h6> {elem.cateName} </h6>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="slider-btns-flex-bx">
                <button className="prev slider-control slide-btn">
                  <i class="fa-solid fa-angle-left"></i>
                </button>

                <button className="next slider-control slide-btn">
                  <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProdCateg;
