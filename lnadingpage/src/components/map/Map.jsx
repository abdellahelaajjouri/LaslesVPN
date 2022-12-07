import React from "react";
import "./Map.css";
import map from "../../assets/Map.svg";
function Map() {
  return (
    <div className="Lasles__network-content__map">
      <img src={map} alt="Map" />
    </div>
  );
}

export default Map;
