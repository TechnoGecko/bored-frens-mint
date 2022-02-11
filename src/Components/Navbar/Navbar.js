import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bfm__navbar-container">
      <div className="bfm__navbar-nav-buttons">
        {toggleMenu ? (
          <RiCloseLine
            className="bfm__mobile-menu-toggle"
            color="#131313"
            size={50}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="bfm__mobile-menu-toggle"
            color="#131313"
            size={50}
            onClick={() => setToggleMenu(true)}
          />
        )}

        <a className="bfm__link-primary bfm__navbar_nav-link">
          <p>Home</p>
        </a>
        <a className="bfm__link-primary bfm__navbar_nav-link">
          <p>About</p>
        </a>
        <a className="bfm__link-primary bfm__navbar_nav-link">
          <p>Roadmap</p>
        </a>
        <a className="bfm__link-primary bfm__navbar_nav-link">
          <p>Our Team</p>
        </a>
      </div>
      <div className="bfm__navbar-mint-date">
        <p>Mint Date: TBA</p>
      </div>
      <div className="bfm__navbar-social-links">
        <FaTwitter className="navbar-social-link" color="#131313" size={27} />
        <FaDiscord className="navbar-social-link" color="#131313" size={27} />
        <FaInstagram className="navbar-social-link" color="#131313" size={27} />
      </div>
    </div>
  );
};

export default Navbar;
