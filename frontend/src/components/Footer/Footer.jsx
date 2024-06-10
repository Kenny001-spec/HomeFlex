import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
            <p>Phone: (+234) 816-2263-500</p>
            <p>Address: 123 Main St, Anytown, USA</p>
            <p>abubakarkehinde88@gmail.com</p>
            <div className="--social-links">
              <a href="https://www.linkedin.com/in/kehinde-abubakar-029223252" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/kennySpec" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/kennyx55/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/Kenny001-spec" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="links">
            <h1>Quick Links</h1>
            <a href="/faqs">FAQs</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms of Service</a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;