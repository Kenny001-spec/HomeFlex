import React from "react";
import hero from "../../assets/Hero1.png";
import { Link, useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const metamask = () => {
    alert("Please connect wallet to get started");
  };

  return (
    <div className="hero">
      <div className="first-hero">
        <h1>
          Live your dream
          <br />
          lifestyle at <span> flexible</span>
          <br /> payments solutions
        </h1>
        <p>
          we are making it easy to purchase/rent
          <br /> properties within your budget at our
          <br /> affordable and flexible payments rates
        </p>
        <div className="sub-first-hero">
          <Link to="/marketplace">
            <button className="button">Get Started</button>
          </Link>
          <button
            className="navigate-button"
            onClick={() => navigate("/marketplace-form")}
          >
            Go to Marketplace Form
          </button>
          {/* <Link>
                <button onClick={metamask} className='button'>Get Started</button>
              </Link> */}
        </div>
      </div>
      <div className="second-hero">
        <img src={hero} alt="Hero Housing" />
      </div>
    </div>
  );
};

export default Hero;
