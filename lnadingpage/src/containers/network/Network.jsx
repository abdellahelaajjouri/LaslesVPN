import React from "react";
import "./Network.css";
import { Brand, Map } from "../../components/index.js";

function Network() {
  return (
    <div className="Lasles__network section__padding">
      <header className="Lasles__network-header ">
        <h1 className="Lasles__network-header__title">
          Huge Global Network of Fast VPN
        </h1>
        <p className="Lasles__network-header__text">
          See <span> LaslesVPN </span>everywhere to make it easier for you when
          you move locations.
        </p>
      </header>
      <main className="Lasles__network-content">
        <Map />
        <Brand />
      </main>
    </div>
  );
}

export default Network;
