import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div id="help" className="Lasles__footer section__padding">
      <div className="Lasles__footer-info">
        <div className="Lasles__footer-info__logo">
          <img src={logo} alt="logo" />
        </div>
        <p className="Lasles__footer-info__about">
          LaslesVPN is a private virtual network that has unique features and
          has high security.
        </p>
        <ul className="Lasles__footer-info__contact">
          {" "}
          <li>
            <FaFacebook style={{ color: "#F53838", fontSize: '25px' }}/>
          </li>
          <li>
            <FaInstagram style={{ color: "#F53838", fontSize: '25px' }}/>
          </li>
          <li>
            <FaTwitter style={{ color: "#F53838", fontSize: '25px' }}/>
          </li>{" "}
        </ul>
      </div>
      <div className="Lasles__footer-product">
        <h5 className="Lasles__footer-product__title">Product</h5>
        <ul className="Lasles__footer-product__list">
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Server</a>
          </li>
          <li>
            <a href="#">Countries</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="Lasles__footer-engage">
        <h5 className="Lasles__footer-engage__title">Engage</h5>
        <div className="Lasles__footer-engage__list">
          <li>
            <a href="#">LaslesVPN</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Privacy Police</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </div>
      </div>
      <div className="Lasles__footer-earnMoney">
        <h1 className="Lasles__footer-earnMoney__title">Earn Money</h1>
        <ul className="Lasles__footer-earnMoney__list">
          <li>
            <a href="#">Affiliate</a>
          </li>
          <li>
            <a href="#">Become Partner</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
