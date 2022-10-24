import React from "react";
import "./NavBarM.css";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";

const NavbarMobile = () => {
  const [activeNavKey, setNavKey] = useState({
    home: "navItem",
    car: "navItem",
    aboutUs: "navItem",
  });

  const [siteMap, setSiteMap] = useState(false);

  const openNav = () => {
    setSiteMap(!siteMap);
    console.log(siteMap);
  };
  const location = useLocation();

  useEffect(() => {
    setSiteMap(false);
  }, [location]);

  console.log(activeNavKey);
  return (
    <>
    <div className="container-fluid navBlockM">
      <div className="row">
        <div className="col-10 titleM">
        <span style={{ color: "white" }}> Elite</span>
            <span style={{ color: "red" }}>Motors</span>
        </div>
        <div className="col-2 siteMap">
        <button
            onClick={openNav}
            type="button"
            className="btn btnM btn-danger"
          >
            Menu
          </button>
        </div>
      </div>
    </div>
     

    

      <ul
        className={siteMap ? "siteMapOptions navAppear" : "siteMapOptions" }
        style={{ display: siteMap ? "block" : "none" }}
      >
        <li>
          <Link className="navItemM" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="navItemM" to="/inventory">
            Inventory
          </Link>
        </li>
        <li>
          <Link className="navItemM" to="/aboutUs">
            About Us
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarMobile;
