import React from "react";
import "../Styles/Feature.css";

const Feature = () => {
  return (
    <>
      <section className="feature-comp">
        <div className="common-container">
          <div className="feat-grid grid grid grid-six-col grid-gap">
            <div className="feat-bx ">
              <div className="feat-img">
                <img src="/images/featre-img-1.png" alt="" />
              </div>

              <h6> Free Shipping </h6>
            </div>

            <div className="feat-bx feat-bx2">
              <div className="feat-img">
                <img src="/images/featre-img-2.png" alt="" />
              </div>

              <h6> Online Order </h6>
            </div>

            <div className="feat-bx feat-bx3">
              <div className="feat-img">
                <img src="/images/featre-img-3.png" alt="" />
              </div>

              <h6> Save Money </h6>
            </div>

            <div className="feat-bx feat-bx4">
              <div className="feat-img">
                <img src="/images/featre-img-4.png" alt="" />
              </div>

              <h6> Promotions </h6>
            </div>

            <div className="feat-bx feat-bx5">
              <div className="feat-img">
                <img src="/images/featre-img-5.png" alt="" />
              </div>

              <h6> Happy Sell </h6>
            </div>

            <div className="feat-bx feat-bx6">
              <div className="feat-img">
                <img src="/images/featre-img-6.png" alt="" />
              </div>

              <h6> 24/7 Support </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
