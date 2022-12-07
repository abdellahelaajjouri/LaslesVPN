import React from "react";
import "./Testimonial.css";
import { AiFillStar } from "react-icons/ai";
function Testimonial({ name, location, rating, imgUrl, comment }) {
  console.log(imgUrl);
  return (
    <div className="Lasles__testimonials-header__content-testimonial">
      <div className="Lasles__testimonials-header__content-testimonial__header">
        <div className="Lasles__testimonials-header__content-testimonial__header-profile">
          <img src={imgUrl} alt="" />
        </div>
        <div className="Lasles__testimonials-header__content-testimonial__header-info">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
        <p className="Lasles__testimonials-header__content-testimonial__header-rating">
          {rating} &nbsp; <AiFillStar size={27} color={"yellow"} />
        </p>
      </div>
      <div className="Lasles__testimonials-header__content-testimonial__comment">
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Testimonial;
