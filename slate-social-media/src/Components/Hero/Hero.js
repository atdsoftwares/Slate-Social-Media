import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div className="hero">
        <span className="hero-text">
          <span className="hero-heading">Connect With </span>
          <span className="hero-para">Like Minded folks , &</span>
          <span className="hero-para2">
            Share your Ideas.
            <Link to="/home">
              <button className="btn btn-success">Start Now </button>
            </Link>
          </span>
        </span>
        <img
          src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_social_networking_re_i1ex.svg"
          alt="note"
          className="hero-img"
        />
      </div>
    </div>
  );
}

export default Hero;
