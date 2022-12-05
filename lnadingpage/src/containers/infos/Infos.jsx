import React from "react";
import "./Infos.css";
import infoLocation from "../../assets/infoLocation.png";
import infoServer from "../../assets/infoServer.png";
import infoUser  from "../../assets/infoUser.png";
export default function Infos() {
  return (
    <div className="Lasles__Infos section__margin">
      <div className="Lasles__Infos-container">
        <div className="Lasles__Infos-container__info">
          <div className="Lasles__Infos-container__info-icon">
            <img src={infoUser} alt="info User" />
          </div>
          <div className="Lasles__Infos-container__info-content">
            <p className="Lasles__Infos-container__info-content__title">90+</p>
            <p className="Lasles__Infos-container__info-content__text">Users</p>
          </div>
          
        </div>
        <hr />
        <div className="Lasles__Infos-container__info">
          <div className="Lasles__Infos-container__info-icon">
            <img src={infoLocation} alt="info Location" />
          </div>
          <div className="Lasles__Infos-container__info-content">
            <p className="Lasles__Infos-container__info-content__title">30+</p>
            <p className="Lasles__Infos-container__info-content__text">
              Locations
            </p>
          </div>
        </div>
        <hr />

        <div className="Lasles__Infos-container__info">
          <div className="Lasles__Infos-container__info-icon">
            <img src={infoServer} alt="info Server" />
          </div>
          <div className="Lasles__Infos-container__info-content">
            <p className="Lasles__Infos-container__info-content__title">50+</p>
            <p className="Lasles__Infos-container__info-content__text">
              Servers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
