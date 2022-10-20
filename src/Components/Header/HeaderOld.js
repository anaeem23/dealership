import React from "react";
import { useHref } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <p className="location"> 454 E North Ave, Lombard, IL 60148 <a className="locationBTN" href="https://www.google.com/maps/dir/42.0466263,-87.7664923/multiautos/@41.9800368,-88.0259443,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x880fb3c48ab5a81d:0x25c78116cdfb093f!2m2!1d-88.0055381!2d41.905359">Get Directions</a></p>
      <p className="info">
        <ul >
          <li>number</li>
          <li>email</li>
        </ul>
        </p>
        <p>
        <ul >
          <li className="hours">Monday-Friday: 8AM - 7PM</li>
          <li className="hours">Saturday: 10AM - 6PM</li>
          <li className="hours">Sunday: Closed</li>
        </ul>
      </p>
    </header>
  );
};

export default Header;
