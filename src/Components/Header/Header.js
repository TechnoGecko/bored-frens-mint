import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="bfm__header-container">
      <div className="bfm__header-upper-container">
        <img src="/media/bfb_logo.png" alt="A red bored fren NFT"></img>
        <h2>Presents:</h2>
      </div>
      <div className="bfm__header-lower-container">
        <div className="bfm__fren-container">
          <img src="/media/bfb2.png"></img>
        </div>
        <div className="bfm__header-title-container">
          <h1>The Bored Frens</h1>
          <h2>Come Join the Fun!</h2>
        </div>
        <div className="bfm__header-thf-container">
          <img src="/media/thf-30-white.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
