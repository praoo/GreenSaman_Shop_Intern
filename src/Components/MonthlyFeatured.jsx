import React,{ useContext, useEffect, useState } from 'react'
import featureProd from '../JsonData/FeatureProd';
import ProdItemTwo from './ProdItemTwo';
import { ShopContext } from '../Context';
import ProductDetPopup from './ProductDetPopup';
const MonthlyFeatured = () => {
    const [featProd , setFeatProd] = useState(featureProd);
    const {AllProdData} = useContext(ShopContext);
    const [selectedProduct , setSelectedProduct] = useState(null) ;
    
 
    

    useEffect(() => {
      const servSlider = document.querySelectorAll(".featured-slider");
  
      const sliderInit = function (currentSlider) {
        const prevslideBtn = currentSlider.querySelector(".feat-slide-prev");
        const nextslideBtn = currentSlider.querySelector(".feat-slide-next");
        const servSliderContainer = currentSlider.querySelector(
          ".feature-slid-cont"
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

  // const handleViewClick = (getnum) => {

  //   console.log(getnum);
    
  // }

  const handleViewClick = (productId) => {

    // console.log(productId);

    const selectedValue =  AllProdData.find((elem,id) => elem.id === productId);
    setSelectedProduct(selectedValue);
}
    
  return (
    <>
      <div className="categ-slider-main-bx  right-monthly-sell-product-slider-main">
                <div className="arrivl-slider month-slider featured-slider">
                    <div className="arrivl-slider-container month-slider-cont feature-slid-cont">

                {featProd.map((curElem,index)=> {
                    return (
                        <>
                            <div className="slider-items slider-items2 slider-items3">
                        <ProdItemTwo id={curElem.id}
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
                    )
                })}

                </div>

                <button className="slide-btn feat-slide-prev prev slider-control month-slid-prev">
                  <i class="fa-solid fa-angle-left"></i>
                </button>

                <button className="slide-btn feat-slide-next next slider-control month-slide-next" >
                  <i class="fa-solid fa-angle-right"></i>
                </button>
                
                </div>
            </div>

            {selectedProduct  && <ProductDetPopup productData={selectedProduct}  onClose={() => setSelectedProduct(null)} />  }

            
    </>
  )
}

export default MonthlyFeatured
