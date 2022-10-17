import React from "react";
import "./NavBar.css";
import { Nav } from "react-bootstrap";
import { useState } from "react";

const NavBarDesktop = () => {
  const [activeNavKey, setNavKey] = useState({
    home: "navItem",
    car: "navItem",
    aboutUs: "navItem",
  });

  console.log(activeNavKey);
  return (
    <header className="navBlock">
      <div className="title">
        <h1 style={{ color: "white" }}>Royalty</h1>
        <h1 style={{ color: "red" }}> Motors</h1>
      </div>

      <Nav
        onSelect={(selectedKey) => {

          switch (selectedKey) {
            case "home":
              setNavKey({
                car: "navItem",
                aboutUs: "navItem",
                home: "navItemActive",
              });
              break;
            case "car":
              setNavKey({
                home: "navItem",

                aboutUs: "navItem",
                car: "navItemActive",
              });
              break;
            case "aboutUs":
              setNavKey({
                home: "navItem",
                car: "navItem",

                aboutUs: "navItemActive",
              });
          }
        }}
        className="nav"
      >
        <Nav.Item className="navList">
          <Nav.Link eventKey={"home"} className={activeNavKey.home}>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navList">
          <Nav.Link eventKey={"car"} className={activeNavKey.car}>
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navList">
          <Nav.Link
            eventKey={"aboutUs"}
            href="#"
            className={activeNavKey.aboutUs}
          >
            Link
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default NavBarDesktop;
