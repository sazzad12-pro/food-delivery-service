import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaHeart,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="address">
          <FaMapMarkerAlt className="text-white  " />
          <h5 className="text-white">ADDRESS </h5>
          <p className="text-white">
            103 North Loundoun Street., Winchester, VA
          </p>
        </div>
        <div className="open">
          <FaClock className="text-white  " />
          <h5 className="text-white">WE ARE OPEN</h5>
          <p className="text-white">
            Mon–Fri: 9am-10pm Sat: 10pm-4am Sun: 10am-7pm
          </p>
        </div>
        <div className="reservation">
          <FaPhoneAlt className="text-white  " />
          <h5 className="text-white">RESERVATION</h5>
          <p className="text-white">+63 9202740366 help@dinery.com</p>
        </div>
        <div className="connect">
          <FaHeart className="text-white  " />
          <h5 className="text-white">STAY CONNECTED</h5>
          <div className="icon">
            <FaFacebook />
            <FaYoutube className="ms-3" />
            <FaInstagram className="ms-3" />
          </div>
        </div>
      </div>
      <h4 className="text-white text-center">
        Copyright&copy;2022 All Rights Reserved.
      </h4>
    </div>
  );
};

export default Footer;
