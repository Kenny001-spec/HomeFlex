import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerHeader">
      <div className="first-footer">
        <h1>
          Get our latest articles, <br /> offers and news first hand
        </h1>
        <form action="#" method="post" className="subscribe-form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="--footer">
        <div className="--footer-info">
          <div className="--contact">
            <h1>Contact</h1>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
            <p>Email: info@example.com</p>
            <div className="--social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
          <div className="links">
            <h1>Quick Links</h1>
            <a href="/faqs">FAQs</a>
            <a href="/properties">Contact</a>
            <a href="/terms">Terms of Service</a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;