import React from "react";
import "./about.css";
import { FaMouse, FaChevronDown } from "react-icons/fa";

const About = () => {
  return (
    <div className="bfm__about-container">
      <span className="bfm__about-scroll">
        <FaMouse className="about-scroll-mouse" size={32} color="white" />
        <FaChevronDown
          className="about-scroll-chevron slide-out-bottom fade-out"
          size={32}
          color="#c79dcd"
        />

        <h3>See how we're giving back</h3>
      </span>
      <div className="bfm__about-info-container">
        <div className="bfm__about-info">
          <h1>Who are the bored frens?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br />
            <br /> Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="bfm__about-img">
          <img src="/media/bfb1.jpg" alt="A bored fren NFT"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
