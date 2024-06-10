import React from "react";
import { IoIosTrophy } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { PiCameraFill } from "react-icons/pi";
import "./Content.css";

const Content = () => {
  return (
    <div className="header">
      <h1>Why Choose Us?</h1>

      <div className="--header-section">
        <div className="--header-first">
          <IoIosTrophy size={32} />
          <h2>Trusted by many</h2>
          <p>
            We have been tested and trusted by 20k+ apply home owners
          </p>
        </div>
        <div className="--header-first">
          <MdPayments size={32} />
          <h2>Flexible payment</h2>
          <p>
            You have the option to spread your payments depending on your income
          </p>
        </div>
        <div className="--header-first">
          <SiAntdesign size={32} />
          <h2>Modern interiors</h2>
          <p>
            We offer modern and quality interior designs and decor to suit your taste
          </p>
        </div>
        <div className="--header-first">
          <PiCameraFill size={32} />
          <h2>Low commissions</h2>
          <p>
            We charge little commission no matter how long your payment option is
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
