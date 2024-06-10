import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-heading">Contact Us</div>
      <div className="contact-subheading">Send us a message and we'll get back to you as soon as possible.</div>
      <div className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="text" placeholder="Email" className="contact-input" />
        <input type="text" placeholder="Subject" className="contact-input" />
        <textarea placeholder="Message" className="contact-textarea"></textarea>
        <button className="contact-button">Send</button>
      </div>
      <div className="social-container">
        <div className="social-heading">On The Web</div>
        <div className="social-icons">
          <div className="social-icon">
            <FaLinkedin />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
