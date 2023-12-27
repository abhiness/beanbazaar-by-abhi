import React from "react";
import "./Newsletter.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="news">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icons">
            <FaFacebookF />
          </div>
          <div className="icons">
            <FaInstagram />
          </div>
          <div className="icons">
            <FaTwitter />
          </div>
          <div className="icons">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
