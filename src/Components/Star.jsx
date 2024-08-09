import React from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const Star = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
        <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="icon" />
        ) : star >= number ? (
          <FaRegStarHalfStroke className="icon" />
        ) : (
          <CiStar className="icon" />
        )}
      </span>
    );
  });

  return <>

  <div className="star-flex-bx">
    {ratingStar}
  </div>
  
  </>;
};

export default Star;
