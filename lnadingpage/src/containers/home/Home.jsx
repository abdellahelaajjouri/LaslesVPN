import React from "react";
import Hero from "../../assets/home.svg";
import "./Home.css";
export default function Home() {
  return (
    <div name="about" className="Lasles__Home section__padding">
      <div className="Lasles__Home-content">
        <div className="Lasles__Home-content__title">
          Want anything to be easy with <span> LaslesVPN.</span>
        </div>
        <div className="Lasles__Home-content__text">
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </div>

        <div className="Lasles__Home-content__button">
          <button> Get Started</button>
        </div>
      </div>
      <div className="Lasles__Home-hero">
        <img src={Hero} alt="Lasles Home hero" />
      </div>
    </div>
  );
}
