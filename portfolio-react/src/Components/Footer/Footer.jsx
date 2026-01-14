import React from "react";
import "./Footer.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-left">
          <h2 className="footer-name">Riya Bansal</h2>
          <p>
            Full-Stack Developer (MERN)
            <br />
            B.Tech Computer Science & Engineering
            <br />
            Rajasthan Technical University, Kota
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          {/* Email */}
          <div className="footer-item">
            <img src={mail_icon} alt="email" />
            <a
              href="mailto:riyabnsl2004@gmail.com"
              className="footer-link"
            >
              riyabnsl2004@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="footer-item">
            <img src={call_icon} alt="phone" />
            <a
              href="tel:+919587359405"
              className="footer-link"
            >
              +91 9587359405
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Riya Bansal, Rajasthan Technical University, Kota. All Rights
        Reserved
      </div>
    </div>
  );
};

export default Footer;
