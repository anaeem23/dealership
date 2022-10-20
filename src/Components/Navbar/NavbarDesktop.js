import React from "react";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBarDesktop = () => {
  return (
    <>
      <div className="container-fluid navBlock">
        <div className="row in">
          <div className="col-8 title">
            <span style={{ color: "white" }}> Royalty</span>
            <span style={{ color: "red" }}>Motors</span>
          </div>
          <div className="col-4 navO">
        <div className="col-4 nav-item">
          <Link to="/home" className="navItem">Home</Link>
        </div>
        <div className="col-4 nav-item">
          <Link to="/inventory" className="navItem">Inventory</Link>
        </div>
        <div className="col-4 nav-item">
          <Link to="/aboutUs" className="navItem">About Us</Link>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarDesktop;
