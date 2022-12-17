import React from "react";
import "./Brand.css";
import Netflix from "../../assets/brandsNetflix.svg";
import Reddit from "../../assets/brandsReddit.svg";
import Amazon from "../../assets/brandsAmazon.svg";
import Discord from "../../assets/brandDiscord.svg";
import Spotify from "../../assets/brandsSpotify.svg";

export default function Brand() {
  return (
    <div className="Lasles__network-content__Brands">
      <div className="Lasles__network-content__Brands-container">
        <img src={Reddit} alt="Reddit logo" />
        <img src={Discord} alt="Discord logo" />
        <img src={Spotify} alt="Spotify logo" />
      </div>
    </div>
  );
}
