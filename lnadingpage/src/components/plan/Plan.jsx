import React from "react";
import "./Plan.css";
import hero from "../../assets/Plan.svg";
import { BsCheckLg } from "react-icons/bs";
function Plan({ list, title, Price }) {
  return (
    <div className="Lasles__plans-container__plan">
      <div className="Lasles__plans-container__plan-hero">
        <img src={hero} alt="Plan hero" />
      </div>
      <div className="Lasles__plans-container__plan-content">
        <h3 className="Lasles__plans-container__plan-content__title">
          {title}
        </h3>
        <div className="Lasles__plans-container__plan-content__text">
          {list.map((item) => {
            return (
              <p>
                <BsCheckLg color={"#2FAB73"} size={13} /> &nbsp; &nbsp; &nbsp;{" "}
                {item}
              </p>
            );
          })}
        </div>
      </div>

      <div className="Lasles__plans-container__plan-footer">
        <h2 className="Lasles__plans-container__plan-footer__Price">{Price}</h2>
        <div className="Lasles__plans-container__plan-footer__button">
          <button>Select</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
