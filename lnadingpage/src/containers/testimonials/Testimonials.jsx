import React from "react";
import "./Testimonials.css";
import { Testimonial } from "../../components/index.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import data from "./data.js";

function Testimonials() {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1050: { items: 3 },
  };

  const items = data.map(
    ({ name, location, rating, imgUrl, comment }, index) => {
      return (
        <Testimonial
          name={name}
          location={location}
          rating={rating}
          imgUrl={imgUrl}
          comment={comment}
          key={index}
        />
      );
    }
  );

  return (
    <div id="testimonial" className="Lasles__testimonials section__padding">
      <div className="Lasles__testimonials-header">
        <div className="Lasles__testimonials-header__title">
          Trusted by Thousands of Happy Customer
        </div>
        <div className="Lasles__testimonials-header__text">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </div>
      </div>
      <div className="Lasles__testimonials-header__content">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
}

export default Testimonials;
