import React from "react";
import "./NavBarM.css";
import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useLocation } from "react-router-dom";

const NavbarMobile = () => {
  const [activeNavKey, setNavKey] = useState({
    home: "navItem",
    car: "navItem",
    aboutUs: "navItem",
  });

  const [siteMap ,setSiteMap] = useState(false)

  const openNav = () => {
    setSiteMap(!siteMap)
    console.log(siteMap)
  }
const location = useLocation()

  
  useEffect(() => {
    setSiteMap(false)
  }, [location]);



  console.log(activeNavKey);
  return (
    <>
    <header className="navBlock">
      <div className="titleM">
        <h1 style={{ color: "white" }}>Royalty</h1>
        <h1 style={{ color: "red" }}> Motors</h1>

      </div>

<div className="siteMap">
<button onClick={openNav} type="button" className="btn btnM btn-danger">Menu</button>

    </div>


     
    </header>


    <ul className="siteMapOptions" style={{display: siteMap ? 'block' : 'none'}} >
        <li >
          <Link className="navItemM" to="/home" >Home</Link>
        </li>
        <li >
          <Link className="navItemM" to="/inventory" >Inventory</Link>
        </li>
        <li >
          <Link className="navItemM" to="/aboutUs" >About Us</Link>
        </li>
    </ul>

    </>
  );
};

export default NavbarMobile