import React, { useContext, useState } from "react";
import Star from "./Star";
import { IoWalletOutline } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { FiAnchor } from "react-icons/fi";
import "../Styles/ProductPopup.css";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context";

const ProductDetPopup = ({ productData , onClose }) => {
  const [clor, setClor] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1)
   const {addToCart , addToWishList } = useContext(ShopContext);


  const handleColor = (valueCol) => {

    setClor(valueCol);

  }

  const incNum = () => {

    if(quantity !== 15){
    setQuantity(quantity + 1);

    }
    
  }

  const decNum = () => {

    if(quantity !== 0){
    setQuantity(quantity - 1);

    }
    
  }

  return (
    <>
      <section className="product-popup-data-comp " onClick={onClose}>
        <div className="prod-popup-data-main-bx  grid grid-two-col grid-gap" onClick={(e) => e.stopPropagation()}>
          <div className="prod-left-img-bx prod-img-bx">
            <div className="prod-popup-img-bx">
            <img
              src={productData.prodFront}
              className="prod-img prod-img-1"
              alt=""
            />
            <img
              src={productData.prodBack}
              className="prod-img prod-img-2"
              alt=""
            />
            </div>
          </div>

          <div className="right-prod-data-main-bx">
            <h3> {productData.prodName} </h3>

            <div className="prod-rating-brand-flex-bx">
              <p>
                {" "}
                Brands : <span> {productData.miniText} </span>{" "}
              </p>

              <h6> {productData.rating} rating(s) </h6>

              <p className="review-bx">{productData.review} reviews </p>
            </div>

            <div className="star-bx">
              <Star className="star-bx-r" star={productData.rating} />
            </div>

            <div className="prod-price-flex-bx">
              <h6> ₹{productData.price} </h6>
              <h6> ₹{productData.old_price} </h6>
            </div>

            <p className="des-text">
              Claritas est etiam processus dynamicus, Lorem ipsum dolor sit
              amet, qui sequitur mutationem consuetudium lectorum. Mirum est
              notare quam littera gothica, quam nunc putamus parum claram.
            </p>

            <div className="product-shipment-relt-det-flex-bx">
              <p>
                <FiAnchor className="p-icon" /> 1 Year AL Jazeera Brand Warranty{" "}
              </p>
              <p>
                <FaArrowsRotate className="p-icon" /> 30 Day Return Policy{" "}
              </p>
              <p>
                <IoWalletOutline className="p-icon" /> Cash on Delivery
                available{" "}
              </p>
            </div>

            <div className="colors-selc-main-bx">
              <h6>Color : {clor} </h6>

              <div className="color-select-btn-flex">
                <button
                  className={ clor === "red" ? "color-sel-btn red selted" : "color-sel-btn red"}
                  onClick={() => handleColor("red")}
                >
                  {" "}
                </button>
                <button
                  className={ clor === "yellow" ? "color-sel-btn yellow selted" : "color-sel-btn yellow"}
                  onClick={() => handleColor("yellow")}
                >
                  {" "}
                </button>
                <button
                  className={ clor === "white" ? "color-sel-btn white selted" : "color-sel-btn white"}
                  onClick={() => handleColor("white")}
                >
                  {" "}
                </button>
                <button
                  className={ clor === "orange" ? "color-sel-btn orange selted" : "color-sel-btn orange"}
                  onClick={() => handleColor("orange")}
                >
                  {" "}
                </button>
                <button
                  className={ clor === "blue" ? "color-sel-btn blue selted" : "color-sel-btn blue"}
                  onClick={() => handleColor("blue")}
                >
                  {" "}
                </button>
                <button
                  className={ clor === "green" ? "color-sel-btn green selted" : "color-sel-btn green"}
                  onClick={() => handleColor("green")}
                >
                  {" "}
                </button>
                <button
                  className={ clor === "pink" ? "color-sel-btn pink selted" : "color-sel-btn pink"}
                  onClick={() => handleColor("pink")}
                >
                  {" "}
                </button>
              </div>

              <h6 className="mt-4">Size </h6>

              <div className="size-sel-bx">

                <button className= { size === "s" ?"size-sel-btn sizeactive" : "size-sel-btn"} onClick={() => setSize("s")}>
                  S
                </button>
                <button className= { size === "m" ?"size-sel-btn sizeactive" : "size-sel-btn"} onClick={() => setSize("m")}>
                  M
                </button>
                <button className= { size === "xl" ?"size-sel-btn sizeactive" : "size-sel-btn"} onClick={() => setSize("xl")}>
                  XL
                </button>
                <button className= { size === "xxl" ?"size-sel-btn sizeactive" : "size-sel-btn"} onClick={() => setSize("xxl")}>
                  XXL
                </button>
                
              </div>

              <h6 className="mt-4">Quantity </h6>

              <div className="quat-main-bx">

                <button className=" qunt-btn quat-dec-btn" onClick={() => decNum()}>
                <i class="fa-solid fa-minus"></i>
                </button>

                <span> {quantity} </span>

                <button className="qunt-btn quat-inc-btn" onClick={() => incNum()}>
                <i class="fa-solid fa-plus"></i>
                </button>
                
              </div>


              <div className="cart-btn-wishlist-btn-flex-bx">

                <NavLink to='#'>
                  <button className="cart-btn" onClick={() => {addToCart(productData.id)}}>
                  <ion-icon name="bag-outline"></ion-icon>
                    Add To Cart
                  </button>
                </NavLink>
{/* onClick={() => {addToWishList(productData.curentProd)}} */}
                {/* <button className="wishlist-btn" >
                <ion-icon name="heart-outline"></ion-icon>
                </button> */}
                
              </div>

              <div className="prod-spec-det-bx">

                <p>SKU: <span>FWM15VKT</span> </p>
                <p>Tags: <span>Cloth</span> </p>
                <p>Availability: <span>Items In Stock</span> </p>

                
              </div>

              
            </div>

            
            <button className="close-popup-btn" onClick={onClose}>
              <ion-icon name="close-outline"></ion-icon>
              </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetPopup;
