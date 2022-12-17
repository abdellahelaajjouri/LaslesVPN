import React from "react";
import "./Features.css";
import features from "../../assets/features.svg";
import check from "../../assets/featuresCheck.png";
export default function Features() {
  return (
    <div id="features" className="Lasles__features section__padding">
      <div className="Lasles__features-hero">
        <img src={features} alt="features" />
      </div>
      <div className="Lasles__features-content ">
        <h1 className="Lasles__features-content__title">
          We Provide Many Features You Can Use
        </h1>
        <p className="Lasles__features-content__text">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="Lasles__features-content__list">
          <li>
            {" "}
            <img src={check} alt="check" /> Powerfull online protection.
          </li>
          <li>
            {" "}
            <img src={check} alt="check" /> Internet without borders.
          </li>
          <li>
            {" "}
            <img src={check} alt="check" /> Supercharged VPN
          </li>
          <li>
            {" "}
            <img src={check} alt="check" /> No specific time limits.
          </li>
        </ul>
      </div>
    </div>
  );
}
