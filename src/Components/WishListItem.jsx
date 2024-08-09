import React, { useContext } from 'react'
import { ShopContext } from '../Context'

const WishListItem = () => {
    const {AllProdData , removeFromWishList , wishListItem ,  addToCart} = useContext(ShopContext);
    
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
                  <th>Stock Status</th>
                  <th>Action</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {wishListItem.map((e) => {
                    // if(wishListItem[e.id]>0){
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
                            <p className="cart-price">In Stock </p>
                          </td>

                          <td>
                            <button className="upd-btn" onClick={() => {addToCart(e.id)}}>
                                Add To Cart
                            </button>
                          </td>

                          <td>
                            <button className="cart-remve-prod-item" onClick={() => {removeFromWishList(e.id)}}>
                              <i class="fa-regular fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                    // }
                })}
              </tbody>
            </table>
          </div>

          <button className="upd-btn coupn-btn chckout-btn  cont-shop-btn">
            <i class="fa-solid fa-basket-shopping"></i> Continue Shopping
          </button>

          <div className="line-style"></div>

    
        </div>
      </section>
      
    </>
  )
}

export default WishListItem
