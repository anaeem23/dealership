import React from "react";
import "./NavBarM.css";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const NavbarMobile = () => {
  const [activeNavKey, setNavKey] = useState({
    home: "navItem",
    car: "navItem",
    aboutUs: "navItem",
  });

  const [siteMap ,setSiteMap] = useState(true)

  const openNav = () => {
    setSiteMap(!siteMap)
    console.log(siteMap)
  }



  console.log(activeNavKey);
  return (
    <>
    <header className="navBlock">
      <div className="title">
        <h1 style={{ color: "white" }}>Royalty</h1>
        <h1 style={{ color: "red" }}> Motors</h1>

      </div>

<div className="siteMap">
<button onClick={openNav} type="button" className="btn btn-danger">Danger</button>

    </div>


     
    </header>


    <ul className="siteMapOptions" style={{display: siteMap ? 'block' : 'none'}} >
        <li>Home</li>
        <li>Cars</li>
        <li>AboutUs</li>
    </ul>

    </>
  );
};

export default NavbarMobile