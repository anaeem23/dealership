import React from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarDesktop = () => {
  return (
    <header className="navBlock">
      
      <div className="title">
        <h1 style={{ color: "white" }}>Royalty</h1>
        <h1 style={{ color: "red" }}> Motors</h1>
      </div>
       

      <Nav>
        <Nav.Item className="navItem">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link href="/inventory">Inventory</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link href="aboutUs">About Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default NavBarDesktop;
