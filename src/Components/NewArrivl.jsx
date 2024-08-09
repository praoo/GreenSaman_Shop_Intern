import React, { useContext, useEffect, useState } from "react";
import NewArrvlData from "../JsonData/NewArrvl";
import "../Styles/ProdFilt.css";
import "../Styles/CategCss.css";
import ProdItem from "./ProdItem";
import { ShopContext } from "../Context";
import ProductDetPopup from "./ProductDetPopup";

const NewArrivl = () => {
  const [arrvlData, setArrvlData] = useState(NewArrvlData);
  const {AllProdData} = useContext(ShopContext);
  const [selectedProduct , setSelectedProduct] = useState(null) ;

  useEffect(() => {
    const servSlider = document.querySelectorAll(".arrivl-slider");

    const sliderInit = function (currentSlider) {
      const prevslideBtn = currentSlider.querySelector(".prev");
      const nextslideBtn = currentSlider.querySelector(".next");
      const servSliderContainer = currentSlider.querySelector(
        ".arrivl-slider-container"
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
  
  const handleViewClick = (productId) => {

    // console.log(productId);

    const selectedValue =  AllProdData.find((elem,id) => elem.id === productId);
    setSelectedProduct(selectedValue);
}

  return (
    <>
      <section className="new-arrvl-comp">
        <div className="common-container">
          <div className="categ-flex-bx">
          <div className="categ-flex-bx comn-heading mb-5">
            <p>A curated collection of our best selling items</p>
            <h6>
              {" "}
              <span>New</span> Arrivals
            </h6>
          </div>
          </div>

          <div className="categ-slider-main-bx">
            <div className="arrivl-slider">
              <div className="arrivl-slider-container">
                {arrvlData.map((curElem, index) => {
                  return (
                    <>
                      <div className="slider-items slider-items2">
                        <ProdItem
                          id={curElem.id}
                          curentProd={curElem}
                          frontImg={curElem.prodFront}
                          backImg={curElem.prodBack}
                          prodName={curElem.prodName}
                          prodTitle={curElem.miniText}
                          price={curElem.price}
                          rating={curElem.rating}
                          tagname={curElem.tag}
                          percent={curElem.percent}
                          tagType={curElem.tagtype}
              onClickOpen={() => handleViewClick(curElem.id)}
                          
                        />
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="slider-btns-flex-bx">
                <button className="slide-btn prev slider-control ">
                  <i class="fa-solid fa-angle-left"></i>
                </button>

                <button className="slide-btn next slider-control ">
                  <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {selectedProduct  && <ProductDetPopup productData={selectedProduct}  onClose={() => setSelectedProduct(null)} />  }


    </>
  );
};

export default NewArrivl;
