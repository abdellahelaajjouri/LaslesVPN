import React from "react";
import "./Testimonials.css";
import { Testimonial } from "../../components/index.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Testimonials() {
  const testimonialsArray = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: "4.5",
      imgUrl: "../../assets/testimonialRobert.svg",
      comment:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: "4.5",
      imgUrl: "../../assets/testimonialRobert.svg",
      comment:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: "4.5",
      imgUrl: "../../assets/testimonialRobert.svg",
      comment:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: "4.5",
      imgUrl: "../../assets/testimonialRobert.svg",
      comment:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    // {
    //   name: "",
    //   location: "",
    //   rating: "",
    //   imgUrl: "",
    //   comment: '',
    // },
    // {
    //   name: "",
    //   location: "",
    //   rating: "",
    //   imgUrl: "",
    //   comment: '',
    // },
    // {
    //   name: "",
    //   location: "",
    //   rating: "",
    //   imgUrl: "",
    //   comment: '',
    // },
  ];
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1050: { items: 3 },
  };

  const items = testimonialsArray.map(
    ({ name, location, rating, imgUrl, comment }) => {
      return (
        <Testimonial
          name={name}
          location={location}
          rating={rating}
          imgUrl={imgUrl}
          comment={comment}
        />
      );
    }
  );

  return (
    <div className="Lasles__testimonials section__padding">
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
