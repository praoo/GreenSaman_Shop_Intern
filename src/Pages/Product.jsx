import React, { useContext, useState } from "react";
import { ShopContext } from "../Context";
import { NavLink, useParams } from "react-router-dom";
import "../Styles/ProductPopup.css";
import "../Styles/SingleProduct.css";
import Star from "../Components/Star";
import { IoWalletOutline } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { FiAnchor } from "react-icons/fi";
import Description from "../Components/Description";
import Reviews from "../Components/Reviews";
import RelatedProd from "../Components/RelatedProd";

const Product = () => {
  const [activeImg, setActiveImg] = useState(null);
  const [clor, setClor] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const [descRev, setDescRev] = useState("Description");
  const { AllProdData , addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const singleProdData = AllProdData.find((e) => e.id === Number(id));

  const handleSetImg = (getImgPath) => {
    setActiveImg(getImgPath);
  };

  const handleColor = (valueCol) => {
    setClor(valueCol);
  };

  const incNum = () => {
    if (quantity !== 15) {
      setQuantity(quantity + 1);
    }
  };

  const decNum = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDescRev = (getValue) => {
    setDescRev(getValue);
  };

  return (
    <>
      <div className="breadcrum-bx">
        <div className="common-container breadcrum-flex">
          <NavLink to="/">Home</NavLink>
          <span>Shop</span>
          <span> {singleProdData.prodName} </span>
        </div>
      </div>

      <section className="single-prod-comp">
        <div className="common-container">
          <div className="single-prod-grid grid grid-two-col grid-gap">
            <div className="left-sing-prod-img-bx">
              <div className="big-img-bx">
                <img src={activeImg || singleProdData.prodFront} alt="" />
              </div>

              <div className="sm-img-grid grid grid-four-col">
                {singleProdData.singleprodImg.map((imgPath, indx) => {
                  return (
                    <div
                      className={
                        activeImg === imgPath
                          ? "sml-img-bx smimgactive"
                          : "sml-img-bx"
                      }
                      key={indx}
                    >
                      <img
                        src={imgPath}
                        alt={imgPath}
                        onClick={() => handleSetImg(imgPath)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="right-sing-prod-det-main-bx right-prod-data-main-bx">
              <h3> {singleProdData.prodName} </h3>
              <div className="prod-rating-brand-flex-bx sing-prod-brand-name">
                <p>
                  {" "}
                  Brands : <span> {singleProdData.miniText} </span>{" "}
                </p>

                <div className="star-rat-flex-bx">
                  <div className="star-bx">
                    <Star className="star-bx-r" star={singleProdData.rating} />
                  </div>
                  <p className="review-bx review-bx2">
                    ({singleProdData.review} reviews){" "}
                  </p>
                </div>
              </div>

              <div className="prod-price-flex-bx prod-price-flex-bx-single-prodct">
                <h6> ₹{singleProdData.price} </h6>
                <h6> ₹{singleProdData.old_price} </h6>
              </div>

              <p className="des-text">
                Claritas est etiam processus dynamicus, Lorem ipsum dolor sit
                amet, qui sequitur mutationem consuetudium lectorum. Mirum est
                notare quam littera gothica, quam nunc putamus parum claram.
              </p>

              <div className="product-shipment-relt-det-flex-bx">
                <p>
                  <FiAnchor className="p-icon" /> 1 Year AL Jazeera Brand
                  Warranty{" "}
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
                    className={
                      clor === "red"
                        ? "color-sel-btn red selted"
                        : "color-sel-btn red"
                    }
                    onClick={() => handleColor("red")}
                  >
                    {" "}
                  </button>
                  <button
                    className={
                      clor === "yellow"
                        ? "color-sel-btn yellow selted"
                        : "color-sel-btn yellow"
                    }
                    onClick={() => handleColor("yellow")}
                  >
                    {" "}
                  </button>
                  <button
                    className={
                      clor === "white"
                        ? "color-sel-btn white selted"
                        : "color-sel-btn white"
                    }
                    onClick={() => handleColor("white")}
                  >
                    {" "}
                  </button>
                  <button
                    className={
                      clor === "orange"
                        ? "color-sel-btn orange selted"
                        : "color-sel-btn orange"
                    }
                    onClick={() => handleColor("orange")}
                  >
                    {" "}
                  </button>
                  <button
                    className={
                      clor === "blue"
                        ? "color-sel-btn blue selted"
                        : "color-sel-btn blue"
                    }
                    onClick={() => handleColor("blue")}
                  >
                    {" "}
                  </button>
                  <button
                    className={
                      clor === "green"
                        ? "color-sel-btn green selted"
                        : "color-sel-btn green"
                    }
                    onClick={() => handleColor("green")}
                  >
                    {" "}
                  </button>
                  <button
                    className={
                      clor === "pink"
                        ? "color-sel-btn pink selted"
                        : "color-sel-btn pink"
                    }
                    onClick={() => handleColor("pink")}
                  >
                    {" "}
                  </button>
                </div>

                <h6 className="mt-4">Size </h6>

                <div className="size-sel-bx">
                  <button
                    className={
                      size === "s" ? "size-sel-btn sizeactive" : "size-sel-btn"
                    }
                    onClick={() => setSize("s")}
                  >
                    S
                  </button>
                  <button
                    className={
                      size === "m" ? "size-sel-btn sizeactive" : "size-sel-btn"
                    }
                    onClick={() => setSize("m")}
                  >
                    M
                  </button>
                  <button
                    className={
                      size === "xl" ? "size-sel-btn sizeactive" : "size-sel-btn"
                    }
                    onClick={() => setSize("xl")}
                  >
                    XL
                  </button>
                  <button
                    className={
                      size === "xxl"
                        ? "size-sel-btn sizeactive"
                        : "size-sel-btn"
                    }
                    onClick={() => setSize("xxl")}
                  >
                    XXL
                  </button>
                </div>

                <h6 className="mt-4">Quantity </h6>

                <div className="quat-main-bx">
                  <button
                    className=" qunt-btn quat-dec-btn"
                    onClick={() => decNum()}
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>

                  <span> {quantity} </span>

                  <button
                    className="qunt-btn quat-inc-btn"
                    onClick={() => incNum()}
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>

                <div className="cart-btn-wishlist-btn-flex-bx">
                  <NavLink to="#">
                    <button className="cart-btn" onClick={() => {addToCart(singleProdData.id)}}> 
                      <ion-icon name="bag-outline"></ion-icon>
                      Add To Cart
                    </button>
                  </NavLink>

                  {/* <button className="wishlist-btn" onClick={() => {addToWishList(singleProdData.curentProd)}}>
                    <ion-icon name="heart-outline"></ion-icon>
                  </button> */}
                </div>

                <div className="prod-spec-det-bx">
                  <p>
                    SKU: <span>FWM15VKT</span>{" "}
                  </p>
                  <p>
                    Tags: <span>Cloth</span>{" "}
                  </p>
                  <p>
                    Availability: <span>Items In Stock</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="description-review-main-box">
            <div className="desc-revw-btn-flex-bx">
              <button
                className={
                  descRev === "Description"
                    ? "desc-revw-btn drbtnactive"
                    : "desc-revw-btn"
                }
                onClick={() => handleDescRev("Description")}
              >
                Description
              </button>

              <button
                className={
                  descRev === "Reviews"
                    ? "desc-revw-btn drbtnactive"
                    : "desc-revw-btn"
                }
                onClick={() => handleDescRev("Reviews")}
              >
                Reviews
              </button>
            </div>

            {descRev === "Description" ? <Description /> : null}
            {descRev === "Reviews" ? <Reviews /> : null}
          </div>

          <RelatedProd relatedProdData={singleProdData} />
        </div>
      </section>
    </>
  );
};

export default Product;
