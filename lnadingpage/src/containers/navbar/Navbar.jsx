import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => {
    return (
      <>
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#features">Features</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#pricing">Pricing</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#testimonial">Testimonials</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#help">Help</a>{" "}
        </li>
      </>
    );
  };
  return (
    <nav className="Lasles__navBar section__padding">
      <div className="Lasles__navBar-logo">
        <img src={logo} alt="LaslesVPN Logo" />
      </div>
      <ul className="Lasles__navBar-links">
        <Menu />
      </ul>
      <div className="Lasles__navBar-buttons">
        <button className="Sign-In">Sign In</button>
        <button className="Sign-Up">Sign Up</button>
      </div>
      <div className="Lasles__navBar-menu">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            color={"black"}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={27}
            color={"black"}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="Lasles__navBar-menu__container scale-up-center">
            <ul className="Lasles__navBar-menu__container-links">
              <Menu />
            </ul>
            <div className="Lasles__navBar-menu__container-buttons">
              <button className="Sign-In">Sign In</button>
              <button className="Sign-Up">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
