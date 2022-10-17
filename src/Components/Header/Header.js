import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="location"> Address</h1>
      <h2 className="info">
        <ul >
          <li>number</li>
          <li>email</li>
        </ul>
      </h2>
    </header>
  );
};

export default Header;
