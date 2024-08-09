import React, { useContext } from "react";
import { ShopContext } from "../Context";

const CartComp = () => {
  const { AllProdData, getTotalAmount , removeFromCart, cartItems } = useContext(ShopContext);

  return (
    <>


<section className="cart-item-comp">
        <div className="common-container">
          <div className="cart-item-table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {AllProdData.map((e) => {
                  if (cartItems[e.id] > 0) {
                    return (
                      <>
                        <tr>
                          <td>
                            <div className="cart-prod-img-bx">
                              <img src={e.prodFront} alt="" />
                            </div>
                          </td>

                          <td>
                            <div className="cart-prod-name">
                              <h6>{e.prodName}</h6>
                              <p>
                                Maboriosam in a tonto nesciung eget distingy
                                magndapibus.
                              </p>
                            </div>
                          </td>

                          <td>
                            <p className="cart-price">₹ {e.price} </p>
                          </td>

                          <td>
                            <button className="cart-quantity"> {cartItems[e.id]} </button>
                          </td>

                          <td>
                            <p className="cart-price">₹ {e.price * cartItems[e.id]} </p>
                          </td>

                          <td>
                            <button className="cart-remve-prod-item" onClick={() => {removeFromCart(e.id)}}>
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>

          <button className="upd-btn coupn-btn chckout-btn  cont-shop-btn">
            <i class="fa-solid fa-basket-shopping"></i> Continue Shopping
          </button>

          <div className="line-style"></div>

          <div className="cal-shipping-main-bx grid ">
            <div className="left-discount-ship-main">
              <h6>Calculate Shipping</h6>
              <p>
                Flat rate: <span>5%</span>{" "}
              </p>

              <form action="#" className="dis-form-bx">
                <div className="dis-inpt-bx">
                  <select name="option" id="option">
                    <option value="Choose an option">Choose an option</option>
                    <option value="option">option</option>
                    <option value="option">option</option>
                    <option value="option">option</option>
                  </select>
                </div>

                <div className="dis-form-bx-grid grid grid-two-col grid-gap">
                  <div className="dis-inpt-bx">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State / Country"
                      autoComplete="off"
                    />
                  </div>

                  <div className="dis-inpt-bx">
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      placeholder="PostCode / Zip"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <button className="upd-btn">Update</button>

                <div className="appy-coupn-bx">
                  <div className="dis-inpt-bx dis-inpt-bx2">
                    <input
                      type="text"
                      name="coupon"
                      id="coupon"
                      placeholder="Apply Coupon"
                      autoComplete="off"
                    />
                  </div>

                  <button className="upd-btn coupn-btn">
                    <ion-icon name="prism-outline"></ion-icon> Apply
                  </button>
                </div>
              </form>
            </div>

            <div className="right-cart-totls-main-bx">
              <h5>Cart Totals</h5>

            

              <div className="card-totl-grid grid grid-two-col">
                <p>Shipping</p>

                <p> Free Shipping</p>
              </div>

              <div className="card-totl-grid grid grid-two-col">
                <p>Total</p>

                <p className="t-price"> ₹ {getTotalAmount()} </p>
              </div>

              <button className="upd-btn coupn-btn chckout-btn mt-4">
                <i class="fa-regular fa-credit-card"></i> Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
         
          
          
      
    </>
  );
};

export default CartComp;
