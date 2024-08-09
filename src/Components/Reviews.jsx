import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import RevData from "../JsonData/RevData";
const Reviews = () => {
  return (
    <>
      <div className="review-main-bx">
        <div className="left-reviews-main-bx">
          <h6>Customer questions & answers</h6>

          <div className="all-revw-flex-bx">
            {RevData.map((elem, indx) => {
              return (
                <>
                  <div className="review-bx">
                    <div className="left-user-img-bx" key={indx}>
                      <img src={elem.revImg} alt="" />
                      <div className="user-info">
                        <p> {elem.name} </p>
                        <span>Since {elem.year}</span>
                      </div>
                    </div>

                    <div className="right-user-text-main-bx">
                      <div className="rev-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </div>

                      <p> {elem.text} </p>

                      <div className="date-reply-flex-bx">
                        <span> {elem.date} </span>

                        <button className="reply-btn">
                          Reply
                          <HiArrowLongRight className="arw-i" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="left-reviews-main-bx right-cust-rev-ratings-main-bx">
          <h6>Customer reviews</h6>

          <div className="total-revw-rat-flex-bx">
            <div className="rev-rating rev-rating2">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>

            <p>4.8 out of 5</p>
          </div>

            <div className="rating-percent-main">
                <div className="rat-progress-bx">
                    <span>5 star</span>
                    <div className="progress-bar-bx">
                        <span>50%</span>
                    </div>
                </div>

                <div className="rat-progress-bx">
                    <span>4 star</span>
                    <div className="progress-bar-bx progress-bar-bx2">
                        <span>25%</span>
                    </div>
                </div>


                <div className="rat-progress-bx">
                    <span>3 star</span>
                    <div className="progress-bar-bx progress-bar-bx3">
                        <span>45%</span>
                    </div>
                </div>

                <div className="rat-progress-bx">
                    <span>2 star</span>
                    <div className="progress-bar-bx progress-bar-bx4">
                        <span>65%</span>
                    </div>
                </div>

                <div className="rat-progress-bx">
                    <span>1 star</span>
                    <div className="progress-bar-bx progress-bar-bx5">
                        <span>85%</span>
                    </div>
                </div>
                
            </div>

            <span className="rat-cal-text">How are ratings calculated?</span>

          
        </div>

            

        
      </div>

      <div className="add-review-main-bx">

        <div className="add-rev-bx">

        <h6>Add a review</h6>

        <div className="blank-star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        

        <div className="add-rev-form">

            <form action="#">

                <div className="rev-inpt">
                    <textarea name="comment" id="comment" cols="30" rows="5" placeholder="Write Comment"></textarea>
                </div>

                <div className="rev-form-grid grid grid-two-col  grid-gap">

                <div className="rev-inpt">
                    <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                </div>

                <div className="rev-inpt">
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
                </div>
                </div>
                
            </form>

            <button className="submit-revw-btn submit-btn">
                    Submit Review
            </button>
            
        </div>
        </div>
        {/* dddddd */}
        
      </div>
    </>
  );
};

export default Reviews;
